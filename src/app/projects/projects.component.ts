import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  latest = {
    name: 'MongoJ Simplifier',
    more: 'https://github.com/Kavzor/MongoJRepo',
    icon: 'assets/images/logo/projects/MongoJ.svg',
    description: 'MongoJ Simplifier is meant to ease the development of mongo-backends by providing a fully configuered \
    generic mongo database repository ready for use simply by adding necessary dependencies and implementing the built-in interface at \
    whatever entity you wish to store.'
  };

  constructor() { }

  ngOnInit() {
  }
}
