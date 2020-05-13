import { map, catchError } from 'rxjs/operators';
import { Protudos } from './produtos.model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  baseUrl = 'http://localhost:3001/products';

  constructor(private snackbar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucesso']
    })
  }

  errorHandeler(e: any): Observable<any>{
    this.showMessage('erro', true)
    return EMPTY
  }

  create(produto: Protudos): Observable<Protudos>{
    return this.http.post<Protudos>(this.baseUrl, produto).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandeler(e))
    )
  }

  read(): Observable<Protudos[]>{
    return this.http.get<Protudos[]>(this.baseUrl);
  }

  readById(id: number): Observable<Protudos>{
      const url = `${this.baseUrl}/${id}`
      return this.http.get<Protudos>(url)
  }

  update(produto: Protudos): Observable<Protudos>{
    const url = `${this.baseUrl}/${produto.id}`
    return this.http.put<Protudos>(url, produto)
  }

  delete(id: number): Observable<Protudos>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Protudos>(url);
  }
}
