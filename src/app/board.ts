import { User } from './user';

export interface Board {
    num?:number;
    title:string;
    content:string;
    wdate?:string;
    writer:number;
    cnt?:number;
    user?:User;
}
