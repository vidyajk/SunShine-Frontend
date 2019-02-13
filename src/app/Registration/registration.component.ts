import { Component } from '@angular/core';
import { Registration } from './registration';
import { RegistrationServices } from './registration.service';



@Component({
    selector: 'registration',
    templateUrl: './registration.component.html'
})

export class RegistrationComponent {
  response: string;
    user: Registration=new Registration();
    

    constructor(private ms: RegistrationServices){

    }
    
  //  keyPress(event: any) {
  //       const pattern = /[0-9\+\-\ ]/;
  //       let inputChar = String.fromCharCode(event.charCode);
  //       if (event.keyCode != 8 && !pattern.test(inputChar)) {
  //         event.preventDefault();
  //       }
  //     }

    store(){
        let url = "http://localhost:8150/customer/add"
        this.ms.sendToServer(url,this.user).subscribe(data => {
            this.response = data['status'];

    });
}
}
   