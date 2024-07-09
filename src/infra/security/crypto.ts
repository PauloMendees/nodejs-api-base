import { hash, genSalt, compare } from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Crypto {
  async encrypt(data: string): Promise<string> {
    return genSalt(10)
      .then(salt => hash(data, salt))
      .then(hash => hash);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return compare(password, hash).then(resp => resp);
  }
}
