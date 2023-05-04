import { Component, OnInit } from "@angular/core";
import {
  faBone,
  faCarrot,
  faEarListen,
  faHeadSideVirus,
  faTooth,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { CategoryService } from "src/app/core/service/category/category.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit {
  public categories: any = [];

  faHeadSideVirus = faHeadSideVirus;
  faTooth = faTooth;
  faBone = faBone;
  faCarrot = faCarrot;
  faEarListen = faEarListen;
  faUserDoctor = faUserDoctor;

  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.listarCategorias().subscribe((response: any) => {
      if (response.row_lengtth !== 0) {
        this.categories = response.data;
      }
    });
  }
}
