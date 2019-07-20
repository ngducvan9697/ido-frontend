import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  setToken(token) {
    this.cookieService.set('auth_token', token);
  }
  getToken() {
    return this.cookieService.get('auth_token');
  }
  deleteToken() {
    this.cookieService.delete('auth_token');
  }
}
