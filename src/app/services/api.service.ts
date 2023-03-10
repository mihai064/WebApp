import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postProduct(data : AnimationPlaybackEventInit){
    return this.http.post<any>("http://localhost:3000/productList/",data);
  }
  getProduct(){
    return this.http.get<any>("http://localhost:3000/productList/");
  }
  putProduct(data : any,id : number){
    return this.http.put<any>("http://localhost:3000/productList/"+id,data);
  }
  deleteProduct(id : number){
    return this.http.delete<any>("http://localhost:3000/productList/"+id);
  }

  postEchipe(data : AnimationPlaybackEventInit){
    return this.http.post<any>("http://localhost:3000/Echipe/",data);
  }
  getEchipe(){
    return this.http.get<any>("http://localhost:3000/Echipe/");
  }
  putEchipe(data : any,id : number){
    return this.http.put<any>("http://localhost:3000/Echipe/"+id,data);
  }
  deleteEchipe(id : number){
    return this.http.delete<any>("http://localhost:3000/Echipe/"+id);
  }
}
