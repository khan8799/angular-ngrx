import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddSubCategoryResponse, DeleteSubCategoryResponse, SubCategoryPayload, SubCategoryResponse } from '../model/sub-category.model';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<SubCategoryResponse> {
    return this.http.get<SubCategoryResponse>('subCategory');
  }

  add(data: SubCategoryPayload): Observable<AddSubCategoryResponse> {
    return this.http.post<AddSubCategoryResponse>('subCategory', data);
  }

  update(_id: string, data: SubCategoryPayload): Observable<AddSubCategoryResponse> {
    return this.http.put<AddSubCategoryResponse>(`subCategory/${_id}`, data);
  }

  delete(_id: string): Observable<DeleteSubCategoryResponse> {
    return this.http.delete<DeleteSubCategoryResponse>(`subCategory/${_id}`);
  }
}
