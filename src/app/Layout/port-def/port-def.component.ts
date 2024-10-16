import { Component } from '@angular/core';
import { ApiClientService } from '../../Services/ApiClientService';
import { DevicePortGet } from '../../Constants/ServiceConstants';
import { DockPanelComponent } from '../../Components/dock-panel/dock-panel.component';

@Component({
  selector: 'app-port-def',
  standalone: true,
  imports: [DockPanelComponent],
  providers:[ApiClientService],
  templateUrl: './port-def.component.html',
  styleUrl: './port-def.component.scss'
})
export class PortDefComponent {
  title = 'Omka Home Asistant Channel Definition';

  constructor(private apiClient: ApiClientService) {
    this.getdata();
  }

  getdata(){
    this.apiClient.get(DevicePortGet,this,x=>{
     console.log(JSON.stringify(x));
     })
   }
}
