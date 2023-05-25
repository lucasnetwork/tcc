export interface ILog {
   
    id?: string;
    program: string;
    priority: string;
    message: string;
    isodate: string;
    host: string;
    facility: string;
    date: string;
    createdAt?: Date;
  }
  