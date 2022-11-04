import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl:string='http://localhost:8080';
  constructor(private http:HttpClient) { }

  createRules(obj:any){
    return (this.http.post(`${this.baseUrl}/rules/save`,obj));
  }


  getAllRules(){
    return (this.http.get(`${this.baseUrl}/rules/all`));
  }


  interchangeRules(r1:number,r2:number){
    return (this.http.get(`${this.baseUrl}/rules/interchange/${r1}/${r2}`));
  }


  changeData(obj:any[]){
    return (this.http.post(`${this.baseUrl}/rules/change`,obj));
  }

  updateData(obj:any){
    return (this.http.put(`${this.baseUrl}/rules/update`,obj));
  }

  deleteData(id:any){
    console.log(id);
    return (this.http.delete(`${this.baseUrl}/rules/delete/${id}`,{
      responseType:"json"
    }));
  }

  getParticularRules(id:any){
    return (this.http.get(`${this.baseUrl}/rules/${id}`));
  } 
}
