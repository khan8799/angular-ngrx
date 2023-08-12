import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AddCategoryResponse, CategoryPayload, CategoryResponse, DeleteCategoryResponse } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>('category');
  }

  add(data: CategoryPayload): Observable<AddCategoryResponse> {
    return this.http.post<AddCategoryResponse>('category', data);
  }

  update(_id: string, data: CategoryPayload): Observable<AddCategoryResponse> {
    return this.http.put<AddCategoryResponse>(`category/${_id}`, data);
  }

  delete(_id: string): Observable<DeleteCategoryResponse> {
    return this.http.delete<DeleteCategoryResponse>(`category/${_id}`);
  }
}
