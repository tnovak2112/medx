import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  public currentTokenSubject: BehaviorSubject<any>;
  public currentToken: Observable<any>;
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentUser")!)
    );
    this.currentUser = this.currentUserSubject.asObservable();

    this.currentTokenSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("token")!)
    );
    this.currentToken = this.currentTokenSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public get currentTokenValue(): any {
    return this.currentTokenSubject.value;
  }

  loginUsuario(user: any): Observable<any> {
    const url = `${this.base}/usuario/login?email=${user.email}&password=${user.password}`;
    return this.http.get<any>(url, user);
  }

  registrarUsuario(user: any): Observable<any> {
    const url = `${this.base}/usuario/registro`;
    return this.http.post<any>(url, user);
  }

  generarCodigoUsuario(user: any): Observable<any> {
    const url = `${this.base}/usuario/generar_codigo`;
    return this.http.put<any>(url, user);
  }

  actualizarClaveUsuario(user: any): Observable<any> {
    const url = `${this.base}/usuario/actualizar_clave`;
    return this.http.put<any>(url, user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    localStorage.removeItem("currentUserMoodle");
    this.currentUserSubject.next(null);
    this.currentTokenSubject.next(null);
    return of({ success: false });
  }
}
