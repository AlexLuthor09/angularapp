import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
  
})
export class SidenavComponent implements OnDestroy {

  
  public Plaines?: Plaines[];

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, http: HttpClient) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    http.get<Plaines[]>('/Plaines').subscribe(result => {
      this.Plaines = result;
    }, error => console.error(error));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}


interface Plaines {
  id: Int16Array;
  nomPlaine: string;
  dateDebut: Date;
  dateFin: Date;
  capaciteMax: Int16Array;
}
