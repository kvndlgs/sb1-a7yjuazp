import { FC, useState, ChangeEvent, FormEvent } from 'react';
import { Card, CardHeader, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { useAuth } from '../../context/auth-context';

const Profile: FC = () => {
  const { profile, updateProfile, updateAvatar } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState(profile?.username || '');

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

  const handleAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);

    const { error, url } = await updateAvatar(file);
    
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
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-6">
          {profile.avatarUrl && (
            <div className="flex justify-center">
              <img
                src={profile.avatarUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
            </div>
          )}

          <div>
            <Input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              disabled={loading}
            />
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
              {loading ? 'Updating...' : 'Update Profile'}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;