import { Injectable } from '@angular/core';

import { DatabaseService } from './database.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class PeggyOnlyGuardService implements CanActivate {

  constructor(private db: DatabaseService, private router: Router) { }

  canActivate() {
    if (this.db.showPeggy) {
      console.log('hi peg leg');
      return true;
    } else {
      console.log('NO ACCESS');
      this.router.navigate(['/landing']);
      return false;
    }
  }

}
