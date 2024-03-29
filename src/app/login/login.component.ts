import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../DataService';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private app: DataService, private router: Router,public dialog: MatDialog) {
    
   }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      height: '400px',
      width: '600px',
      disableClose: true
    });

  }

  credentials = {username: '', password: ''};
  error="";



  ngOnInit(): void {
    this.openDialog('3000ms', '1500ms');

  }

  authenticated(){
  }

  login() {
    console.log("LISTO LISTO SE EJEcuta lingn");
    console.log(this.credentials);
    this.app.authenticate(this.credentials, () => {
      console.log("ANTES DE NAvigate");
      this.router.navigateByUrl('/vista-factura');
    });
    return false;
  }

  closeDialog(){
    this.dialog.closeAll();
  }

}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {
  credentials:any;
  

  error="";
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {
  }

  closeDialog(){
    this.dialogRef.close();
    this.credentials = {username: 'andrew',nombre: 'ANDRES',apellido: Math.random() * 1000, password: ''};
     localStorage.setItem("usuario",JSON.stringify(this.credentials));
  }
}
