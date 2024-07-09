import { User } from '../entities';
import { CreateUserDTO } from '../entities/dtos/create';

export interface UserRepository {
  getUserByEmail(email: string): Promise<User>;
  getUserByRefreshToken(refreshToken: string): Promise<User>;
  createUser(user: CreateUserDTO): Promise<User>;
}
