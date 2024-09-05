import { useState, useEffect, SetStateAction } from 'react';
import { container } from '../../core/service/infversify.config';
import { MockApiService } from '../../core/service/mock-api.service';

export const useAuth = () => {
    const mockApiService = container.get(MockApiService);
    const [session, setSession] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = (username: string, password: string) => {
        setLoading(true);
        mockApiService.login(username, password).subscribe({
            next: (result: SetStateAction<string | null>) => {
                if (result === 'mock-token') {
                    setSession(result);
                    setError(null);
                } else {
                    setSession(null);
                    setError('Invalid credentials');
                }
                setLoading(false);
            },
            error: (_err: any) => {
                setError('An error occurred');
                setLoading(false);
            },
        });
    };

    const logout = () => {
        setSession(null);
    };

    return { session, login, logout, loading, error };
};
