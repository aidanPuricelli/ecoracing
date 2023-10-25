import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './competition/competition.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotogalleryComponent } from './photo-gallery/photo-gallery.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SubTeamsComponent } from './sub-teams/sub-teams.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { animationState: 'One' } },
  { path: 'sponsors', component: SponsorsComponent, data: { animationState: 'Two' } },
  { path: 'history', component: HistoryComponent, data: { animationState: 'Three' } },
  { path: 'competition', component: CompetitionComponent, data: { animationState: 'Four' } },
  { path: 'photo-gallery', component: PhotogalleryComponent, data: { animationState: 'Five' }},
  { path: 'sub-teams', component: SubTeamsComponent, data: { animationState: 'Six' },},
  {path:'photo-gallery/:car/:id',component:PhotoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
