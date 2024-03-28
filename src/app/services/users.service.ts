import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiURL = 'https://fakestoreapi.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    console.log("getUsersCalled");
    return this.http.get<any>(this.apiURL);
  }

  getUser(id): Observable<any>{
    return this.http.get<any>(this.apiURL + "/" + id);
  }
}
