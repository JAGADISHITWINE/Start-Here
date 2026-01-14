import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[IonicModule, RouterLink]
})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
