import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
  standalone: true,
  imports:[IonicModule, HeaderComponent, FooterComponent, RouterModule]
})
export class MainpageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
