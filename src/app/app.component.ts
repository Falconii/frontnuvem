import { AponExecucaoService } from './services/apon-execucao.service';
import { CarrosServices } from './services/carros.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarrosModel } from './models/Carros-Model';
import { ApoExecucaoModel } from './models/apo-execucao-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Olha Eu Na Nuvem';

  inscricaoGetAll!: Subscription;
  inscricaoMovimento!: Subscription;

  carros: CarrosModel[] = [];

  movimento: ApoExecucaoModel = new ApoExecucaoModel();

  constructor(
    private carrosServices: CarrosServices,
    private aponExecucaoService: AponExecucaoService
  ) {}

  ngOnInit(): void {
    this.getCarros();
  }

  ngOnDestroy() {
    this.inscricaoGetAll?.unsubscribe();
    this.inscricaoMovimento?.unsubscribe();
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

  insertMovi() {
    let movi: ApoExecucaoModel = new ApoExecucaoModel();
    this.inscricaoMovimento = this.aponExecucaoService
      .ApoExecucaoInsert(movi)
      .subscribe(
        (data: ApoExecucaoModel) => {
          this.movimento = data;
          console.log(this.movimento);
        },
        (error: any) => {
          this.carros = [];
          console.log('Deu Merda', error);
        }
      );
  }

  onClickInsert(): void {
    this.insertMovi();
  }
}
