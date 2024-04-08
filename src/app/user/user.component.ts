import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

      itemForm = new FormGroup({
        "name":new FormControl(""),
        "description":new FormControl("")
      });

      constructor(private api:CommonService){

      }

      ngOnInit() {
        
      }

      saveItem(){
        console.log(this.itemForm.value);
          this.api.addItemData(this.itemForm.value).subscribe(data => {
            console.log(data);
            this.itemForm.reset();
          });
      }
      resetForm(){
        this.itemForm.reset();
      }
}

