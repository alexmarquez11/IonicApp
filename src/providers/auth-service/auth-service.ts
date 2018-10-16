import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class User{
  name: string;
  email: string;

  constructor(name: string, email: string){
    this.name= name;
    this.email=email;
  }
}
@Injectable()
export class AuthServiceProvider {

 currentUser : User;

 public login(credentials){
   if(credentials.username ===null || credentials.password == null)
   {
     return Observable.throw ("Por favor ingrese Credenciales");
   } else{
     return Observable.create(observer => {
       let access = (credentials.password === "pass" && credentials.username === "dmarquezg");
       this.currentUser = new User('Simon', 'saimgon@miumg.edu.gt');
       observer.next(access);
       observer.complete();
     });
   }
 }

 public getUserInfo(): User{
   return this.currentUser;
 }
 public logout() {
  return Observable.create(observer => {
    console.log("Hola Mundo");
    this.currentUser = null;
    observer.next(true);
    observer.complete();
  });
}
}
