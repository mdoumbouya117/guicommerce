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
  { path: 'enfant/:categorieArticle', component: ArticlesComponent},

  { path: 'femme', component: FemmeComponent },
  { path: 'femme/:categorieArticle', component: ArticlesComponent},

  { path: 'homme', component: HommeComponent},
  { path: 'homme/:categorieArticle', component: ArticlesComponent},

  { path: 'article-detail/:reference', component: ArticleDetailComponent},
  //{ path: ':client/:categorieArticle/:reference', component: ArticleDetailComponent} // client -> enfant, femme ou homme

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
