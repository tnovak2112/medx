import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listarCategorias(): Observable<any> {
    const url = `${this.base}/categorias/listar`;
    return this.http.get<any>(url);
  }

  getCategoryPerProfileId(profile_id: number): Observable<any> {
    const url = `${this.base}/categorias/obtenerCategoria?profile_id=${profile_id}`;
    return this.http.get<any>(url);
  }
}
