import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { DockPanelComponent } from "../../Components/dock-panel/dock-panel.component";

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [DockPanelComponent],
  providers:[Router,DockModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent {
  items:[]=[];
  dockItems: MenuItem[]=[]; 
constructor(private router:Router) {

}
route(op:string){
  this.router.navigateByUrl(op);
}
}
