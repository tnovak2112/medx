import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ConstantService } from "src/app/core/service/constants/constants.service";

@Component({
  selector: "app-profile-cards",
  templateUrl: "./profile-cards.component.html",
  styleUrls: ["./profile-cards.component.css"],
})
export class ProfileCardsComponent implements OnInit {
  @Input() profile: any;
  @Input() categoryData: any;

  plus = faPlus;

  constructor(
    private readonly constantService: ConstantService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  sendToProfileFunction(id: number) {
    this.constantService.userId = id;
    this.router.navigate(["/profile"]);
  }
}
