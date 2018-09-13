import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // test = [{value:"Some sample text",mode:true},{value:"Some sample text3",mode:true}];
  name = '';
  gender = '';
  btnmode = 'view';
  items: Item[] = [{name:'hello', gender: 'm', btnmode: 'view'},
                  {name:'mello', gender: 'f', btnmode: 'view'},
  ];
  
  add(){
    // new Item(this.name, this.gender);
      this.items.push(new Item(this.name, this.gender,this.btnmode));
      console.log(this.items);
      this.name = '';
      this.gender = '';
    // console.log(this.items[0])
  }

  constructor() { }

  ngOnInit() {
  }

}
