export interface User {
  id: string;
  email: string;
}

export interface Session {
  access_token: string;
  user: User;
}

export interface UserProfile {
  userId: string;
  username: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthContextType {
  session: Session | null;
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{error: Error | null}>;
  signup: (email: string, password: string, username: string) => Promise<{error: Error | null}>;
  logout: () => void;
  updateProfile: (data: Partial<UserProfile>) => Promise<{error: Error | null}>;
  updateAvatar: (file: File) => Promise<{error: Error | null; url?: string}>;
}

export interface AuthResponse {
  access_token?: string;
  user?: User;
  error_description?: string;
  msg?: string;  
}

export interface ApiError {
  message: string;
  status: number;
}