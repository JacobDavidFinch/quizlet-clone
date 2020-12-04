import React from 'react';
import { v4 as uuidv4 } from 'uuid';

type ModalProps = {
    children: React.ReactNode;
    active: boolean;
};

export function Modal({ children, active }: ModalProps) {
    return (
        <div className={`modal ${active}`} id={`modal-${uuidv4}`}>
            {children}
        </div>
    );
}
