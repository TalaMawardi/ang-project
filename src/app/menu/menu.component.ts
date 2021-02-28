import { Dish } from '../Shared/Dish';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes : Dish[] = [{name :'cookies' , Description :'it has chocolate ships' , img:'/src/assets/images/download.jpg'} ,
  {name : 'pizza' ,Description: 'with extra cheese' , img : '/src/assets/images/dd.jpg'}]


  constructor() {  }

  ngOnInit(): void {
  }

}
