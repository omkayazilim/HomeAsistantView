import { Component } from '@angular/core';
import { ApiClientService } from '../../Services/ApiClientService';
import { DeviceGet } from '../../Constants/ServiceConstants';
import { DockPanelComponent } from '../../Components/dock-panel/dock-panel.component';

@Component({
  selector: 'app-device-def',
  standalone: true,
  imports: [DockPanelComponent],
  providers:[ApiClientService],
  templateUrl: './device-def.component.html',
  styleUrl: './device-def.component.scss'
})
export class DeviceDefComponent {
  title = 'Omka Home Asistant Device Definition';
  constructor(private apiClient: ApiClientService) {
    this.getdata();
  }

  getdata(){
    this.apiClient.get(DeviceGet,this,x=>{
     console.log(x);
     })
   }
}
