import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class HelloWorldBean{
  constructor(public message:String)
  {}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) {
   }
  executeHelloWorldbean(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world/path-variable/Rithin')
  }
  executeHelloWorldbeanpath(name){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`)
  }
}
