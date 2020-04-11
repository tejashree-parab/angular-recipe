import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.css']
})
export class HeaderComponent{
    collapsed = true;
    @Output() menuSelected = new EventEmitter<string>();

    onSelect(event: string){
        this.menuSelected.emit(event);
    }
}