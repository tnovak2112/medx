import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Categories } from "src/app/core/enums/categories.enum";
import { DegreeService } from "src/app/core/service/degree/degree.service";
import { ProfileService } from "src/app/core/service/profile/profile.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  category: string = "";
  degree_id: number = 0;
  categoryData: any;
  profileData: any;

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly profileService: ProfileService,
    private readonly degreeService: DegreeService
  ) {}

  ngOnInit() {
    this.category = this.activeRoute.snapshot.paramMap.get("category")!;

    if (this.category === "medicina") {
      this.degree_id = Categories.Medicina;
    } else if (this.category === "psicologia") {
      this.degree_id = Categories.Psicologia;
    } else if (this.category === "odontologia") {
      this.degree_id = Categories.Odontologia;
    } else if (this.category === "kinesiologia") {
      this.degree_id = Categories.Kinesiologia;
    } else if (this.category === "fonoaudiologia") {
      this.degree_id = Categories.Fonoaudiologia;
    } else {
      this.degree_id = Categories.Nutricion;
    }

    this.degreeService.getDegrees().subscribe((response: any) => {
      if (response.row_length > 0) {
        response.data.forEach((degree: any) => {
          if (degree.id === this.degree_id) {
            this.categoryData = degree;
          }
        });

        this.profileService
          .getProfilesPerCategoryId(this.categoryData.category_id)
          .subscribe((response: any) => {
            if (response.row_length > 0) {
              this.profileData = response.data;
            }
          });
      }
    });
  }
}
