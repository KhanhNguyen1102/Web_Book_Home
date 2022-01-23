import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/category";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Home} from "../../../model/home";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories :Category[]=[]
  homes:Home[]=[]
  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get('id')
      console.log(id)
      this.categoryService.findOne(id).subscribe(result =>{
        this.homes=result
        console.log(this.homes)
      })
    })
  }
  // @ts-ignore
  findOneHome(id){
    this.router.navigate(['homes/findOne/'+id])
  }


}
