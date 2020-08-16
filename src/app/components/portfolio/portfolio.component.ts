import { Component, OnInit } from '@angular/core';

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

  constructor(
    public _photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.search('all');
  }

  search(work){
    console.log(work);
    this._photoService.conectarImagenes(work).subscribe(
      (resp: any) => {
        if (resp.hits != ''){
          console.log(resp);
          console.log(resp.hits);
          this.photos = resp.hits;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
