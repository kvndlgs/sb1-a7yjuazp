import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType, Session, User,  UserProfile, AuthResponse, ApiError } from '../types/game';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const ANON_KEY = process.env.VITE_SUPABASE_KEY;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadSession = () => {
      const storedSession = localStorage.getItem('session');
      if (storedSession) {
        try {
          const parsedSession = JSON.parse(storedSession);
          setSession(parsedSession);
          loadUserProfile(parsedSession.user.id);
        } catch (error) {
          console.error('Failed to parse stored session:', error);
          localStorage.removeItem('session');
        }
      }
      setLoading(false);
    };

    loadSession();
  }, []);

  const loadUserProfile = async (userId: string) => {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/profiles?user_id=eq.${userId}`, {
        headers: {
          'apiKey': ANON_KEY,
          'Authorization': `Bearer ${session?.access_token}`
        }
      });
      if (!response.ok) throw new Error('Failed to load profile.');

      const [profileData] = await response.json();
      if (profileData) {
        setProfile(profileData);
      }
    } catch (error) {
      console.error('Error loading profile.', error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': ANON_KEY
        },
        body: JSON.stringify({ email, password })
      });

      const data: AuthResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error_description || data.msg || 'Authentication failed');
      }

      if (!data.access_token || !data.user) {
        throw new Error('Invalid response from server');
      }

      const newSession: Session = {
        access_token: data.access_token,
        user: {
          id: data.user.id,
          email: email
        }
      };

      localStorage.setItem('session', JSON.stringify(newSession));
      setSession(newSession);
      return { error: null };
    } catch (error) {
      return { error: error instanceof Error ? error : new Error('Unknown error occurred') };
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const response = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': ANON_KEY
        },
        body: JSON.stringify({ email, password })
      });

      const data: AuthResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error_description || data.msg || 'Signup failed');
      }

      if (!data.user) {
        throw new Error('Invalid response from server.');
      }

      const profileResponse = await fetch(`${SUPABASE_URL}/rest/v1/profiles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apiKey': ANON_KEY,
          'Authorization': `Bearer ${data.access_token}`
        },
        body: JSON.stringify({
          user_id: data.user.id,
          username,
          create_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
      });

      if (!profileResponse.ok) {
        throw new Error('Failed to create user profile.');
      }

      return { error: null };
    } catch (error) {
      return { error: error instanceof Error ? error : new Error('Unknown error occurred') };
    }
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      if (!session?.user.id) throw new Error('No authenticated user.');

      const response = await fetch(`${SUPABASE_URL}/rest/v1/profiles?user_id=eq.${session.user.id}`, {
         method: 'POST',
         headers: {
          'Content-Type': 'application.json',
          'apiKey': ANON_KEY,
          'Authorization': `Bearer ${session.access_token}`
         },
         body: JSON.stringify({
          ...data,
          updated_at: new Date().toISOString()
         })
      });

      if (!response.ok) throw new Error('Failed to update profile.');

      await loadUserProfile(session.user.id);
      return {error: null};
    } catch (error) {
      return { error: error instanceof Error ? error: new Error('Failed to update profile.');
      }
    };

    const updateAvatar = async (file: File) => {
      try {
        if (!session?.user.id) throw new Error('No authenticated user.');

        const formData = new FormData();
        formData.append('file', File);

        const uploadResponse = await fetch(`${SUPABASE_URL}/storage/v1/object/avatars/{session.user.id}`, {
          method: 'POST',
          headers: {
            'apiKey': ANON_KEY,
            'Authorization': `Bearer ${session.access_token}`
          },
          body: formData
        });

        if(!uploadResponse.ok) throw new Error('Failed to upload avatar');

        const url = `${SUPABASE_URL}/storage/v1/object/public/avatars/${session.user.id}`;

        await updateProfile({avatarUrl: url});

        return { error: null, url};
      } catch (error) {
        return { error: error instanceof Error ? error: new Error('Failed to update avatar.')}
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('session');
    setSession(null);
    setProfile(null);
  };

  const value: AuthContextType = {
    session,
    user: session?.user || null,
    profile,
    login,
    signup,
    logout,
    loading,
    updateProfile,
    updateAvatar
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};