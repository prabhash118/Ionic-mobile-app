import { Component } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  maintext :any =  "Youtube"
  // image :any = "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixlib=rb-1.2.1&w=1000&q=80"
  loadImageLink :any = ""
  inputval :any =""
  inputLink :any

  constructor(private router:Router) {}

    loadImage(){
      this.loadImageLink = this.inputLink
    }

    onClick(){

      this.router.navigate(['video/']);

    }
   }

