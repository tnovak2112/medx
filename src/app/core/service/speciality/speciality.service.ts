import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SpecialityService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSpecialityPerDegreeId(degree_id: number): Observable<any> {
    const url = `${this.base}/especialidades/listar?degree_id=${degree_id}`;
    return this.http.get<any>(url);
  }

  getSpecialityPerProfileId(profile_id: number): Observable<any> {
    const url = `${this.base}/especialidades/obtenerEspecialidadPorIdPerfil?profile_id=${profile_id}`;
    return this.http.get<any>(url);
  }
}
