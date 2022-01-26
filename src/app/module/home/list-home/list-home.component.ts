import {Component, OnInit} from '@angular/core';
import {Home} from "../../../model/home";
import {Image} from "../../../model/image";
import {HomeService} from "../../../service/home.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {
  homes?: Home[] = [];
  images?: Image[] = [];

  constructor(private homeService: HomeService,
              private router: Router

  ) {
  }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll() {
    this.homeService.showListHomeAll().subscribe(data => {
      this.homes = data

      // @ts-ignore
      for (let i = 0; i < this.homes.length; i++) {
        // @ts-ignore
        this.homeService.getListImg(this.homes[i].id).subscribe(result => {
          console.log(result)
          this.images?.push(result[0])
          console.log(this.images)
        })
      }
    })
  }

  // @ts-ignore
  findOneHome(id) {
    this.router.navigate(['homes/findOne/' + id])
  }
}
