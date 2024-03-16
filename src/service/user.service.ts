import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { User } from "./user.model";

@Injectable({
  providedIn: "root"
})

export class Userservice {
  private http = inject(HttpClient);
  private URL_API = `${environment.api}`

  getUsers() {
    return this.http.get<User[]>(this.URL_API)
  }
}
