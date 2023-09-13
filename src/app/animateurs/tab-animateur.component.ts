import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {  MatTableDataSource } from '@angular/material/table';
import { AjoutAnimateurComponent } from './ajout-animateur/ajout-animateur.component';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject, retry } from 'rxjs';
import { nodeModuleNameResolver } from 'typescript';

interface Animateurs {
  id: number;
  nom: string;
  prenom: string;
  dateNaissance: number;
  adresse: string;
  numeroTelephone: string;
  email: string;
  allergie: string;
  commentaire: string;
}
const TestTable: Animateurs[] = [
  {
    id: 0,
    nom: 'Test',
    prenom: 'Error',
    dateNaissance: Date.now(),
    adresse: 'tu dois pas voir ça',
    numeroTelephone: '00000',
    email: 'bite',
    allergie: 'ceci n\'est pas normal',
    commentaire: 'tu dois pas voir ça'
  },
  {
    id: 1,
    nom: 'Error',
    prenom: 'Error',
    dateNaissance: Date.now(),
    adresse: 'tu dois pas voir ça',
    numeroTelephone: '00000',
    email: 'bite',
    allergie: 'Api pas accessible',
    commentaire: 'BD non connecter'
  }
]

@Component({
  selector: 'tab-animateur',
  templateUrl: './tab-animateur.component.html',
  styleUrls: ['./tab-animateur.component.css']
})
export class TabAnimateurs {
  public Animateurs: Animateurs[] = TestTable;
  public displayedColumns: string[] = ['id', 'nom', 'prenom', 'commentaire', 'allergie', 'dateNaissance'];
  public dataSource?: DataSourceObservable;
  
  constructor(private http: HttpClient, private dialog: MatDialog) {
    http.get<Animateurs[]>('/api/Animateurs').subscribe(result => {
      this.Animateurs = result; //Rentre le résultat de la requête dans animateurs qui est lié à l'interface ANIMATEUR
      this.dataSource = new DataSourceObservable(this.Animateurs); //Prépare la classe avec observable pour actualiser la table lorqu'on y fera des changement
    }, error => console.error(error));
  }
  addData() {
    // ouverture d'une fenetre/popup/... ou autre pour compléter les information relative à l'animateur
    const dialogBoxRef = this.dialog.open(AjoutAnimateurComponent);
    dialogBoxRef.afterClosed().subscribe(FromFormAnim => {
      //check doublons
      const animateurExiste = this.Animateurs?.some(
        (animateur) => animateur.email === FromFormAnim.email || (animateur.nom === FromFormAnim.nom && animateur.prenom === FromFormAnim.prenom)
      );
      if (animateurExiste) {
        alert("Cet animateur existe déjà dans la liste !");
        return; // Ne soumet pas le formulaire si l'animateur existe déjà
      } else {
          this.http.post<Animateurs>('api/Animateur', FromFormAnim).subscribe(newAnimateur => {
          this.Animateurs?.push(newAnimateur);
          this.dataSource?.setData(this.Animateurs);
        }, error => console.error(error));
      }
 
    }, error => console.error(error))
  }

  removeData() {
    // d'une fenetre/popup/... pour la suppresion d'un animateur choisi dans une liste
  }

  
}

class DataSourceObservable extends DataSource<Animateurs>{
  private _datastream = new ReplaySubject<Animateurs[]>();
  constructor(initData: Animateurs[]) {
    super();
    this.setData(initData);
  }
  connect(): Observable<readonly Animateurs[]> {
    return this._datastream;
  }
  disconnect(){}
  
  setData(data: Animateurs[]) {
    this._datastream.next(data);
  }
}
 
