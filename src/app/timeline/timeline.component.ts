import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  posts = [
    new Post(1, "Jorqueline", "Mais um longo dia de faculdade, só quero me deitar e tomar sorvete, assistindo uma boa série! Que vida! Mais um longo dia de faculdade, só quero me deitar e tomar sorvete, assistindo uma boa série! Que vida! ", 0),
    new Post(2, "Jarquelene", "Cansada de viver, meu fim chegará em breve", 0),
    new Post(3, "Jurliane", "Preocupada com minha amiga Jarquelene! Alguém tem o endereço dela?! :(", 0)
  ];

  confirmPostLove(post) {
    console.log ("Amei:", post.postAuthor);
  }

}
