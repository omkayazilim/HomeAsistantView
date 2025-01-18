import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../Services/ApiClientService';
import { DeviceGet } from '../../Constants/ServiceConstants';
import { DockPanelComponent } from '../../Components/dock-panel/dock-panel.component';
import { MenubarComponent } from "../../Components/menubar/menubar.component";
import { TableModule } from 'primeng/table';
import { DeviceDefDto } from '../../Models/Dtos/DeviceDefDto';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-device-def',
  standalone: true,
  imports: [DockPanelComponent, MenubarComponent,TableModule,CardModule],
  providers:[ApiClientService],
  templateUrl: './device-def.component.html',
  styleUrl: './device-def.component.scss'
})
export class DeviceDefComponent implements OnInit{
  title = 'Omka Home Asistant Device Definition';
  devices:DeviceDefDto[]=[];
  constructor(private apiClient: ApiClientService) 
  {

  }
  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this.apiClient.get<DeviceDefDto[]>(DeviceGet,this,x=>{
     console.log(x);
     this.devices=x;
     })
   }
}
