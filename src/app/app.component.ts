import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  peggyCount: number = 0;

  constructor(public db: DatabaseService, private router: Router) {}

  goToAdminTools() {
    if (this.peggyCount == 6) {
      this.peggyCount = 0;
      this.db.showPeggy = true;

      this.router.navigate(['/edit']);
    } else {
      this.peggyCount++;
    }
  }
}
