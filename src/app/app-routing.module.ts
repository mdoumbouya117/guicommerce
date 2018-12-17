import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnfantComponent } from './home/enfant/enfant.component';
import { FemmeComponent } from './home/femme/femme.component';
import { HommeComponent } from './home/homme/homme.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'enfant', component: EnfantComponent },
  { path: 'enfant/:categorie', component: ArticlesComponent},
  { path: 'enfant/:categorie/:reference', component: ArticleDetailComponent},

  { path: 'femme', component: FemmeComponent },
  { path: 'femme/:categorie', component: ArticlesComponent},
  { path: 'femme/:categorie/:reference', component: ArticleDetailComponent},

  { path: 'homme', component: HommeComponent},
  { path: 'homme/:categorie', component: ArticlesComponent},
  { path: 'homme/:categorie/:reference', component: ArticleDetailComponent},
  //{ path: ':client/:categorie/:reference', component: ArticleDetailComponent} // client -> enfant, femme ou homme

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
