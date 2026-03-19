import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http: HttpClient) { }

  public getPopularAuthors(): Observable<any> {
  const cached = localStorage.getItem('authors_cache');
  if (cached) {
    return of(JSON.parse(cached));
  }

  const httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
      'X-RapidAPI-Key': environment.apiKey
    })
  };

  return this._http.get('https://hapi-books.p.rapidapi.com/top_authors', httpOptions).pipe(
    tap(data => localStorage.setItem('authors_cache', JSON.stringify(data)))
  );
}

public getAuthorInformationById(id: string): Observable<any> {
  const key = `author_${id}`;
  const cached = localStorage.getItem(key);
  if (cached) {
    return of(JSON.parse(cached));
  }

  const httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
      'X-RapidAPI-Key': environment.apiKey
    })
  };

  return this._http.get(`https://hapi-books.p.rapidapi.com/author/${id}`, httpOptions).pipe(
    tap(data => localStorage.setItem(key, JSON.stringify(data)))
  );
}
}
