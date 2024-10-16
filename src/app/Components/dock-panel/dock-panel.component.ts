import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';

@Component({
  selector: 'dock-panel',
  standalone: true,
  imports: [DockModule],
  providers:[Router,DockModule],
  templateUrl: './dock-panel.component.html',
  styleUrl: './dock-panel.component.scss'
})
export class DockPanelComponent  {
  items:[]=[];
  dockItems: MenuItem[]=[]; 
constructor(private router:Router) {
  this.dockItems = [ 
    { 
        label: 'GfgLogo 1', 
        icon:'', 
        title:"Ana Sayfa",
    
    }, 
    { 
        label: 'GfgLogo 2', 
        icon: '', 
        title:"Cihazlar",
    
    }, 
    { 
        label: 'GfgLogo 3', 
        icon: '', 
        title:"Cihaz Tipi",
    
    }, 
    { 
        label:'GfgLogo 4', 
        icon:'', 
        title:"Kanal Yönetimi",
       
    }, 
];
}
route(op:string){
  this.router.navigateByUrl(op);
}
}
