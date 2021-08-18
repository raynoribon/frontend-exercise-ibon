export interface APIResponse<T> {
    success: boolean;
    msg: string;    
    data: T;
}

export interface EmployeeVM {
    id: number;
    firstname: string;
    lastname: number;
    email: string;    
  }