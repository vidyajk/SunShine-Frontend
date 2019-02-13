
import { Component } from '@angular/core';
import { User } from './login';
import { loginServices } from './login.service';


@Component({
    selector : 'login',
    templateUrl  :'./login.component.html'
})
export class loginComponent{
    response:string;
    user: User = new User();
    constructor(public ur:loginServices){

    }


verify(){
    let url1 = 'http://localhost:8150/verify'
    this.ur.sendToServer(url1,this.user).subscribe(data => {
        this.response = data['status'];

     
});
}
}