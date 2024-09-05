import { Container } from 'inversify';
import { AuthService } from './auth.service';
import { MockApiService } from './mock-api.service';
import { TYPES } from '../types';

const container = new Container();
console.log("Registering services in container...");

container.bind<AuthService>(TYPES.AuthService).to(AuthService);
container.bind<MockApiService>(TYPES.MockApiService).to(MockApiService);

export { container };
