import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  async showAdd(){
    const alert = await this.alertController.create({
      header: 'o que deseja fazer?',
      inputs: [
        {name: 'task',
          type: 'text',
          placeholder: 'Digite a tarefa'
      }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {console.log('Cancelou...')}
        },
        {
          text: 'Adicionar',
          handler: () => {console.log('Adicionar item')}
        }
      ]
    });

    alert.present();
  }

  apagar(){

  }

}
