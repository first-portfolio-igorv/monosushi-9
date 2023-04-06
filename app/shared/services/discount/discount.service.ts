import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DiscountRequest, DiscountResponse } from '../../interfaces/discount';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(
    private http:HttpClient
  ) { }
  public url=environment.BACKEND_URL;
  public api={discounts:`${this.url}/discounts`}
  getAll():Observable<DiscountResponse[]>{
    return this.http.get<DiscountResponse[]>(this.api.discounts);
  }
  add(info:DiscountRequest):Observable<DiscountRequest[]>{
    return this.http.post<DiscountRequest[]>(this.api.discounts, info)
  }
  delete(id:number){
    return this.http.delete(`${this.api.discounts}/${id}`)
  }
  edit(info:DiscountRequest,id:number):Observable<DiscountResponse>{
    return this.http.patch<DiscountResponse>(`${this.api.discounts}/${id}`, info)
  }
}
