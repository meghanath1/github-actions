import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class LoginService{
  private httpClient = inject(HttpClient);

  public register(input:any):Observable<any>{
    return this.httpClient.post("http://localhost:8080/auth/register",input)
  }


  public login(input:any):Observable<any>{
    return this.httpClient.post("http://localhost:8080/auth/login",input)
  }
}
