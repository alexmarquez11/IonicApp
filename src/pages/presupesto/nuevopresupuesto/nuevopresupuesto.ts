import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the NuevopresupuestoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevopresupuesto',
  templateUrl: 'nuevopresupuesto.html',
})
export class NuevopresupuestoPage {

  NuevoPresu : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,public formbuilder :FormBuilder) {

    this.NuevoPresu = this.createNPresupuesto();
  }

    private createNPresupuesto(){

      return this.formbuilder.group({
        NoDepartamento: ['', Validators.required],
        departamento: ['', Validators.required],
        coordinador: ['', Validators.required],
        fecha: ['', Validators.required],
        monto: ['', Validators.required]
      })


    }

    saveData(){
      console.log(this.NuevoPresu.value);
    }

    

}
