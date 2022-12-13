import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
})
export class AlertaPage implements OnInit {

  constructor(private alerta: AlertController) { }

  ngOnInit() {
  }

  async exibir(){
    const mensagem = await this.alerta.create({
      header: 'Alerta',
      subHeader: 'Mensagem',
      message: 'Olá Monstro',
      buttons: ['Ok'],
    });

    mensagem.present();
  }

  async exibirCustom(){
    const mensagem = await this.alerta.create({
      header: 'Mensagem',
      message: 'Deseja realmente sair?',
      buttons: ['Ok', 'Cancelar'],
    });

    mensagem.present();
  }

  async exibirComplete(){
    const mensagem = await this.alerta.create({
      header: 'Confirmar',
      message: 'confirma a gravação?',
      buttons: [{text: 'Ok', 
                  handler: () => {
                    console.log('Vou gravar!');
                  }}, 
                {text: 'Cancelar', 
                  handler: () => {
                    console.log('Desistir!');
                }}]
    });

    mensagem.present();
  }
  
}