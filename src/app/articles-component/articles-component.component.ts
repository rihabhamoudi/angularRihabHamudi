import { Component, OnInit } from '@angular/core';
import { article } from '../core/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent implements OnInit {
  listArticle !: article[];
  trv!:string;
  nbr!:number;
  constructor() { }

  ngOnInit(): void {this.listArticle=[
    {titre:"le championnat du monde", contenu:"le champion du monde de cette année est ", auteur:"med taher",date:"12/12/2005",categorie:"sport"},
    {titre:"les nouveaux parents", contenu:"parents",auteur:"ahmed said",date:"11/11/2018",categorie:"travail"}

  ]
  }

}
