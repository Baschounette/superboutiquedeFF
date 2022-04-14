import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http:HttpClient) { }

  getProduits() {
    return this.http.get("http://localhost:3000/product")
  }
  deleteProduit(id:any){
    return this.http.delete("http://localhost:3000/product/"+id)
  }
  // La méthode à besoin de 2 paramètre
  saveProduit(produit : any) {
    return this.http.post("http://localhost:3000/product/", produit)
  }
  disponible(produit: any) {
    let available = produit.available;
    return this.http.patch("http://localhost:3000/product/"+produit.id, {available: !available})
  }
  jeCherchePrix(search: any) {
    let min = search.value.min;
    let max = search.value.max;
    return this.http.get("http://localhost:3000/product?price_gte="+min+"&price_lte="+max)
  }
}
