import { Component } from '@angular/core';
import { ApiClientService } from '../../Services/ApiClientService';
import { DevicePortGet } from '../../Constants/ServiceConstants';
import { DockPanelComponent } from '../../Components/dock-panel/dock-panel.component';
import { MenubarComponent } from "../../Components/menubar/menubar.component";
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DevicePortDefDto } from '../../Models/Dtos/DevicePortDefDto';

@Component({
  selector: 'app-port-def',
  standalone: true,
  imports: [DockPanelComponent, MenubarComponent,TableModule,CardModule],
  providers:[ApiClientService],
  templateUrl: './port-def.component.html',
  styleUrl: './port-def.component.scss'
})
export class PortDefComponent {
  title = 'Omka Home Asistant Channel Definition';
  ports:DevicePortDefDto[]=[];

  constructor(private apiClient: ApiClientService) {
    this.getdata();
  }

  getdata(){
    this.apiClient.get<DevicePortDefDto[]>(DevicePortGet,this,x=>{
     console.log(JSON.stringify(x));
     this.ports=x;
     })
   }
}
