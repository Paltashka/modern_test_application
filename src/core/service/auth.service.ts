import { injectable, inject } from 'inversify';
import { MockApiService } from './mock-api.service';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import 'reflect-metadata';
import { TYPES } from '../types';

@injectable()
export class AuthService {
    constructor(
        @inject(TYPES.MockApiService) private mockApiService: MockApiService
    ) { }

    login(username: string, password: string): Observable<string> {
        return this.mockApiService.login(username, password).pipe(
            switchMap((response) => {
                if (response === 'mock-token') {
                    localStorage.setItem('auth-token', response);
                    return of(response);
                } else {
                    return of('Invalid credentials');
                }
            }),
            catchError(() => of('An error occurred during authentication'))
        );
    }

    logout(): void {
        localStorage.removeItem('auth-token');
        console.log('Logged out');
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('auth-token');
    }
}
