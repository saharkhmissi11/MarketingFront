import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private URL = environment.apiBaseUrl ;

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.URL}/api/category/all`);
  }

  DeleteCategory(idCategory: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/api/category/delete/${idCategory}`);
  }


  AddCategory(categoryData: Category) : Observable<Category[]> {
    return this.http.post<Category[]>(`${this.URL}/api/category/add`, categoryData);
  }
  UpdateCategory(categoryData: Category)  {
    return this.http.put<Category[]>(`${this.URL}/api/category/update`, categoryData);
  }
}
