import React from 'react'
import { DialogContextType } from '../types/game';

export const DialogContext = React.createContext<DialogContextType>({
    openDialog: () => undefined,
    closeDialog: () => undefined
});

