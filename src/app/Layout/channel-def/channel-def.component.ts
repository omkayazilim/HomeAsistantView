import { Component } from '@angular/core';
import { ApiClientService } from '../../Services/ApiClientService';
import { DeviceChannelGet } from '../../Constants/ServiceConstants';
import { DockPanelComponent } from '../../Components/dock-panel/dock-panel.component';

@Component({
  selector: 'app-channel-def',
  standalone: true,
  imports: [DockPanelComponent],
  providers:[ApiClientService],
  templateUrl: './channel-def.component.html',
  styleUrl: './channel-def.component.scss'
})
export class ChannelDefComponent {
  title = 'Omka Home Asistant Channel Definition';
  constructor(private apiClient: ApiClientService) {
    this.getdata();
  }

  getdata(){
    this.apiClient.get(DeviceChannelGet,this,x=>{
     console.log(x);
     })
   }
}
