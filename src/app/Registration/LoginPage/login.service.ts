import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  User } from './login';

@Injectable()   

export class loginServices {

    
    constructor(private http:HttpClient){

    }
    sendToServer(url:string,user:User) {
        
        return this.http.post(url,user)
        } 
             
        }
    