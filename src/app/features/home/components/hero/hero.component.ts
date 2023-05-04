import { Component } from "@angular/core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent {
  arrowDown = faCaretDown;
}
