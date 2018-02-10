import { Component, OnInit } from '@angular/core';
import { Entry } from '../shared/kavzor';
import { EntryRemoteService } from '../shared/entry-remote.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  latest: Entry = {
    name: 'MongoJ Simplifier',
    reference: 'https://github.com/Kavzor/MongoJRepo',
    description: 'MongoJ Simplifier is meant to ease the development of mongo-backends by providing a fully configuered \
    generic mongo database repository ready for use simply by adding necessary dependencies and implementing the built-in interface at \
    whatever entity you wish to store. MonoJ uses MIT lisence so feel free to use it any way \
    you like',
    image:{
      icon: 'assets/images/logo/projects/MongoJ.svg',
      state: {
        mit: true,
        inProgress: true,
        openSource: true
      }
    } 
  };
/*
  entries: Entry[] = [
    {
      name: 'Kavzor Web',
      description: 'Kavzor web is my first launched project that is being published and is actually this blog itself. \
      I started this blog or whatever you wanna call it after being inspired by other programmers \
      portfolios. It\'s a great way of sharing knowledge and it keeps me busy learning new neat tricks \
      when creating this website',
      reference: 'https://github.com/Kavzor/web',
      image: {
        icon: '',
        state: {
          mit: false,
          openSource: true,
          inProgress: true
        }
      }
    },    
    {
      name: 'Teachers Web',
      description: 'This project is being launched to help shy students who are too afraid to speak out loud \
      in a full classroom. It also happens to be the first real-time project that I plan to publish, so let\s see \
      how this goes',
      reference: '',
      image: {
        icon: 'assets/images/logo/projects/TeachersWeb.svg',
        state: {
          mit: false,
          openSource: false,
          inProgress: true
        }
      }
    }
  ]*/
  entries: any;

  constructor(private entryService: EntryRemoteService) { }

  ngOnInit() {
    this.entryService.entries.subscribe((data) => {
      this.entries = data;
    });
  }
}
