import { Component, OnInit } from '@angular/core';
import { GistService } from '../../gist.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DialogBodyComponent } from '../../extras/dialog-body/dialog-body.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	
	username = undefined;
	avatar_url = '';

  constructor(private GistService: GistService, private dialog: MatDialog) { }

  ngOnInit() {

  }

  handleLogin() {
  	// this.GistService.login().subscribe(data => {
   //    //this.router.navigateByUrl('/profile');
   //    console.warn(data.msg);
   //    this.loggedIn = true;
   //    //window.open('http://localhost:8000/login', "popup", "width=1000,height=700,left=300,top=200");
   //    //window.location.href = data.redirectTo;      
   //    //this.getUserEmail();
   //  }, (err) => {
   //    console.error(err);
   //  });
   //this.openDialog();
    console.log('user logged in? ' + this.isLoggedIn);
    console.log('user email ' + this.userEmail);
    window.open('http://localhost:8000/login', 'Kanban Gists', 'toolbar=no,scrollbars=no,resizable=no,top=100,left=500,width=600,height=580');
    this.confirmLogin();
    //getUserEmail();

  }


  getUserEmail() {
  	this.GistService.UserProfile().subscribe(data => {
  		this.userEmail = data;
  		console.log('data: ' + data);
  		console.log('userEmail: ' + this.userEmail);
  	});
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(DialogBodyComponent, {
    	panelClass: 'app-full-bleed-dialog',
    });
  }

  checkIfWinClosed(intervalID) {
  	this.GistService.UserProfile().subscribe(data => {
  		//console.log(data);

  		this.username = data['login'];
  		this.avatar_url = data['avatar_url'];
  		
  		if (this.username) {
  			this.isLoggedIn = true;
  			//this.username = data['login'];
  			clearInterval(intervalID);

  		}
  		//console.log('username is:' + this.username);
  		//console.log('status: ' + this.isLoggedIn);
  	});
  	// if(window.closed){
  	// 	console.warn('windowsClosed');
  	// 	clearInterval(intervalID);
  	// 	console.log('logged in: ' + this.isLoggedIn);
  	// }
   }

   confirmLogin() {
	   	var interval = setInterval( () => {
	    this.checkIfWinClosed(interval);
	   },1000);
   }

   

}