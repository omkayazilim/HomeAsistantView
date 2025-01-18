import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../Services/ApiClientService';
import { DeviceChannelGet } from '../../Constants/ServiceConstants';
import { DockPanelComponent } from '../../Components/dock-panel/dock-panel.component';
import { MenubarComponent } from "../../Components/menubar/menubar.component";
import { DeviceChannelDefDto } from '../../Models/Dtos/DeviceChannelDefDto';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-channel-def',
  standalone: true,
  imports: [DockPanelComponent, MenubarComponent,TableModule,CardModule],
  providers:[ApiClientService],
  templateUrl: './channel-def.component.html',
  styleUrl: './channel-def.component.scss'
})
export class ChannelDefComponent implements OnInit{
  title = 'Omka Home Asistant Channel Definition';
  chanels:DeviceChannelDefDto[]=[];
  constructor(private apiClient: ApiClientService) 
  {
  
  }
  ngOnInit(): void 
  {
    this.getdata();
  }

  getdata(){
    this.apiClient.get<DeviceChannelDefDto[]>(DeviceChannelGet,this,x=>
    {
      this.chanels=x;
     console.log(x);
    })
   }
}
