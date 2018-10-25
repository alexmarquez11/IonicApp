import { NuevopresupuestoPage } from './../presupesto/nuevopresupuesto/nuevopresupuesto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PresupestoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presupesto',
  templateUrl: 'presupesto.html',
})
export class PresupestoPage {

  pages: Array<{title: string, component: any, icon: string}>

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pages =[
      { title: 'Nuevo Presupuesto ', component: NuevopresupuestoPage, icon: 'add'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresupestoPage');
  }

  public logout(){


  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PresupestoPage, {
      item: item
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }

}
