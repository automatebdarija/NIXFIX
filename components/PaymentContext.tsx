'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PaymentModalState {
    isOpen: boolean;
    deviceCount: number;
    duration: number; // 1, 6, or 12
}

interface PaymentContextType {
    state: PaymentModalState;
    openModal: (params?: Partial<Omit<PaymentModalState, 'isOpen'>>) => void;
    closeModal: () => void;
    setPaymentState: (updates: Partial<PaymentModalState>) => void;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<PaymentModalState>({
        isOpen: false,
        deviceCount: 1,
        duration: 12,
    });

    const openModal = (params?: Partial<Omit<PaymentModalState, 'isOpen'>>) => {
        setState(prev => ({ ...prev, ...params, isOpen: true }));
    };

    const closeModal = () => {
        setState(prev => ({ ...prev, isOpen: false }));
    };

    const setPaymentState = (updates: Partial<PaymentModalState>) => {
        setState(prev => ({ ...prev, ...updates }));
    };

    return (
        <PaymentContext.Provider value={{ state, openModal, closeModal, setPaymentState }}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePayment = () => {
    const context = useContext(PaymentContext);
    if (!context) {
        throw new Error('usePayment must be used within a PaymentProvider');
    }
    return context;
};
