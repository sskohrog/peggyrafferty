import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Email } from '../peggy.model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  pegmail = '../../assets/email.svg';

  newMail: Email;

  constructor(public db: DatabaseService) {
    this.db.showBack = false;
    this.db.showPeggy = false;

    this.newMail = new Email();
  }

  ngOnInit() {
  }

  sendMail(email: Email) {

    //raffertym52@gmail.com
    email.date = new Date();
    email.html = `
      <div>From: ${email.name}</div>
      <div>Email: <a href="mailto:${email.email}">${email.email}</a></div>
      <div>Date: ${email.date}</div>
      <div>Message: ${email.msg}</div>
    `;

    console.log(email);
    

    this.db.saveEmail(email);
  }
}
