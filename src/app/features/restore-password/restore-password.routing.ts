import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RestorePasswordComponent } from "./views/restore-password.component";

const routes: Routes = [{ path: "", component: RestorePasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestorePasswordRoutingModule {}
