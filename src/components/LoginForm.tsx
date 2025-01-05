import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className='overflow-hidden'>
                <CardContent className='grid p-0 md:grid-cols-2'>
                    <form className='p-6 md:p-8'>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='text-2xl font-bold'> Welcome back </h1>
                            <p className='text-balance text-muted-neutral'>Login to your account.</p>
                        </div>
                        <div className='grid gap-2'>
                            <Label htmlFor='email'>Email or Username</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder='email or username'
                                required
                            />
                        </div>
                        <div className='grid gap-2'>
                            <div className='flex items-center'>
                                <Label htmlFor='email'>Password</Label>
                                <a href='#'>
                                    Forgot your password?
                                </a>
                            </div>
                            <Input
                                id='password'
                                type='password'
                                placeholder='password'
                                required
                            />
                        </div>
                        <Button type='submit' className='w-full'> Login </Button>
                        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                            <span className="relative z-10 bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <Button className='w-full'>
                                Login with wallet
                            </Button>
                        </div>
                        <div>
                            No account yet?
                            <a href='#' className='underline underline-offset-4'>
                                Sign up
                            </a>
                        </div>
                    </form>
                    <div className='relative hidden bg-muted md:block'>
                        <img src='/auth-promo.png' alt='promo'
                        className='absolute inset-0 h-full w-full object-cover'
                        />
                    </div>
                </CardContent>
            </Card>
            <div className='text-balance text-center text-xs text-muted [&_a]:underline [&_a]:underline-offset-4'>
                By clickin continue, you agree to our <a href='#'>Terms of Service</a> and <a href='#'> Privacy Policy</a>.
            </div>
        </div>
    )
}