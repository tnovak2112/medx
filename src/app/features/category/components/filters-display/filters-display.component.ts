import { Component, Input, OnInit } from "@angular/core";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-filters-display",
  templateUrl: "./filters-display.component.html",
  styleUrls: ["./filters-display.component.css"],
})
export class FiltersDisplayComponent implements OnInit {
  @Input() profileData: any = [];
  @Input() categoryData: any;

  deleteIcon = faTrashCan


  constructor() {}

  ngOnInit() {}
}
