import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ GlobalConstants } from '../../global-constants';
const baseUrl = GlobalConstants.baseUrlCliente;
@Injectable({
  providedIn: 'root'
})
export class ClienteServiceServer {
  
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  searchByNombre(nombre: any): Observable<any> {
    return this.http.get(`/api/clienteConNombreContiene?apellidos=${nombre}`);
  }

  subirArchivoExcelImportacion(formData: FormData,nameFile: any ): Observable<any> {
    return this.http.post(`${baseUrl+'/uploadFile'}/${nameFile}`, formData);
  }
}