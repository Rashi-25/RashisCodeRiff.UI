import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { Observable } from 'rxjs';
import { AddBlogPost } from '../models/add-blog-post.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
}
