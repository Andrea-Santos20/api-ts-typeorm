import { Request } from 'express';


export interface TaskCreate extends Request {
    body: { title:string, description: string };
}

