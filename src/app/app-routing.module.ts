import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResponseResetPasswordComponent } from './response-reset-password/response-reset-password.component';
import { PhoneVerficationComponent } from './phone-verfication/phone-verfication.component';
import { ProfileComponent } from './profile/profile.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AdminsComponent } from './admins/admins.component';


const routes: Routes = [
  {path:'' , component:HeaderComponent},
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"resetPassword" , component:ResetPasswordComponent},
  {path:'response-reset-password', component:ResponseResetPasswordComponent},
  { path:'phone_verfication',component:PhoneVerficationComponent},
  {path:'profile',component:ProfileComponent},
  {path:'addAdmin',component:AddAdminComponent},
  {path:'addCategorie',component:AddCategoryComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'Products',component:ProductsComponent},
  {path:'Categories',component:CategoriesComponent},
  {path:'Admins',component:AdminsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
