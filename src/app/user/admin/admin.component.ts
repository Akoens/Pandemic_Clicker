import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { MatDialog } from '@angular/material/dialog'
import { DeleteWarningComponent } from 'src/app/layout/dialog/delete-warning/delete-warning.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  page:number = 1;
  authService: AuthService;
  users: any;
  deleteWarning:MatDialog

  constructor(dialog: MatDialog, authService: AuthService) {
    this.authService = authService;
    this.deleteWarning = dialog;
   }

  ngOnInit(): void {
    this.authService.getUsers(this.page).subscribe(
      res => {
        this.users = res;
      }
    )
  }

  openWarning(user:any){
    let waringResult = this.deleteWarning.open(DeleteWarningComponent);

    waringResult.afterClosed().subscribe(
      res => {
        if(res){
          let formData: FormData = new FormData(); 
          formData.append('userid', user.id); 
          this.authService.deleteUser(formData);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
