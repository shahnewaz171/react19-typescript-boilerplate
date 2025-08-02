interface AuthResponse {
  message: string;
  status: number;
  timestamp: string;
}

export const requestForLog = async (): Promise<AuthResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return {
    message: 'Successfully logged in',
    status: 200,
    timestamp: new Date().toISOString()
  };
};
