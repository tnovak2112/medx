import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "./core/guard/login.guard";
import { AuthGuard } from "./core/guard/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./features/home/home.module").then((m) => m.HomeModule),
    pathMatch: "full",
  },
  {
    path: "category/:category",
    loadChildren: () =>
      import("./features/category/category.module").then(
        (m) => m.CategoryModule
      ),
    canActivate: [],
    pathMatch: "full",
  },
  {
    path: "about",
    loadChildren: () =>
      import("./features/about/about.module").then((m) => m.AboutModule),
    canActivate: [],
    pathMatch: "full",
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./features/contact/contact.module").then((m) => m.ContactModule),
    canActivate: [],
    pathMatch: "full",
  },
  {
    path: "register",
    loadChildren: () =>
      import("./features/register/register.module").then(
        (m) => m.RegisterModule
      ),
    canActivate: [LoginGuard],
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./features/login/login.module").then((m) => m.LoginModule),
    canActivate: [LoginGuard],
    pathMatch: "full",
  },
  {
    path: "profile/:id/:name",
    loadChildren: () =>
      import("./features/profile/profile.module").then((m) => m.ProfileModule),
    // canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "restore-password",
    loadChildren: () =>
      import("./features/restore-password/restore-password.module").then(
        (m) => m.RestorePasswordModule
      ),
    canActivate: [],
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
