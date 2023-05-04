import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProfile(user_id: number): Observable<any> {
    const url = `${this.base}/perfil/obtener?user_id=${user_id}`;
    return this.http.get<any>(url);
  }

  getProfilesPerCategoryId(degree_id: number): Observable<any> {
    const url = `${this.base}/perfil/obtenerPerfilesPorCategoria?degree_id=${degree_id}`;
    return this.http.get<any>(url);
  }
}
