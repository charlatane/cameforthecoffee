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

export interface RegisterRequest{
  first_name:string;
  last_name:string;
  username:string;
  email:string;
  password:string;

}

export interface RegisterResponse{
  text:string;
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
