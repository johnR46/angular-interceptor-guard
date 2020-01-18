import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { map, filter, reduce, tap } from 'rxjs/operators';
import { Posts } from 'src/app/core/types/posts';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  permission: boolean;
  getAllPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${this.postsUrl}`);
  }

  setPermissionToCreate(): void {
    this.permission = true;
  }

  getPermission(): boolean {
    return this.permission;
  }

  getWithUserId(value: number): Observable<Posts[]> {
    return this.http.get<Posts>(`${this.postsUrl}/${value}`).pipe(
      map(v =>
        [1]
          .map(a => {
            return [
              {
                id: v.id,
                userId: v.userId,
                title: v.title,
                body: v.body
              }
            ];
          })
          .reduce(b => b)
      ),
      tap(console.log)
    );
  }
}
