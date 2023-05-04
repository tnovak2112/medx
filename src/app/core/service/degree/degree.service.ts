import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DegreeService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDegrees(): Observable<any> {
    const url = `${this.base}/grados/listar`;
    return this.http.get<any>(url);
  }

  getDegreePerCategoryId(category_id: number): Observable<any> {
    const url = `${this.base}/grados/obtenerGradoPorIdCategoria?category_id=${category_id}`;
    return this.http.get<any>(url);
  }
}
