import React, {FC} from 'react';
import {
    Dialog,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from './ui/dialog';
// import { DialogContext } from '../context/dialog-context';
// import { DialogContextType } from '../types/game';

export interface DialogContextType {
    openDialog: () => void;
    closeDialog: () => void;
  }

export const DialogContext = React.createContext<DialogContextType>({
    openDialog: async () => undefined,
    closeDialog: async () => undefined
});

interface DialogProviderProps {
    children: React.ReactNode
}

export const useDialog = (): DialogContextType => {
    const context = React.useContext(DialogContext);
    if (!context) {
        throw new Error('useDialog must be used within a DialogProvider');
    }
    return context;
}

export const DialogProvider: FC<DialogProviderProps> = ({children}) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const value: DialogContextType = React.useMemo(() => {
         openDialog: () => setOpen(true);
         closeDialog: () => setOpen(false);
    }, []);

    return (
        <DialogContext.Provider value={value}>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogHeader><DialogTrigger>x</DialogTrigger></DialogHeader>
                <DialogTitle> Yo </DialogTitle>
                <DialogDescription> A lil ahh description</DialogDescription>
                { children }
            </Dialog>
        </DialogContext.Provider>
    );
}