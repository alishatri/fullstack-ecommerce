export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  password: string;
}

enum Role {
  ADMIN,
  COSTUMER,
}
