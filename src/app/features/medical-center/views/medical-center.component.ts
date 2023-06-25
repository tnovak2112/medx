import { Component, OnInit } from "@angular/core";
import { 
  faLocationDot, 
  faSquarePhone,
  faLink,
  faShareNodes 
} from "@fortawesome/free-solid-svg-icons";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-medical-center",
  templateUrl: "./medical-center.component.html",
  styleUrls: ["./medical-center.component.css"],
})
export class MedicalCenterComponent implements OnInit {
  
  locationIcon = faLocationDot;
  phoneIcon = faSquarePhone;
  whatsappIcon = faSquareWhatsapp;
  linkIcon = faLink;
  shareIcon = faShareNodes;

  constructor() {}

  ngOnInit() {}
}
