enum UserRole {
  "ADMIN",
  "USER",
}

export interface IRegisterFormik {
  name: string;
  email: string;
  role: UserRole | null;
  password: string;
  showPassword: boolean;
}
