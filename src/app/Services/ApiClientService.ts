import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { retry, catchError, Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { response } from "express";

@Injectable()
export class ApiClientService 
{



    constructor(private client:HttpClient){}

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow': '*',
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

    public getCustomUrl<T>(url:string,ctx:any,callback:(resp:T ,ctx:any)=>void)
    {
      this.client.get<T>(url,this.httpOptions)
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

    public postCustomUrl<T,T1>(Url:string,model:T1,ctx:any,callback:(resp:T ,ctx:any)=>void)
    {
         fetch(Url,
          {   method: 'POST',
             body:JSON.stringify(model) 
          }).then(response => response.json())
             .then(json => callback(json,ctx))
             .catch(err => console.log(err));
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

 public postdirect()
    {
       this.client.post("http://192.168.1.12/setStatus",{"pin":7,"stat":true})
       .subscribe(x=>{
          console.log(x);
         });
    }

    public getDirect()
    {
      this.client.get("http://192.168.1.12/getValues",this.httpOptions)
       .subscribe(x=>{
       });
    }

    public async getFetchReleList(){
 
     fetch("http://192.168.1.12/getValues",{
        
      }).then(response=>response.json())
       .then(json=>console.log(json))
    }


 public async getFetchDirecttest(){
 
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
    }

    public async postFetchDirect(){
    fetch("http://192.168.1.12/setStatus",
      {   method: 'POST',
         body:JSON.stringify({"pin":0,"stat":false}) 
      }) .then(response => response.json())
         .then(json => console.log(json))
         .catch(err => console.log(err));
   
    }
}