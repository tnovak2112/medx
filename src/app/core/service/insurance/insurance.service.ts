import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class InsuranceService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getInsurance(): Observable<any> {
    const url = `${this.base}/seguros/listar`;
    return this.http.get<any>(url);
  }

  getInsurancePerIdConsult(consult_id: number): Observable<any> {
    const url = `${this.base}/seguros/obtener?consult_id=${consult_id}`;
    return this.http.get<any>(url);
  }
}
