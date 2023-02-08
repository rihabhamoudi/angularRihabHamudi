import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';

const routes: Routes = [{path : 'article/categorie', component:ArticlesComponentComponent},{path : '', component:HomeComponent},{path : 'home', component:HomeComponent},
  {path : 'article', component:ArticlesComponentComponent},{path : 'emploi', component:OffresEmploiComponentComponent},
{path : '**', component:NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
