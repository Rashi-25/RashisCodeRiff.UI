import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseApiUrl = 'https://localhost:7068';

  constructor(private httpClient: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.httpClient.post<void>(this.baseApiUrl + '/api/categories', model);
  }
}
