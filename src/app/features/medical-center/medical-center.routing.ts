import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MedicalCenterComponent } from "./views/medical-center.component";

const routes: Routes = [{ path: "", component: MedicalCenterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalCenterRoutingModule {}
