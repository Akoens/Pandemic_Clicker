import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  page:number;
  authService: AuthService;

  constructor( authService: AuthService) {
    this.authService = authService;
   }

  ngOnInit(): void {
  }

  get users(){
    return 
  }

}
