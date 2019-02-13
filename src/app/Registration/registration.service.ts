
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Registration } from './registration';

@Injectable()   

export class RegistrationServices {
    users : Registration[];
    
    constructor(private http:HttpClient){

    }
    sendToServer(url,users) {
        
        return this.http.post(url,users)
        } 
             
        }
    
