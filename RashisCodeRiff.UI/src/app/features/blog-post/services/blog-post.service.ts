import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { Observable } from 'rxjs';
import { AddBlogPost } from '../models/add-blog-post.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http: HttpClient) { }
  
  createBlogPost(data: AddBlogPost) : Observable<BlogPost> {
    return this.http.post<BlogPost>(`${environment.baseApiUrl}/api/blogposts?addAuth=true`, data);
  }
  getAllBlogPosts() : Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${environment.baseApiUrl}/api/blogposts`);
  }
  getBlogPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.baseApiUrl}/api/blogposts/${id}`);
  }
  updateBlogPost(id: string, updatedBlogPost: UpdateBlogPost): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${environment.baseApiUrl}/api/blogposts/${id}?addAuth=true`, updatedBlogPost);
  }
}
