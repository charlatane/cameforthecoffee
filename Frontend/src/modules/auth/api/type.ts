export interface LoginRequest {
  data: {
      username: string;
      password: string;
    
  };
}
export interface LoginResponse {
  accessToken: string;
  user: {
    role: string;
    id: string;
  };
}

export interface GetCurrentUserRequest {}
export interface GetCurrentUserResponse {
  user: {
    id: string;
    name: string;
    email: string;
    contact: string;
    role: string;
  };
}
