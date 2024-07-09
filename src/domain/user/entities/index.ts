export interface RefreshToken {
  id: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
  refreshToken?: RefreshToken;
}
