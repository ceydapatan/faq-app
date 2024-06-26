import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Data[]> {
    return this.http.get<Data[]>(this.baseUrl);
  }
}
