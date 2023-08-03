import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {  MatTableDataSource } from '@angular/material/table';
import { AjoutAnimateurComponent } from './ajout-animateur/ajout-animateur.component';

@Component({
  selector: 'tab-animateur',
  templateUrl: './tab-animateur.component.html',
  styleUrls: ['./tab-animateur.component.css']
})
export class TabAnimateurs {
  public Animateurs?: Animateurs[];
  public displayedColumns: string[] = ['id', 'nom', 'prenom', 'commentaire', 'allergie'];
  public dataSource?: MatTableDataSource<Animateurs>;
  
  constructor(private http: HttpClient, private dialog: MatDialog) {
    http.get<Animateurs[]>('/api/Animateurs').subscribe(result => {
      this.Animateurs = result;
      this.dataSource = new MatTableDataSource<Animateurs>(this.Animateurs);
    }, error => console.error(error));
  }
  addData() {
    // ouverture d'une fenetre/popup/... ou autre pour compléter les information relative à l'animateur
    const dialogBoxRef = this.dialog.open(AjoutAnimateurComponent);
    dialogBoxRef.afterClosed().subscribe(result => {
      this.http.post<Animateurs>('api/Animateur', result);
    }, error => console.error(error))
  }

  removeData() {
    // d'une fenetre/popup/... pour la suppresion d'un animateur choisi dans une liste
  }


}

 interface Animateurs {
  id: Int16Array;
  nom: string;
  prenom: string;
  responsableTrancheAge: string;
  dateNaissance: Date;
  adresse: string;
  numeroTelephone: string;
  email: string;
  allergie: string;
  commentaire: string;
}
