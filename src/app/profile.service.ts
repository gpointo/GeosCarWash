import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  
  contactus(data: any): Observable<any> {
    return this.http.post('https://drvlkpy8k3.execute-api.us-east-1.amazonaws.com/default/SendContactEmail', data);
  }
}