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

  specialityId: any = 0;
  subSpecialityId: any = 0;
  communeId: any = 0;
  insuranceId: any = 0;

  speciality: any = null;
  subSpeciality: any = null;
  commune: any = null;
  insurance: any = null;

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

    this.getProfiles();
  }

  getProfiles(
    specialityId: number = 0,
    subSpecialityId: number = 0,
    communeId: number = 0,
    insuranceId: number = 0
  ) {
    this.profileData = [];
    this.degreeService.getDegrees().subscribe((response: any) => {
      if (response.row_length > 0) {
        response.data.forEach((degree: any) => {
          if (degree.id === this.degree_id) {
            this.categoryData = degree;
          }
        });

        this.profileService
          .getProfilesPerCategoryId(
            this.categoryData.category_id,
            specialityId,
            subSpecialityId,
            communeId,
            insuranceId
          )
          .subscribe((response: any) => {
            if (response.row_length > 0) {
              this.profileData = response.data;
            }
          });
      }
    });
  }

  changeSpecialityEvent(speciality: any) {
    this.specialityId = speciality.id;
    this.speciality = speciality;
    this.getProfiles(
      this.specialityId,
      this.subSpecialityId,
      this.communeId,
      this.insuranceId
    );
  }

  changeSubSpecialityEvent(subSpeciality: any) {
    this.subSpecialityId = subSpeciality.id;
    this.subSpeciality = subSpeciality;
    this.getProfiles(
      this.specialityId,
      this.subSpecialityId,
      this.communeId,
      this.insuranceId
    );
  }

  changeCommuneEvent(commune: any) {
    this.communeId = commune.id;
    this.commune = commune;
    this.getProfiles(
      this.specialityId,
      this.subSpecialityId,
      this.communeId,
      this.insuranceId
    );
  }

  changeInsuranceEvent(insurance: any) {
    this.insuranceId = insurance.id;
    this.insurance = insurance;
    this.getProfiles(
      this.specialityId,
      this.subSpecialityId,
      this.communeId,
      this.insuranceId
    );
  }

  removeSpecialityEvent(speciality: any) {
    this.getProfiles(0, 0, this.communeId, this.insuranceId);
    this.speciality = null;
    this.subSpeciality = null;
  }

  removeSubSpecialityEvent(subSpeciality: any) {
    this.getProfiles(this.specialityId, 0, this.communeId, this.insuranceId);
    this.subSpeciality = null;
  }

  removeCommuneEvent(commune: any) {
    this.getProfiles(
      this.specialityId,
      this.subSpecialityId,
      0,
      this.insuranceId
    );
    this.commune = null;
  }

  removeInsuranceEvent(insurance: any) {
    this.getProfiles(
      this.specialityId,
      this.subSpecialityId,
      this.communeId,
      0
    );
    this.insurance = null;
  }
}
