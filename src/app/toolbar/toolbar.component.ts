import { Component, ViewChild,Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Input()  titre: string = '';
  @ViewChild('app-sidenav') snav!: MatSidenav;

  toggleSidenav() {
    this.snav.toggle();
 
  }
}
