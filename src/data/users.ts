export interface User {
  id: number;
  name: string;
  email: string;
}

export const usersData: User[] = [
  { id: 1, name: 'John Doe', email: '' },
  { id: 2, name: 'Jane Smith', email: 'jane@example' }
];
