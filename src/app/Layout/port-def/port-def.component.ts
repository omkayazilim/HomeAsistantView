import { Component } from '@angular/core';
import { ApiClientService } from '../../Services/ApiClientService';
import { DeviceGet } from '../../Constants/ServiceConstants';

@Component({
  selector: 'app-port-def',
  standalone: true,
  imports: [],
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
    this.apiClient.get(DeviceGet,this,x=>{
     console.log(x);
     })
   }
}
