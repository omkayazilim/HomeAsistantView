import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { retry, catchError, Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ApiClientService 
{



    constructor(private client:HttpClient){}

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        "Access-Control-Allow-Methods":"POST, GET, OPTIONS, DELETE",
        "Access-Control-Max-Age":"3600",
        "Access-Control-Allow-Headers":"Content-Type, Origin, Cache-Control, X-Requested-With"
      })
  };

    public async getFetch<T>(path:string,ctx:any,callback:(resp:T ,ctx:any)=>void){

    }
    public get<T>(path:string,ctx:any,callback:(resp:T ,ctx:any)=>void)
    {
      this.client.get<T>(environment.serverUrl+path,this.httpOptions)
       .pipe(retry(2), catchError(er=>this.errorhandle<T>(er)))
       .subscribe(x=>{
         callback(x,ctx);
       });
    }
    public getby<T>(path:string,ctx:any,callback:(resp:T ,ctx:any)=>void)
    {
     this.client.get<T>(environment.serverUrl+path)
     .pipe(retry(2), catchError(er=>this.errorhandle<T>(er)))
     .subscribe(x=>{
       callback(x,ctx);
     });
    }

    public post<T,T1>(path:string,model:T1,ctx:any,callback:(resp:T ,ctx:any)=>void)
    {
       this.client.post<T>(environment.serverUrl+path,model)
       .pipe(retry(2), catchError(er=>this.errorhandle<T>(er)))
       .subscribe(x=>{
        callback(x,ctx);
         });
    }

    public put<T,T1>(path:string,model:T1,ctx:any,callback:(resp:T ,ctx:any)=>void)
    {
      this.client.put<T>(environment.serverUrl+path,model)
      .pipe(retry(2), catchError(er=>this.errorhandle<T>(er)))
      .subscribe(x=>{
       callback(x,ctx);
     });
    
    }
    public delete<T>(path:string,ctx:any,callback:(resp:T ,ctx:any)=>void)
    {
       this.client.delete<T>(environment.serverUrl+path)
       .pipe(retry(2), catchError(er=>this.errorhandle<T>(er)))
       .subscribe(x=>{
        callback(x,ctx);
         });
    }



    errorhandle<T>(er:any):Observable<T>{
        if(er&er.error&&er.error.message)
        {
          console.error(er.error.message);
        }
        if(er.error&&er.error.message)
        {
          console.error(er.error.message);
        }
        if(er.error.message)
        {
          console.error(er.error.error.message);
        }
        return throwError(er);
       }

}