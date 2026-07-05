export type AuthUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export type AuthState = {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
};

export type LoginResponse = {
  token: string;
  user: AuthUser;
};