import { Component, OnInit } from '@angular/core';
import { SeyHelloWorld } from './sey-hello-world';

@Component({
  selector: 'app-sey-hello-world',
  templateUrl: './sey-hello-world.component.html' , 
})
export class SeyHelloWorldComponent implements OnInit {

  HelloWorld : string;
  constructor() { }

  ngOnInit(): void {
    let theHelloWorld = new SeyHelloWorld("Hello","world");
    this.HelloWorld = theHelloWorld.GetHelloWotld();
  }



}
