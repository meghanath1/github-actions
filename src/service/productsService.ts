import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class ProductService{
  private httpClient = inject(HttpClient);

  public getProducts():Observable<any>{
    return this.httpClient.get("http://localhost:8080/products",
      {
        headers:{
          "authorization": "Bearer "+localStorage.getItem('authorization')
        }
      }
    )
  }


  public login(input:any):Observable<any>{
    return this.httpClient.post("http://localhost:8080/auth/login",input)
  }
}
