import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SchoolExperienceComponent } from './school-experience/school-experience.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { InterestsComponent } from './interests/interests.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LoadingComponent } from './loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SchoolExperienceComponent,
    WorkExperienceComponent,
    InterestsComponent,
    SocialMediaComponent,
    TopNavBarComponent,
    ContactComponent,
    WrapperComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
