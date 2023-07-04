import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCaretRight,
  faLocationDot,
  faPhone,
  faEnvelope,
  faUserGraduate,
  faShareNodes,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { CategoryService } from "src/app/core/service/category/category.service";
import { CommuneService } from "src/app/core/service/commune/commune.service";
import { ConsultService } from "src/app/core/service/consult/consult.service";
import { DegreeService } from "src/app/core/service/degree/degree.service";
import { InsuranceService } from "src/app/core/service/insurance/insurance.service";
import { MedicalCenterService } from "src/app/core/service/medical-center/medical-center.service";
import { ProfileService } from "src/app/core/service/profile/profile.service";
import { SpecialityService } from "src/app/core/service/speciality/speciality.service";
import { SubSpecialityService } from "src/app/core/service/sub-speciality/sub-speciality.service";

@Component({
  selector: "app-doc-profile",
  templateUrl: "./doc-profile.component.html",
  styleUrls: ["./doc-profile.component.css"],
})
export class DocProfileComponent implements OnInit {
  @Input() user_uuid: any;
  public profileData: any;
  public consultData: any;
  public listInsuranceData: any[] = [];
  public communeData: any;
  public degreeData: any;
  public specialitiesData: any;
  public subSpecialitiesData: any;
  public medicalCenterData: any;

  linkedin = faLinkedin;
  instagram = faInstagram;
  arrow = faCaretRight;
  location = faLocationDot;
  phone = faPhone;
  envelope = faEnvelope;
  whatsapp = faWhatsapp;
  graduate = faUserGraduate;
  share = faShareNodes;

  faArrowUpRight = faArrowUpRightFromSquare;

  constructor(
    private readonly profileService: ProfileService,
    private readonly insuranceService: InsuranceService,
    private readonly consultService: ConsultService,
    private readonly communeService: CommuneService,
    private readonly categoryService: CategoryService,
    private readonly degreeService: DegreeService,
    private readonly specialityService: SpecialityService,
    private readonly subSpecialityService: SubSpecialityService,
    private readonly medicalCenterService: MedicalCenterService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.insuranceService.getInsurance().subscribe((response: any) => {
      if (response.row_length > 0) {
        response.data.forEach((insurance: any) => {
          insurance.checked = false;
          this.listInsuranceData.push(insurance);
        });
      }
    });

    this.profileService
      .getProfile(this.user_uuid)
      .subscribe((response: any) => {
        if (response.row_length > 0) {
          this.profileData = response.data[0];
          this.consultService
            .getConsult(this.profileData.consult_id)
            .subscribe((response: any) => {
              if (response.row_length > 0) {
                this.consultData = response.data[0];
                this.insuranceService
                  .getInsurancePerIdConsult(this.consultData.id)
                  .subscribe((response: any) => {
                    if (response.row_length > 0) {
                      this.listInsuranceData.forEach((insurance) => {
                        response.data.forEach((insurance_relation: any) => {
                          if (
                            insurance_relation.insurance_id === insurance.id
                          ) {
                            insurance.checked = true;
                          }
                        });
                      });

                      this.listInsuranceData = this.listInsuranceData.filter(
                        (obj) => obj.checked === true
                      );
                    }
                  });
                this.communeService
                  .getCommunePerId(this.consultData.commune_id)
                  .subscribe((response: any) => {
                    if (response.row_length > 0) {
                      this.communeData = response.data[0];
                    }
                  });
              }
            });

          this.medicalCenterService
            .getMedicalCenter(this.profileData.medical_center_uuid)
            .subscribe((response: any) => {
              if (response.row_length > 0) {
                this.medicalCenterData = response.data[0];
              }
            });

          this.categoryService
            .getCategoryPerProfileId(this.profileData.id)
            .subscribe((response: any) => {
              if (response.row_length > 0) {
                this.degreeService
                  .getDegreePerCategoryId(response.data[0].category_id)
                  .subscribe((response: any) => {
                    this.degreeData = response.data[0];
                  });
              }
            });

          this.specialityService
            .getSpecialityPerProfileId(this.profileData.id)
            .subscribe((response: any) => {
              if (response.row_length > 0) {
                this.specialitiesData = response.data;
              }
            });

          this.subSpecialityService
            .getSubSpecialityPerProfileId(this.profileData.id)
            .subscribe((response: any) => {
              if (response.row_length > 0) {
                this.subSpecialitiesData = response.data;
              }
            });
        }
      });
  }

  redirectSocial(socialNetwork: string) {
    window.open(socialNetwork, "_blank");
  }

  sendWhatappUrl() {
    const ulr = encodeURIComponent(`${location.href}`);
    window.open(
      `https://api.whatsapp.com/send/?text=${ulr}&type=custom_url&app_absent=0`,
      "_blank"
    );
  }

  redirectToMedicalCenter(medicalCenterData: any) {
    this.router.navigate([
      `/medical-center/${medicalCenterData.uuid}/${medicalCenterData.name}`,
    ]);
  }
}
