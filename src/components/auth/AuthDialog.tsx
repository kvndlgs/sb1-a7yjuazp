import { Dialog, DialogContent } from '../ui/dialog';
import AuthForms from './Auth';

export const AuthDialog = () => {
    return (
        <Dialog>
            <DialogContent>
                <AuthForms />
            </DialogContent>
        </Dialog>
    )
}