import { Component, OnInit } from "@angular/core";
import {
  faLocationDot,
  faSquarePhone,
  faLink,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ActivatedRoute, Router } from "@angular/router";
import { MedicalCenterService } from "src/app/core/service/medical-center/medical-center.service";
import { ProfileService } from "src/app/core/service/profile/profile.service";
import * as moment from "moment";

@Component({
  selector: "app-medical-center",
  templateUrl: "./medical-center.component.html",
  styleUrls: ["./medical-center.component.css"],
})
export class MedicalCenterComponent implements OnInit {
  public medicalCenterUUID: any;

  locationIcon = faLocationDot;
  phoneIcon = faSquarePhone;
  whatsappIcon = faSquareWhatsapp;
  linkIcon = faLink;
  shareIcon = faShareNodes;

  public medicalCenterData: any;
  public medicalCenterPersons: any;

  constructor(
    private route: ActivatedRoute,
    private readonly medicalCenterService: MedicalCenterService,
    private readonly profileService: ProfileService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.medicalCenterUUID = params["uuid"];
      this.medicalCenterService
        .getMedicalCenter(this.medicalCenterUUID)
        .subscribe((response: any) => {
          if (response.row_length > 0) {
            this.medicalCenterData = response.data[0];
          }
        });

      this.profileService
        .getProfilesPerMedicalCenterId(this.medicalCenterUUID)
        .subscribe((response: any) => {
          if (response.row_length > 0) {
            this.medicalCenterPersons = response.data;
            console.log(this.medicalCenterPersons);
          }
        });
    });
  }

  sendWebUrl() {
    window.open(this.medicalCenterData.url, "_blank");
  }

  sendWhatappUrl() {
    const ulr = encodeURIComponent(`${location.href}`);
    window.open(
      `https://api.whatsapp.com/send/?text=${ulr}&type=custom_url&app_absent=0`,
      "_blank"
    );
  }

  sendToProfileFunction(profile: any) {
    this.router.navigate([
      `/profile/${profile.user_uuid}/${profile.first_name}${profile.last_name}`,
    ]);
  }

  calcularEdad(fechaNacimiento: string): number {
    const fechaActual = moment();
    const edad = fechaActual.diff(fechaNacimiento, "years");
    return edad;
  }
}
