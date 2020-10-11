import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


export interface myblog{

  id: string;
  name: string;
  poster: string;    
  caption:string;
  overview:string;
}

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {


  blogs: myblog[] = [];
 
  

  slideOpts = {
    initialSlide: 1,
    autoplay:true,
    spaceBetween:0,
    slidesPerView:1.2,
    speed: 400
  };

  students = ['dinesh','saranga','pavith','eranga','kasun'];
  // sname
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {

    // this.sname = (this.students[1]);
    // console.log(this.sname);

    let url = "assets/data/podcast.json"

    this.http.get<myblog[]>(url)
    .subscribe(data=>{
      this.blogs =data;
      console.log(this.blogs);
    })

  }

  onClick(item){
 this.router.navigate(['movipage/'+ item.id])
  }
}