import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cards, Movements, Payment } from '../../model/cards';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getAccessToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  login(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post<any>(`${environment.url}/login`, {username, password})
      .toPromise()
      .then(data => {
        return resolve(data);
      }).catch((error) => {
         return reject(error);
      });
    });
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }

  getCards(): Observable<Cards[]>{
    return this.http.get<Cards[]>(`${environment.url}/cards`);
  }

  getCardsMovements(productNumber: string): Observable<Movements[]>{
    return this.http.get<Movements[]>(`${environment.url}/cards/movements/${productNumber}`);
  }

  postPayment(payment: Payment): Observable<Cards[]>{
    return this.http.post<Cards[]>(`${environment.url}/cards/payments`, payment);
  }
}
