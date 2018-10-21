import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Gist {
	description: string;
	public_gist: boolean;
	file_name: string;
	content: string;

  // description: "To do",
  // filename: generateFileName(),
  // content: data.task,
  // public: publicGist
}

@Injectable({
  providedIn: 'root'
})
export class GistService {

  base_url = "http://localhost:8000/"
  url = "http://localhost:8000/api/gists/"

  constructor(private http: HttpClient) { }

  getData(url:string) {
    return this.http.get(url);
  }

  getGist(gist_id): Observable<Gist[]> {
    //console.log(this.url + gist_id);
  	return this.http.get<Gist[]>(this.url + gist_id);
  }

  login(): Observable<Gist[]> {
    //console.log('Lets Login');
    //return this.http.post(this.base_url + 'login');
    //window.location.href = this.base_url + 'login';
    return this.http.get<Gists[]>(this.base_url + 'login');
  }


  UserProfile(): Observable<Gist[]> {
    return this.http.get<Gists[]>(this.base_url + 'user');
  }

  populateGists(): Observable<Gist[]> {
    return this.http.get<Gist[]>(this.url);
  }

  createGist(options): Observable<Gist> {

    const body = {
      description: options.description,
      public: options.public,
      files: {
        gistban: {
          content: options.content
        }
      }
    }


    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    //console.log(body);
    return this.http.post<any>(this.url, body, {headers: headers});
  }
  
}
