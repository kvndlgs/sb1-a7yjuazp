import {FC, useState, ChangeEvent, FormEvent } from 'react';
// import { Alert, AlertTitle, AlertDescription } from '../ui/alert';
import { Tabs, TabsTrigger, TabsList } from '../ui/tabs';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Card, CardHeader, CardContent } from '../ui/card';
import { useAuth } from '../../context/auth-context';
import { DialogProvider } from '../../components/DialogProvider';

interface FormData {
    email: string;
    password: string;
    username: string;
    avatar: File | null;
}

type AuthMode = 'login' | 'signup';


const AuthForms: FC = () => {

    const {session, login, signup } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);
//    const [error, setError] = useState<string | null>(null);
    const [authMode, setAuthMode] = useState<AuthMode>('login');
    const [formData, setFormData] = useState<FormData>({
      email: '',
      password: '',
      username: '',
      avatar: null
    });
    
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setFormData({
        ...formData,
        avatar: file
      });
    };
  
    const handleAuth = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
  //      setError(null);
        setLoading(true);
    
        try {
          const { email, password } = formData;
          let response;
    
          if (authMode === 'signup') {
            response = await signup(email, password);
            if (response.error) throw response.error;
            // Handle successful signup
            setAuthMode('login');
          } else {
            response = await login(email, password);
            if (response.error) throw response.error;
          }
        } catch (err) {
  //        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
          setLoading(false);
        }
      };
  
    if (loading) {
      return <div className="flex justify-center p-4">Loading...</div>;
    }
  
    return (
      <DialogProvider>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">
            {session ? 'Your Profile' : 'Welcome'}
          </h2>
        </CardHeader>
        <CardContent>
            <Tabs value={authMode}>
              <TabsList className="w-full mb-4">
                <TabsTrigger value="login" className="w-full">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="w-full">
                  Sign Up
                </TabsTrigger>
              </TabsList>
  
              <form onSubmit={handleAuth} className="space-y-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                {authMode === 'signup' && (
                  <>
                    <Input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <Input
                     type='text'
                     placeholder='email'
                     onChange={handleInputChange}
                    />
                  </>
                )}
                <Button type="submit" className="w-full">
                  {authMode === 'login' ? 'Log In' : 'Sign Up'}
                </Button>
              </form>
            </Tabs>
        
        </CardContent>
      </Card>
      </DialogProvider>
    );
};

export default AuthForms;