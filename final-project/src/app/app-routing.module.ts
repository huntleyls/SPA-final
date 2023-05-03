import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InterestsComponent } from './interests/interests.component';
import { SchoolExperienceComponent } from './school-experience/school-experience.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'school-experience', component: SchoolExperienceComponent },
  { path: 'social-media', component: SocialMediaComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'contact-me', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
