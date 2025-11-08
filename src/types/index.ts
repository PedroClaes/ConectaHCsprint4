export interface User {
  id: string;
  email: string;
  name: string;
  role: 'patient' | 'admin';
}

export interface AuthCredentials {
  email: string;
  password: string;
}