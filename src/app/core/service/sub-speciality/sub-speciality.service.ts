import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SubSpecialityService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSubSpecialityPerSpecialityId(speciality_id: number): Observable<any> {
    const url = `${this.base}/subEspecialidades/obtener?speciality_id=${speciality_id}`;
    return this.http.get<any>(url);
  }

  getSubSpecialityPerProfileId(profile_id: number): Observable<any> {
    const url = `${this.base}/subEspecialidades/obtenerSubEspecialidadPorIdPerfil?profile_id=${profile_id}`;
    return this.http.get<any>(url);
  }
}
