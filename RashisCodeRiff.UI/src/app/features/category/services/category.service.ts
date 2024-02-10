import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.models';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request.model';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //private baseApiUrl = 'https://localhost:7068';

  constructor(private httpClient: HttpClient,
    private cookieService: CookieService) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.httpClient.post<void>(`${environment.baseApiUrl}/api/categories`, model);
  }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${environment.baseApiUrl}/api/categories`);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(`${environment.baseApiUrl}/api/categories/${id}`);
  }

  updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest) : Observable<Category> {
    return this.httpClient.put<Category>(`${environment.baseApiUrl}/api/categories/${id}?addAuth=true`, updateCategoryRequest);
  }

  deleteCategory(id: string) : Observable<Category> {
    return this.httpClient.delete<Category>(`${environment.baseApiUrl}/api/categories/${id}?addAuth=true`)
  }
}
