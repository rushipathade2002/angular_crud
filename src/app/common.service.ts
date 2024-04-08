import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http:HttpClient){ }

  addItemData(obj:any){
    return this.http.post('http://localhost:3000/items',obj);
  }

  getItemList(){
    return this.http.get('http://localhost:3000/items');
  }

  getItemById(id:any){
    return this.http.get('http://localhost:3000/items/'+id);
  }

  deleteItem(id:any){
    return this.http.delete('http://localhost:3000/items/'+id);
  }
  
  updateItem(obj:any,id:any){
    return this.http.put('http://localhost:3000/items/'+id,obj);
  }
}
