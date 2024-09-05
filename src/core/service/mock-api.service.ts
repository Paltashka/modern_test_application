import { injectable } from 'inversify';
import { of, Observable, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import 'reflect-metadata';

@injectable()
export class MockApiService {
    fetchData(): Observable<string> {
        return timer(1000).pipe(
            map(() => 'Mock Data Response'),
            delay(500)
        );
    }

    login(username: string, password: string): Observable<string> {
        return of(username === 'user' && password === 'pass' ? 'mock-token' : 'invalid');
    }
}
