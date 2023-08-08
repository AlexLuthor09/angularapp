import { Component } from '@angular/core';


@Component({
  selector: 'app-ajout-animateur',
  templateUrl: './ajout-animateur.component.html',
  styleUrls: ['./ajout-animateur.component.css']
})
export class AjoutAnimateurComponent {
  public nom: string | undefined;
  public prenom: string | undefined;
  public responsableTrancheAge?: string;
  public dateNaissance: number | undefined;
  public adresse?: string;
  public numeroTelephone?: string;
  public email?: string;
  public allergie?: string;
  public commentaire?: string;



  onSubmit() {

    const nouvelAnimateur = {
      nom: this.nom,
      prenom: this.prenom,
      responsableTrancheAge: this.responsableTrancheAge,
      dateNaissance: this.dateNaissance,
      adresse: this.adresse,
      numeroTelephone: this.numeroTelephone,
      email: this.email,
      allergie: this.allergie,
      commentaire: this.commentaire
    };
  }
}
