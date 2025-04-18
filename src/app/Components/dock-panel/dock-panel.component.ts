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
constructor(private router:Router) 
{
  this.dockItems = [ 
    { 
        label: '', 
        icon:'pi pi-home', 
        title:"Ana Sayfa",
    
    }, 
    { 
        label: '/device', 
        icon: 'pi pi-microchip-ai', 
        title:"Cihazlar",
    
    }, 
    { 
        label: '/devicetype', 
        icon: 'pi pi-gauge', 
        title:"Cihaz Tipi",
    
    }, 
    { 
        label:'/channel', 
        icon:'pi pi-wave-pulse', 
        title:"Kanal Yönetimi",
       
    }, 
    { 
      label:'/port', 
      icon:'pi pi-server', 
      title:"Port Yönetimi",
     
    }, 
  { 
      label:'/rele', 
      icon:'pi pi-list-check', 
      title:"Operasyon",
     
    }, 
    
];
}
route(op:string)
{
  this.router.navigate([op])
  window.location.href=op;
}
}
