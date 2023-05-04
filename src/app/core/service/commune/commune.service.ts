import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CommuneService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCommunes(): Observable<any> {
    const url = `${this.base}/comunas/listar`;
    return this.http.get<any>(url);
  }

  getCommunePerId(commune_id: number): Observable<any> {
    const url = `${this.base}/comunas/obtener?commune_id=${commune_id}`;
    return this.http.get<any>(url);
  }
}
