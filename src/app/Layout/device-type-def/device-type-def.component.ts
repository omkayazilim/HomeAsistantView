import { Component } from '@angular/core';
import { DevicePortGet, DeviceTypeGet } from '../../Constants/ServiceConstants';
import { ApiClientService } from '../../Services/ApiClientService';
import { DockPanelComponent } from '../../Components/dock-panel/dock-panel.component';

@Component({
  selector: 'app-device-type-def',
  standalone: true,
  imports: [DockPanelComponent],
  templateUrl: './device-type-def.component.html',
  styleUrl: './device-type-def.component.scss'
})
export class DeviceTypeDefComponent {
  title = 'Omka Home Asistant Device Type Definition';

  constructor(private apiClient: ApiClientService) {
    this.getdata();
  }

  getdata(){
    this.apiClient.get(DeviceTypeGet,this,x=>{
     console.log(JSON.stringify(x));
     })
   }
}
