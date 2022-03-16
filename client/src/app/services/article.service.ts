import { HttpClient ,HttpEvent,HttpHeaders,HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}
@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  
  
  constructor(private global: GlobalService, private http:HttpClient) { }

  getarticle_List(){
    return this.http.get<any>(this.global.serviceUrl  + 'article/');
  }

  storeArticle(data:any){
    return this.http.post(this.global.serviceUrl+'article/store/',{title: data.title, description: data.description,author:data.author,image:data.image},httpOptions);
  }

  showArticle(id:any){
  return this.http.post(this.global.serviceUrl+'article/show',{'articleID':id},httpOptions);
  }

}
