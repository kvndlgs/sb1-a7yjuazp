import { FC, useState, FormEvent } from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
//import { Alert, AlertTitle, AlertDescription } from '../../components/ui/alert';
import { useAuth } from '../../context/auth-context';
//import { supabaseClient } from '../../config/supabase-client';

const UserProfile: FC = () => {
  const { profile, updateProfile, updateAvatar } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState(profile?.username || '');
  const [avatarUrl, setAvatarAvatarUrl] = useState(profile?.avatarUrl || '');

  const handleAvatarSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await updateAvatar({ avatarUrl });

    if (error) {
        setError(error.message);
    }
    setLoading(false);
  }

  const handleUsernameSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await updateProfile({ username });
    
    if (error) {
      setError(error.message);
    }
    
    setLoading(false);
  };


  if (!profile) {
    return null;
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Your Profile</h2>
      </CardHeader>
      <CardContent>
      
        

        <div className="space-y-6">

            <div className="flex justify-center">
              <img
                src={profile.avatarUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
            </div>

            <div>
              <form onSubmit={handleAvatarSubmit}>
              <Input
                type="file"
                accept="image/*"
                disabled={loading}
              />
              <Button type='submit' disabled={loading} className='w-full'>
                  {loading ? 'Loading' : 'Update Avatar' }
              </Button>
              </form>
            </div>
            
        
          

          <form onSubmit={handleUsernameSubmit} className="space-y-4">
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              disabled={loading}
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Updating...' : 'Update Username'}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;