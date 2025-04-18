import { Component } from '@angular/core';
import { DockPanelComponent } from '../../Components/dock-panel/dock-panel.component';
import { CardModule } from 'primeng/card';
import { ApiClientService } from '../../Services/ApiClientService';
import { Router } from '@angular/router';
import { DockModule } from 'primeng/dock';
import { ReleGetDto, RelePostDto } from '../../Models/Dtos/ReleDto';

@Component({
  selector: 'app-relecontrol',
  standalone: true,
  imports: [DockPanelComponent,CardModule],
  providers:[Router,DockModule,ApiClientService],
  templateUrl: './relecontrol.component.html',
  styleUrl: './relecontrol.component.scss'
})
export class RelecontrolComponent 
{
  releList:ReleGetDto[]=[];
  releList2:ReleGetDto[]=[];
  
 constructor (private api: ApiClientService)
 {
    api.getCustomUrl<ReleGetDto[]>("http://rele1.omkayazilim.com/getValues",this,x=>{
      this.releList=x
      let k:number=0;
      this.releList.forEach(y=>{y.Title="Rele " +k++})
      console.log(this.releList);
    })

    api.getCustomUrl<ReleGetDto[]>("http://lambaderrele.omkayazilim.com/getValues",this,x=>{
      this.releList2=x
      let k:number=0;
      this.releList2.forEach(y=>{y.Title="Rele " +k++})
      console.log(this.releList2);
    })
 }
  actionRele(rele:ReleGetDto){
    console.log(rele);
    if(rele.Value==1){
       this.api.postCustomUrl<ReleGetDto[],RelePostDto>("http://rele1.omkayazilim.com/setStatus",{pin:rele.Pin, stat:true},this,x=>{
      this.releList=x
      let k:number=0;
      this.releList.forEach(y=>{y.Title="Rele " +k++})
      console.log(this.releList);
    });

    }
    else{}
     

    if(rele.Value == 0)
    {
      this.api.postCustomUrl<ReleGetDto[],RelePostDto>("http://rele1.omkayazilim.com/setStatus",{pin:rele.Pin, stat:false},this,x=>{
      this.releList=x
      let k:number=0;
      this.releList.forEach(y=>{y.Title="Rele " +k++})
      console.log(this.releList);
       });
      
     
    }
         else{}
  }

  actionRele2(rele:ReleGetDto)
  {
    console.log(rele);
    if(rele.Value==1){
       this.api.postCustomUrl<ReleGetDto[],RelePostDto>("http://lambaderrele.omkayazilim.com/setStatus",{pin:rele.Pin, stat:true},this,x=>{
      this.releList2=x
      let k:number=0;
      this.releList2.forEach(y=>{y.Title="Rele " +k++})
   
    });

    }
    else{}
     

    if(rele.Value == 0)
    {
      this.api.postCustomUrl<ReleGetDto[],RelePostDto>("http://lambaderrele.omkayazilim.com/setStatus",{pin:rele.Pin, stat:false},this,x=>{
      this.releList2=x
      let k:number=0;
      this.releList2.forEach(y=>{y.Title="Rele " +k++})
      console.log(this.releList2);
       });
      
     
    }
         else{}
  }
}
