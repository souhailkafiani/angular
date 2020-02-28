import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneVerificationService {

  constructor(
    private http:HttpClient
  ) { }
  send(phone){
return this.http.post(`http://127.0.0.1:8000/api/send-sms`,phone);
  }
}
