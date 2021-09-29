import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()

export class DataService {

  constructor(@Inject(String) private url :string ,private http :HttpClient) { }

  getAll(){
    return this.http.get(this.url);
  }

  add(resource : any){
    return this.http.post(this.url , JSON.stringify(resource));
  }

  edit(resource : any){
    return this.http.put(this.url + "/" + resource.id,resource);
  }

  delete(id : number){
    return this.http.delete(this.url+"/"+id);
  }

  // deletePost(id : number): Observable<any> {
  //   return this.http.get<any>(this.url +"/"+id)
  //     .pipe(
  //       catchError((err) => {
  //         console.log('error caught in service')
  //         console.error(err);
  //         //Handle the error here
  //         return throwError(err);    //Rethrow it back to component
  //       })
  //     )
  // }
  

}