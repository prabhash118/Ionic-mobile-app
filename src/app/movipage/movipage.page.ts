import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';  


export interface film {
  id : string;
  name :string;
  poster : string;
  video : string;
  slide1 : string;
  slide2: string;
  slide3:string;
  slide4:string;
  caption:string;
  overview:string;
}

@Component({
  selector: 'app-movipage',
  templateUrl: './movipage.page.html',
  styleUrls: ['./movipage.page.scss'],
})
export class MovipagePage implements OnInit {

films:film;

  vid : string;
  vname :string;
  vposter : string;
  vvideo : string;
  vslide1 : string;
  vslide2: string;
  vslide3:string;
  vslide4:string;
  vcaption:string;
  voverview:string;

  constructor(private router:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {

    let postid = this.router.snapshot.params['id'];
    let url = "/assets/data/podcast.json";

    this.http.get<film[]>(url)
    .subscribe(data=>{

      this.films = data[postid];

      this.vid = this.films.id
      this.vname = this.films.name
      this.vposter = this.films.poster
      this.vvideo = this.films.video
      // this.vslide1 = this.films.slide1
      // this.vslide2 = this.films.slide2
      // this.vslide3 = this.films.slide3
      // this.vslide4 = this.films.slide4
      this.vcaption = this.films.caption
      this.voverview = this.films.overview
    });
  }

}
