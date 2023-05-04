import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ConsultService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getConsult(consult_id: number): Observable<any> {
    const url = `${this.base}/consulta/obtener?consult_id=${consult_id}`;
    return this.http.get<any>(url);
  }
}
