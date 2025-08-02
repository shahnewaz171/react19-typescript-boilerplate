import type { User } from '@/data/users';

export const getUserProfile = async (userId: number): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    id: userId,
    name: 'Shahnewaz',
    email: 'shahnewaz@gmail.com'
  };
};
