import { Component, OnInit } from '@angular/core';
import { DeviceTypeGet } from '../../Constants/ServiceConstants';
import { ApiClientService } from '../../Services/ApiClientService';
import { DockPanelComponent } from '../../Components/dock-panel/dock-panel.component';
import { MenubarComponent } from "../../Components/menubar/menubar.component";
import { DeviceTypeDefDto } from '../../Models/Dtos/DeviceTypeDefDto';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-device-type-def',
  standalone: true,
  imports: [DockPanelComponent, MenubarComponent,TableModule,CardModule],
  providers:[ApiClientService],
  templateUrl: './device-type-def.component.html',
  styleUrl: './device-type-def.component.scss'
})
export class DeviceTypeDefComponent  implements OnInit {
  title = 'Omka Home Asistant Device Type Definition';
  devicetypes:DeviceTypeDefDto[]=[];
  constructor(private apiClient: ApiClientService) {

  }
  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this.apiClient.get<DeviceTypeDefDto[]>(DeviceTypeGet,this,x=>{
     console.log(JSON.stringify(x));
     this.devicetypes=x;
     })
   }
}
