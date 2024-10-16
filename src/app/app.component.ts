import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApiClientService } from './Services/ApiClientService';
import { DeviceChannelGet, DeviceGet, DevicePortGet } from './Constants/ServiceConstants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers:[ApiClientService],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'Omka Home Asistant';
  constructor(private apiClient: ApiClientService) {
   
  }


}
