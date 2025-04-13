import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { DockPanelComponent } from "../../Components/dock-panel/dock-panel.component";
import { MenubarComponent } from "../../Components/menubar/menubar.component";
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ApiClientService } from '../../Services/ApiClientService';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [DockPanelComponent, MenubarComponent,PanelModule,CardModule],
  providers:[Router,DockModule,ApiClientService],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent implements OnInit {
  items:[]=[];
  dockItems: MenuItem[]=[]; 
constructor(private router:Router,private apiClient: ApiClientService) {

}
  ngOnInit(): void {
  
  }

  getcii(

  ){
    this.apiClient.postFetchDirect();
  }

}
