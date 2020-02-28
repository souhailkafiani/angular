import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../Services/token.service';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '../Services/admin.service';
import {NgsRevealConfig} from 'ngx-scrollreveal';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  public loggedIn:boolean = false;
  public admin:boolean = false;
  public super_admin:boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private authService:AuthService,
    private router:Router,
    private handleToken:TokenService,
    private http:HttpClient,
    private cookie:CookieService,
    private Admin:AdminService,
    config: NgsRevealConfig

    ) {
      config.duration = 500;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    }
  public categories:Array<Object>

  ngOnInit() {
this.authService.auth_Status.subscribe((data:boolean)=>{
  this.loggedIn=data
 if(this.loggedIn) {
  let email = atob(localStorage.getItem('DB'))

  this.Admin.isAdmin(email).subscribe(
    (data:{data})=>{
      if(data.data[0].isAdmin){
      this.admin=true
      }
      else {if(data.data[0].super_admin) this.super_admin=true }   }
    ,
    error=>console.log(error)
  )
 }
}
)
   if( this.handleToken.verfier_token()) {this.handleData()}
   this.Admin.get_categorie().subscribe(
     (data:Array<Object>)=>this.categories=data

   );

  }
  logout(){
    this.handleToken.remove_Token();
    this.authService.change_auth_Staust(false)
    this.router.navigate([""])
    this.super_admin=false;
    this.admin=false;
  }
  handleData(){
    
    this.authService.change_auth_Staust(true)
    let email = atob(localStorage.getItem('DB'))
    this.Admin.isAdmin(email).subscribe(
      data=>console.log('connected')
      ,
      error=>console.log(error)
    )
  
    }
    show_hide_a(){
      document.querySelectorAll('.content a').forEach(e=>{
      console.log(e.classList.toggle('hide'));
      
      document.querySelectorAll('.name_categorie i').forEach(e=>{
        e.classList.toggle('hide')
      })

      })
      
    }
}
