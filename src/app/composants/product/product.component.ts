import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  afficher:boolean = false;

  modifier = {
    id: 0,
    title: "",
    description: "",
    image: "",
    price: 0,
    available: false
  };

  constructor(private ps: ProduitsService) { }

  ngOnInit(): void {
    this.getProduits()
  }

  getProduits() {
    this.ps.getProduits().subscribe(data=>{
      this.products = data;
      console.log(this.products);
    })
  }

  supprimer(id:any) {
    console.log(id);
    this.ps.deleteProduit(id).subscribe(data => {
      this.getProduits()
      this.afficher=true
    }
    );

  }
  changeDisponible(produit: any) {
    this.ps.disponible(produit).subscribe(()=>{
      this.getProduits();
    }
    )
  }
  cherchePrix(search: any) {
    this.ps.jeCherchePrix(search).subscribe(data =>{
      this.products = data
      console.log(search.value)
    })
  }
  chercheMotCle(search1: any) {
    this.ps.jeChercheMotCle(search1).subscribe(data =>{
      this.products = data
      console.log(search1.value)
    })
  }

  modifierProduit(product: any) {
      this.modifier = product
    }
    
  modifProduit(modifier: any) {
    this.ps.jeModifierProduit(modifier).subscribe(()=>{
      console.log(this.modifier)
    })
  }
    
  


}
