import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from 'src/app/models/Provider';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderServiceService {

  private URL=environment.apiBaseUrl;
  constructor(private http :HttpClient) { }

  getAllProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.URL}/api/provider/all`);
  }

  DeleteProvider(idProvider: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/api/provider/delete/${idProvider}`);
  }


  AddProvider(providerData: Provider)  {
    return this.http.post<Provider[]>(`${this.URL}/api/provider/add`, providerData);
  }
  UpdateProvider(providerData: Provider) {
    return this.http.put<Provider[]>(`${this.URL}/api/provider/update`, providerData);
  }

}
