import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, AngularFireObject } from 'angularfire2/database/interfaces';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

import { Project, WorkType } from './peggy.model';

@Injectable()
export class DatabaseService {

  showBack: boolean = false;
  showPeggy: boolean = false;
  hideEmail: boolean = false;  

  projImgs$: AngularFireList<any>;
  project$: AngularFireObject<Project>;
  workType$: AngularFireList<WorkType>; 

  constructor(public db: AngularFireDatabase, private storage: AngularFireStorage) { }

  getProjectImgs(proj) {
    return this.db.list('projectImgs/' + proj);
  }

  getProject(proj) {
    return this.db.object<Project>('projects/' + proj);
  }

  getWorkType(proj) {
    return this.db.list<WorkType>('workTypes/' + proj);
  }

  cloudImg(path, event) {
    this.storage.upload(path, event);
  }

  saveEmail(email) {
    this.db.list('emails').push(email).then(
      () => this.hideEmail = false,
      (err) => console.log(err)
    );
  }


}
