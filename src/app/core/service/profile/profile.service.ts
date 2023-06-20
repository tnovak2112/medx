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

  getProfile(user_uuid: number): Observable<any> {
    const url = `${this.base}/perfil/obtener?user_uuid=${user_uuid}`;
    return this.http.get<any>(url);
  }

  getProfilesPerCategoryId(
    degree_id: number,
    specialityId: number,
    subSpecialityId: number,
    communeId: number,
    insuranceId: number
  ): Observable<any> {
    const url = `${this.base}/perfil/obtenerPerfilesPorCategoria?degree_id=${degree_id}&specialityId=${specialityId}&subSpecialityId=${subSpecialityId}&communeId=${communeId}&insuranceId=${insuranceId}`;
    return this.http.get<any>(url);
  }

  getALlProfiles(user_name: string): Observable<any> {
    const url = `${this.base}/perfil/obtenerPerfilesPorCoincidencia?user_name=${user_name}`;
    return this.http.get<any>(url);
  }
}
