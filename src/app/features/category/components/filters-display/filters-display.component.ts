import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-filters-display",
  templateUrl: "./filters-display.component.html",
  styleUrls: ["./filters-display.component.css"],
})
export class FiltersDisplayComponent implements OnInit {
  @Input() profileData: any = [];
  @Input() categoryData: any;
  @Input() speciality: any = null;
  @Input() subSpeciality: any = null;
  @Input() commune: any = null;
  @Input() insurance: any = null;

  @Output() removeSpeciality = new EventEmitter<any>();
  @Output() removeSubSpeciality = new EventEmitter<any>();
  @Output() removeCommune = new EventEmitter<any>();
  @Output() removeInsurance = new EventEmitter<any>();

  deleteIcon = faTrashCan;

  constructor() {}

  ngOnInit() {}

  eventRemoveSpeciality() {
    this.removeSpeciality.emit(this.speciality);
    this.speciality = null;
  }

  eventRemoveSubSpeciality() {
    this.removeSubSpeciality.emit(this.subSpeciality);
    this.subSpeciality = null;
  }

  eventRemoveCommune() {
    this.removeCommune.emit(this.commune);
    this.commune = null;
  }

  eventRemoveInsurance() {
    this.removeInsurance.emit(this.insurance);
    this.insurance = null;
  }
}
