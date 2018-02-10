import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EntryRemoteService {

  constructor(private http: HttpClient) {}

  get entries(){
    return this.http.get("https://rolandsson.nu/jakob/web/entryservice.php");
  }
}
