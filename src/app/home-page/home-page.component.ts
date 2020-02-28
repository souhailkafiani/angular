import { Component, OnInit } from '@angular/core';
import { GetProductCategorieService } from '../Services/get-product-categorie.service';
import { splitAtPeriod } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private get_product:GetProductCategorieService) { }
public products:Array<{
  name,images,description,category,color,
  quantity,marque,new_price,Poids,promotion
}>
  ngOnInit() {
this.get_product.get_gome_products().subscribe(
  data=>{
    console.log(data['data'])
    this.products=data['data']
    
  }
,
  error=>console.log(error)
)
  }
  split_images(e:string){
    let img = "../assets/images/"+e.split(',')[0];
    return img;
  }

}
