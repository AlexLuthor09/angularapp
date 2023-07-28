import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public forecasts?: Animateurs[];

  constructor(http: HttpClient) {
    http.get<Animateurs[]>('/api/Animateurs').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  title = 'angularapp';
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
