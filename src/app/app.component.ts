import { CarrosServices } from './services/carros.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarrosModel } from './models/Carros-Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Olha Eu Na Nuvem';

  inscricaoGetAll!: Subscription;

  carros: CarrosModel[] = [];

  constructor(private carrosServices: CarrosServices) {}

  ngOnInit(): void {
    this.getCarros();
  }

  ngOnDestroy() {
    this.inscricaoGetAll?.unsubscribe();
  }

  getCarros() {
    this.inscricaoGetAll = this.carrosServices.getCarros().subscribe(
      (data: CarrosModel[]) => {
        this.carros = data;
        console.log(this.carros);
      },
      (error: any) => {
        this.carros = [];
        console.log('Deu Merda', error);
      }
    );
  }
}
