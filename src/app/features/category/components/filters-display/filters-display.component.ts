import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-filters-display",
  templateUrl: "./filters-display.component.html",
  styleUrls: ["./filters-display.component.css"],
})
export class FiltersDisplayComponent implements OnInit {
  @Input() profileData: any;
  @Input() categoryData: any;

  constructor() {}

  ngOnInit() {}
}
