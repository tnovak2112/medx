import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class MedicalCenterService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getMedicalCenter(uuid: number): Observable<any> {
    const url = `${this.base}/centroMedico/obtener?uuid=${uuid}`;
    return this.http.get<any>(url);
  }
}
