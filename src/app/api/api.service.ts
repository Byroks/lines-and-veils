import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  url = 'https://boonsbynight.com';

  getDefaultWeights(): Observable<any> {
    return this.http.get<any>(`${this.url}/api/default-weights`);
  }

  getConsentList(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/consent-list/${id}`);
  }

  postUploadFile(file: any): Observable<any> {
    return this.http.post(`${this.url}/api/file-upload`, file);
  }
}
