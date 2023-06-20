import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
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

  showProfileFunction(profile: any) {
    this.router.navigate([
      `/profile/${profile.user_uuid}/${profile.first_name}${profile.last_name}`,
    ]);
  }
}
