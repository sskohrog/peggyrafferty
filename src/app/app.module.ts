import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { DatabaseService } from './database.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { WorkComponent } from './work/work.component';
import { UploadProjComponent } from './edit-landing/upload-proj/upload-proj.component';
import { EditLandingComponent } from './edit-landing/edit-landing.component';
import { PeggyOnlyGuardService } from 'app/peggy-only-guard.service';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'work/:project', component: WorkComponent },
  { path: 'experience', component: ExperienceComponent },  
  { path: 'edit', component: EditLandingComponent, canActivate: [PeggyOnlyGuardService] },  
  { path: 'edit/:project', component: UploadProjComponent, canActivate: [PeggyOnlyGuardService] },
  { path: '**', redirectTo: 'landing' }
];

export const fbconfig = {
  apiKey: "AIzaSyBdvudAJreYIPkPDI_fNsOtTYLiozQcN28",
  authDomain: "meaganrafferty-6ff91.firebaseapp.com",
  databaseURL: "https://meaganrafferty-6ff91.firebaseio.com",
  projectId: "meaganrafferty-6ff91",
  storageBucket: "meaganrafferty-6ff91.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WorkComponent,
    UploadProjComponent,
    EditLandingComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(fbconfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // debug
    )
  ],
  providers: [
    DatabaseService,
    PeggyOnlyGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
