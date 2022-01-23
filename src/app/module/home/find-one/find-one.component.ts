import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../../service/home.service";
import {ImageService} from "../../../service/image.service";
import {CommentService} from "../../../service/comment.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Home} from "../../../model/home";
import {Image} from "../../../model/image";
import {Comment} from "../../../model/comment";

@Component({
  selector: 'app-find-one',
  templateUrl: './find-one.component.html',
  styleUrls: ['./find-one.component.css']
})
export class FindOneComponent implements OnInit {
  home: Home = {}
  image: Image[] = []
  comment:Comment[]=[]
  homes:Home[]=[]

  constructor(private homeService: HomeService,
              private imageService: ImageService,
              private commentService: CommentService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get('id')
      console.log(id)
      this.homeService.findOne(id).subscribe(result => {
        this.home = result
        console.log(this.home)
        console.log(result.id)
        this.imageService.findAllImgByHome(result.id).subscribe(result1 => {
          this.image=result1
          console.log(this.image)
        })
        this.commentService.findAllByHome(result.id).subscribe(result2 =>{
          // @ts-ignore
          this.comment=result2
          console.log(this.comment)
        })
      })
      this.homeService.show5Home().subscribe( result3=>{
        this.homes=result3
        console.log(this.homes)
      })
    })
  }

}
