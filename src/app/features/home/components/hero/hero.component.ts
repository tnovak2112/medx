import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { ConstantService } from "src/app/core/service/constants/constants.service";
import { ProfileService } from "src/app/core/service/profile/profile.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent implements OnInit {
  arrowDown = faCaretDown;

  search: any = "";
  timeout: any = null;
  show: any = false;
  searchProfiles: any = [];

  constructor(
    private readonly profileService: ProfileService,
    private readonly constantService: ConstantService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  open() {
    this.show = true;
  }
  hide() {
    this.show = false;
  }
  clear() {
    this.search = "";
  }

  fetchResults(symbol: any, count: any) {
    if (!symbol) this.hide();
    this.profileService.getALlProfiles(symbol).subscribe((response: any) => {
      this.searchProfiles = response.data;
    });
  }

  searchFunc(val: any) {
    this.search = val;
    if (val != "") {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.show = true;

        this.fetchResults(this.search, 10);
      }, 500);
    } else {
      this.clear();
      this.hide();
    }
  }

  showProfileFunction(userId: any) {
    this.constantService.userId = userId;
    this.router.navigate(["/profile"]);
  }
}
