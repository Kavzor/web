import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profile = {
    image: {
      url: 'assets/images/main/profile.jpg',
     width: 128
    }
  }

  profileImage: string; 

  constructor() { }

  ngOnInit() {
  }

}
