import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, AlertController } from 'ionic-angular';
import {FormBuilder} from '@angular/forms';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})
export class LoginPage {

  loading: Loading;



  registerCredentials={ username:'', password:''};


  constructor(public navCtrl: NavController, public fb: FormBuilder, private auth: AuthServiceProvider, private loadingCtrl: LoadingController, 
    private alertCtrl : AlertController) {
    
  }

  public login(){
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed =>{
      if(allowed){
        this.navCtrl.setRoot(HomePage);
      } else{
        this.showError("Accesos Denegado")
      }
    })
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
