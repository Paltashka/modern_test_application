import React, { createContext, useContext, ReactNode } from 'react';
import { container } from '../../core/service/infversify.config';
import { AuthService } from '../../core/service/auth.service';
import { TYPES } from '../../core/types';

interface AuthContextType {
    authService: AuthService;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const authService = container.get<AuthService>(TYPES.AuthService);

    return (
        <AuthContext.Provider value={{ authService }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context.authService;
};
