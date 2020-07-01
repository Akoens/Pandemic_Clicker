import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { MatDialog } from '@angular/material/dialog'
import { DeleteWarningComponent } from 'src/app/layout/dialog/delete-warning/delete-warning.component';
import { HttpParams } from '@angular/common/http';
import { MakeAdminWarningComponent } from 'src/app/layout/dialog/make-admin-warning/make-admin-warning.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  page:number = 1;
  pageSize:number = 5;
  pageSizes:number[] = [1,5,10,25]
  totalUsers:number = 0;
  totalPageCount:number = 0;

  authService: AuthService;
  users: any;

  dialog:MatDialog;


  constructor(dialog: MatDialog, authService: AuthService) {
    this.authService = authService;
    this.dialog = dialog;
   }

  ngOnInit(): void {
    this.authService.getTotalUsers().subscribe(
      res => {
        this.totalUsers = res.count;
        this.totalPageCount = Math.ceil(this.totalUsers/this.pageSize);
      }
    )
    this.updatePage()
  }

  pageTo(pageNumber:number):void{
    if(pageNumber < 1 || pageNumber > this.totalPageCount){
      return;
    }
    this.page = pageNumber;
    this.updatePage();
  }

  changePage(direction:number):void{
    let value = this.page + direction;
    if(value < 1 || value > this.totalPageCount){
      return;
    }
    
    this.page += direction;
    console.log(this.page, this.totalPageCount);
    this.updatePage();
  }

  updatePage():void{
    this.totalPageCount = Math.ceil(this.totalUsers/this.pageSize);
    let params = new HttpParams().set('page', this.page.toString()).set('size', this.pageSize.toString())
    this.authService.getUsers(params).subscribe(
      res => {
        this.users = res;
      }
    )
  }

  openDeleteWarning(user:any){
    let waringResult = this.dialog.open(DeleteWarningComponent);

    waringResult.afterClosed().subscribe(
      res => {
        if(res == "true"){
          this.authService.deleteUser(user.id);
        }
      },
      err => {
        console.log(err);
      }
    );
    this.updatePage()
  }

  openMakeAdminWarning(user:any){
    let waringResult = this.dialog.open(MakeAdminWarningComponent);

    waringResult.afterClosed().subscribe(
      res => {
        if(res == "true"){
          let formData:FormData = new FormData()
          formData.append('userid', user.id);
          this.authService.makeAdmin(formData);
        }
      },
      err => {
        console.log(err);
      }
    );
    this.updatePage()
  }

}
