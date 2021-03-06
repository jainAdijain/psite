import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DownloadComponent } from './download/download.component';
import { ExperienceComponent } from './experience/experience.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'downloads', component: DownloadComponent },
    { path: 'experience', component: ExperienceComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }