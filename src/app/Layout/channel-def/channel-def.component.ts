import { Component } from '@angular/core';
import { ApiClientService } from '../../Services/ApiClientService';
import { DeviceGet } from '../../Constants/ServiceConstants';

@Component({
  selector: 'app-channel-def',
  standalone: true,
  imports: [],
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
    this.apiClient.get(DeviceGet,this,x=>{
     console.log(x);
     })
   }
}
