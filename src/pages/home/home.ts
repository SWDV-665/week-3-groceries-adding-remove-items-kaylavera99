import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery"

  items = [
    {
      name: 'Milk', 
      quantity: 1,

    },
    {
      name: 'Bread', 
      quantity: 2,

    },
    {
      name: 'Bananas', 
      quantity: 4,

    },
    {
      name: 'Peanut Butter', 
      quantity: 2,

    },
    {
      name: 'Butter', 
      quantity: 3,

    },
    {
      name: 'Orange Juice', 
      quantity: 1,

    },
    {
      name: 'Coffee', 
      quantity: 3,

    },
    {
      name: 'Eggplant', 
      quantity: 2,

    }
  ]

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem (item, i) {
    console.log("Removing item - ", item, i)
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + i, 
      duration: 3000,
    });
    toast.present();
    this.items.splice(i, 1);
  }

  addItem() {
    console.log("Adding item item ");
    this.showAddItemPrompt();
  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: "Add item",
      message:  "Please enter item: ", 
      inputs: [
        {
          name: 'name',
          placeholder:'Name'
        },
        {
          name: 'quantity',
          placeholder:'Quantity'
        }
      ],

      buttons: [
        {
          text:'Cancel',
          handler: data => {
            console.log("Cancel clicked'");
          }
        },
        {
          text:'Save',
          handler: data => {
            console.log("Saved clicked ", data);
            this.items.push(data);
          }
        }
      ]
    });
    prompt.present();
  }
}
