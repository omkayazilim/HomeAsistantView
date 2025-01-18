import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { DockPanelComponent } from "../../Components/dock-panel/dock-panel.component";
import { MenubarComponent } from "../../Components/menubar/menubar.component";

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [DockPanelComponent, MenubarComponent],
  providers:[Router,DockModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent implements OnInit {
  items:[]=[];
  dockItems: MenuItem[]=[]; 
constructor(private router:Router) {

}
  ngOnInit(): void {
 
  }

}
