import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CategoryRoutingModule } from "./category.routing";
import { CategoryComponent } from "./views/category.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { FiltersDisplayComponent } from "./components/filters-display/filters-display.component";
import { ProfileCardsComponent } from "./components/filters-display/profile-cards/profile-cards.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CategoryComponent,
    FiltersComponent,
    FiltersDisplayComponent,
    ProfileCardsComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
})
export class CategoryModule {}
