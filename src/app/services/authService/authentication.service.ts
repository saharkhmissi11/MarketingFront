import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest } from 'src/app/models/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse';
import { Employee } from 'src/app/models/Employee';
import { VerificationRequest } from 'src/app/models/VerificationRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiBaseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
  registerUser(registerRequest: Employee) {
    return this.http.post<AuthenticationResponse>(`${this.apiBaseUrl}/user/add`, registerRequest);
  }

  login(authRequest: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>(`${this.apiBaseUrl}/user/authenticate`, authRequest);
  }

  verifyCode(verificationRequest: VerificationRequest) {
    return this.http.post<AuthenticationResponse>
    (`${this.apiBaseUrl}/verify`, verificationRequest);
  }

}
