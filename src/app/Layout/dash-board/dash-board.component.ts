import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [],
  providers:[Router],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent {
  
constructor(private router:Router) {
}

route(op:string){
  this.router.navigateByUrl(op);
}

}
