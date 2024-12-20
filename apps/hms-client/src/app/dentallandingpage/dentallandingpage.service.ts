import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { Appointment } from './appointment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DentallandingpageService {

  BASE_URL='http://localhost:3400/'


  constructor(private http: HttpClient,
    ) {
    }

  createUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.BASE_URL}users`, user)
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.BASE_URL}users`)
  }

  getUser(userId:string):Observable<Patient[]>{
    return this.http.get<User[]>(`${this.BASE_URL}users/${userId}`)
  }

  deleteUser(userId:string): Observable<User>{
    return this.http.delete<User>(`${this.BASE_URL}users/${userId}`)
  }

  updateUser(userId:string, user:User):Observable<User>{
    return this.http.patch<User>(`${this.BASE_URL}users/${userId}`,user)
  }

  createPatient(patient:Patient):Observable<Patient>{
    return this.http.post<Patient>(`${this.BASE_URL}patients`, patient)
  }

  getPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.BASE_URL}patients`)
  }

  getPatient(patientId:string):Observable<Patient[]>{
    return this.http.get<Patient[]>(`${this.BASE_URL}patients/${patientId}`)
  }

  createAppointement(appt:Appointment):Observable<Appointment>{
    return this.http.post<Appointment>(`${this.BASE_URL}appointments`, appt)
  }

  updateAppointment(apptId:string, appt:Appointment):Observable<Appointment>{
    return this.http.patch<Appointment>(`${this.BASE_URL}users/${apptId}`,appt)
  }

}
