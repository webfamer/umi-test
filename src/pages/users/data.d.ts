export interface SingleUserType {
    id: number;
    name: string;
    email: string;
    create_time: string;
    update_time: string;
    status: 1
  }
  export interface UserState {
    data: SingleUserType[];
    meta: {
      total: number;
      per_page:number;
      page: number
    }
  }