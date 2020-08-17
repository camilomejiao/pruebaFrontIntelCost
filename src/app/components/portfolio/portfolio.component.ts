import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';

//Importante para que liste
import { CommonModule } from "@angular/common";

//Service
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  //creamos el arrego de las fotos
  photos = [];
  public wordSearch: String;

  constructor(
    public _photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.search('all');
  }

  search(word){
    //console.log(word);
    //console.log(this.wordSearch);
    let buscarxpalabra = this.wordSearch;

    if (buscarxpalabra != undefined){
      //console.log('ok1');
      this._photoService.BuscarXPalabra(buscarxpalabra).subscribe(
        (resp: any) => {
          if (resp.hits != '') {
            //console.log(resp.hits);
            this.photos = resp.hits;
          } else {
            alert('No se encuentran imagenes con ese nombre que buscas');
          }
        },
        error => {
          console.log(<any>error);
        })
    } else {
      //console.log('ok2');
      this._photoService.conectarImagenes(word).subscribe(
        (resp: any) => {
          if (resp.hits != '') {
            //console.log(resp.hits);
            this.photos = resp.hits;
          }
        },
        error => {
          console.log(<any>error);
        }
      )}
    }
}
