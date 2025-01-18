import { Component, OnInit } from '@angular/core';
import { DockPanelComponent } from '../../Components/dock-panel/dock-panel.component';
import { MenubarComponent } from "../../Components/menubar/menubar.component";
import { Router } from '@angular/router';
import { ChannelOperation } from '../../Constants/ServiceConstants';
import { ApiClientService } from '../../Services/ApiClientService';

@Component({
  selector: 'app-channel-operation',
  standalone: true,
  imports: [DockPanelComponent, MenubarComponent],
  providers:[ApiClientService],
  templateUrl: './channel-operation.component.html',
  styleUrl: './channel-operation.component.scss'
})
export class ChannelOperationComponent  implements OnInit
{
  constructor(private router:Router,private apiClient: ApiClientService){}
  ngOnInit(): void 
  {
   this.getdata();
  }
  getdata(){
    this.apiClient.get(ChannelOperation,this,x=>{
     console.log(JSON.stringify(x));
     })
   }

}
