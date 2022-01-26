import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories :Category[]=[]
  constructor(private categoryService: CategoryService,private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(result => {
      this.categories = result
      console.log(this.categories)
    }, error => {
      console.log(error)
    })

  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
