import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendContactEmail(text: string){

    return this.http.post('http://localhost:3000/api/users/contact', {
      text
    })
  }
}