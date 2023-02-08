import { Component, OnInit } from '@angular/core';
import { emploi } from '../core/module/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {
listEmpoi !: emploi[];
  constructor() { }

  ngOnInit(): void {this.listEmpoi=[
{reference:"1",titre:"secretaire",entreprise:"meta", etat :true},
{reference:"2",titre:"medecin",entreprise:"clinique", etat :false}
  ]
  }
  postuler(i:number){
 
  }
  bilan(i:number, etat:boolean){
   i==0;
    for(let l in this.listEmpoi){
     if (etat==false) 
i++;



    }

  }

}
