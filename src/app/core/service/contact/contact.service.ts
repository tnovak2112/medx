import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  sendMail(contact: any): Observable<any> {
    const url = `${this.base}/email/formulario_contacto`;
    return this.http.post<any>(url, contact);
  }
}
