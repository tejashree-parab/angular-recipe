import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-receipe-app';
  selectedMenu;

  menuSelectionFired(menuSelection: string){
    this.selectedMenu = menuSelection;
  }
}
