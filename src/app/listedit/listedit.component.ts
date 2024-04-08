import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listedit',
  templateUrl: './listedit.component.html',
  styleUrls: ['./listedit.component.css']
})
export class ListeditComponent implements OnInit {
  item_id:any;
  itemData:any;

  itemForm = new FormGroup({
    name:new FormControl (""),
    description:new FormControl("")
  });

  constructor(private api:CommonService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit() {
      this.activatedRoute.params.subscribe((res:any)=>{
        this.api.getItemById(res.id).subscribe(result=>{
          this.item_id=res.id;
          this.itemData=result;
          this.itemForm.setValue({
            name:this.itemData.name,
            description:this.itemData.description
          })
        })
      })
  }

    updateItem(){
        this.api.updateItem(this.itemForm.value, this.item_id ).subscribe((res)=>{
          this.router.navigate(['/items']);
        });
    }
}
