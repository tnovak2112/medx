import { Component, Input, OnInit } from "@angular/core";
import { CommuneService } from "src/app/core/service/commune/commune.service";
import { InsuranceService } from "src/app/core/service/insurance/insurance.service";
import { DegreeService } from "src/app/core/service/degree/degree.service";
import { SpecialityService } from "src/app/core/service/speciality/speciality.service";
import { SubSpecialityService } from "src/app/core/service/sub-speciality/sub-speciality.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.css"],
})
export class FiltersComponent implements OnInit {
  public communesData: any;
  public insuranceData: any;
  public specialityData: any;
  public subSpecialityExist: any;
  public subSpecialityData: any;
  @Input() degreeId: any;

  constructor(
    private readonly communeServce: CommuneService,
    private readonly insuranceService: InsuranceService,
    private readonly degreeService: DegreeService,
    private readonly specialityService: SpecialityService,
    private readonly subSpecialityService: SubSpecialityService
  ) {}

  ngOnInit() {
    this.communeServce.getCommunes().subscribe((response: any) => {
      if (response.row_length > 0) {
        this.communesData = response.data;
      }
    });

    this.insuranceService.getInsurance().subscribe((response: any) => {
      if (response.row_length > 0) {
        this.insuranceData = response.data;
      }
    });

    this.degreeService.getDegrees().subscribe((response: any) => {
      if (response.row_length > 0) {
        response.data.forEach((degree: any) => {
          if (response.row_length > 0) {
            if (degree.id === this.degreeId) {
              this.specialityService
                .getSpecialityPerDegreeId(degree.id)
                .subscribe((response: any) => {
                  this.specialityData = response.data;
                });
            }
          }
        });
      }
    });
  }

  getSubSpeciality(speciality_id: number) {
    this.subSpecialityService
      .getSubSpecialityPerSpecialityId(speciality_id)
      .subscribe((response: any) => {
        if (response.row_length > 0) {
          this.subSpecialityExist = true;
          this.subSpecialityData = response.data;
        } else {
          this.subSpecialityExist = false;
        }
      });
  }
}
