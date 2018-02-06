import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList, AngularFireObject } from 'angularfire2/database/interfaces';

import { Project, WorkType } from './peggy.model';

@Injectable()
export class DatabaseService {

  showBack: boolean = false;
  showPeggy: boolean = false;

  projImgs$: AngularFireList<any>;
  project$: AngularFireObject<Project>;
  workType$: AngularFireList<WorkType>; 

  constructor(public db: AngularFireDatabase) { }

  getProjectImgs(proj) {
    this.projImgs$ = this.db.list<Project>('projectImgs/' + proj);
    return this.db.list('projectImgs/' + proj);
  }

  getProject(proj) {
    this.project$ = this.db.object<Project>('projects/' + proj);
    return this.project$;
  }

  getWorkType(proj) {
    this.workType$ = this.db.list<WorkType>('workTypes/' + proj);
    return this.workType$;
  }

}
