import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: any[] = [];

  searchValue: string = '';

  constructor(private alertController: AlertController,
        private toastController: ToastController    
    ) {
      this.lerLocalStorage();
    }

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
    this.atualizarLocalStorage();
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
      this.atualizarLocalStorage();
    }
  }

  alterarStatus(task: any){
    task.done = !task.done;
  }

  atualizarLocalStorage(){
    localStorage.setItem('taskDB', JSON.stringify(this.tasks));
  }

  lerLocalStorage(){
   this.tasks = JSON.parse(localStorage.getItem('taskDB') || '[]');
  }

  toFilter(event: any){
    this.toPrepareFilter(event);

    if(event.code =='Backspace'){
      this.lerLocalStorage();
      this.toPrepareFilter(event);
    }
  }

  filterTasks(search: string){
    return this.tasks.filter((i) => {
      return i.description.toLowerCase().includes(search.toLowerCase());
    });
  }
  toClearFilter(){
    this.lerLocalStorage();
  }

  toPrepareFilter(event: any){
    this.searchValue = event.target.value.toLowerCase();
    this.tasks = this.filterTasks(this.searchValue);
  }
}
