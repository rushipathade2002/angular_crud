import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
    itemList:any;
    constructor(private api:CommonService){}
  ngOnInit() {
      this.getItemList();
    }

    getItemList(){
      this.api.getItemList().subscribe((data:any) => {
        this.itemList = data;
      });
    }
    deleteItem(id:any){
      this.api.deleteItem(id).subscribe((data:any) => {
        this.getItemList();
      });
    } 

    editItem(){

    }

}
