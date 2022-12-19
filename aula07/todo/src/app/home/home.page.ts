import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks = new Array();

  constructor(private alertController: AlertController,
        private toastController: ToastController    
    ) {}

  async showAdd(){
    const alert = await this.alertController.create({
      header: 'O que deseja fazer?',
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
          handler: (form) => {this.incluir(form.task)}
        }
      ]
    });

    alert.present();
  }

  apagar(task: any){
    for(let i = 0; i < this.tasks.length; i++){
      if(task.description == this.tasks[i].description){
        this.tasks.splice(i, 1);
      }
    }
  }

  async incluir(newTask: string){
    if(newTask.trim().length < 1){

      const toast = await this.toastController.create({
        message: 'Informe a tarefa fdp!!!',
        duration: 2000,
        position: 'top'
      });
        toast.present();

    }else{
      this.tasks.push({description: newTask, done: false});
    }
  }

  alterarStatus(task: any){
    task.done = !task.done;
  }

  tarefaJson(){
    let valor = [{nome: "josé"}, {nome: "carlos"}];
    let jstring = '';

    jstring = '['

    for(let i = 0; i < valor.length; i++){
      jstring = jstring + "{";
      jstring = jstring + "nome:"
      jstring = jstring + valor[i].nome;
      jstring = jstring + "},";
  }
  jstring = jstring + ']'

  console.log(jstring);
  }
}
