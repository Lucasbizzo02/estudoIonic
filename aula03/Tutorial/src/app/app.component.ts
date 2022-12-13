import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
     { title: 'Home', url: 'home', icon: 'home' },
    {title: 'Navegação', url:'navegacao', icon: 'locate'},
    {title: 'Botões', url:'botoes', icon: 'radio-button-on'},
    {title: 'Alerta', url: 'alerta', icon: 'chatbox'},
  ];
  public labels = ['Senac'];
  constructor() {}
}
