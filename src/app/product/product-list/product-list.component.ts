import { Component } from '@angular/core';
import { Iproducto } from '../product/iproducto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imageWidth:number=50;
  imgeMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:Iproducto[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas famili",
      "year":"febrero 3 2020",
      "precio":120000,
      "Marca":"Nissan",
      "Color":"verde",
      "imagenUrl":"https://wieck-nissanao-production.s3.amazonaws.com/photos/d6433b216caebca2ec0e0d8db3fef71c8ca4d798/preview-928x522.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"2 puertas",
      "year":"marzo 5 2022",
      "precio":180000,
      "Marca":"Audi",
      "Color":"Blanco",
      "imagenUrl":"https://images.kavak.services/images/121801/a5-audi-s-line-2018-exterior-frontsidepilotnear-16335428106493.jpg?d=540x310"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year":"enero 5 2023",
      "precio":200000,
      "Marca":"Kia",
      "Color":"Azul",
      "imagenUrl":"https://www.kia.com/content/dam/kwcms/mx/es/images/showroom/2022/rio-sd-bn/caracteristicas/Componente-RioSD_LX.png"
    }
  ]
}