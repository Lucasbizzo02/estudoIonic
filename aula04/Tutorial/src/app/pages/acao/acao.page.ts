import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-acao',
  templateUrl: './acao.page.html',
  styleUrls: ['./acao.page.scss'],
})
export class AcaoPage implements OnInit {


  constructor(private menu: ActionSheetController) { }

  ngOnInit() {
  }

  async acao(){
    const actionSheet = await this.menu.create({
      header: 'Fotos',
      buttons: [{ 
              text: 'Apagar', 
              icon: 'trash',
              handler: () => {
                console.log('Clicou em apagar');
              }
            },
            {
              text: 'Compartilhar',
              icon: 'share',
              handler: () => {
                console.log('Clicou em compartilhar');
              }
            },
            {
              text: 'Exibir',
              icon: 'arrow-redo-circle',
              handler: () => {
                console.log('Clicou em exibir');
              }
            }]
    });

    await actionSheet.present();
  }
}
