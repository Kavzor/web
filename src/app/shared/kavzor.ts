export interface Entry {
  description: string;
  name: string;
  reference: string;
  image: EntryImage;
}

export interface EntryImage {
  icon: string;
  state: EntryState;
}

export interface EntryState {
  mit: boolean;
  openSource: boolean;
  inProgress: boolean;
}

/*entries = [
  {
    info : {
      name: 'Kavzor Web',
      description: 'Kavzor web is my first launched project that is being published and is actually this blog itself. \
      I started this blog or whatever you wanna call it after being inspired by other programmers \
      portfolios. It\'s a great way of sharing knowledge and it keeps me busy learning new neat tricks \
      when creating this website'
    },
    publish: {
      url: 'https://github.com/Kavzor/web',
    },
    image: {
      icon: '',
      status: {
        MIT: false,
        open: true,
        progress: true
      }
    }
  },
  {
    info : {
      name: 'Teachers Web',
      description: 'This project is being launched to help shy students who are too afraid to speak out loud \
      in a full classroom. It also happens to be the first real-time project that I plan to publish, so let\s see \
      how this goes'
    },
    publish: {
      url: ''
    },
    image: {
      icon: 'assets/images/logo/projects/TeachersWeb.svg',
      status: {
        MIT: false,
        open: false,
        progress: true
      }
    }
  }
]
*/