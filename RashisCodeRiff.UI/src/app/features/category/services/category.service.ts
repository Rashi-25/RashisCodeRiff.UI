import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.models';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //private baseApiUrl = 'https://localhost:7068';

  constructor(private httpClient: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.httpClient.post<void>(`${environment.baseApiUrl}/api/categories`, model);
  }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.baseApiUrl}/api/categories`);
  }
}
