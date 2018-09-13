import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item.model';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() items: Item[];
  
  edithide = false;
  updatehide = true;
  clicked = 0;
  constructor() { }

  ngOnInit() {
  }

 

  edit(i,z){
    if(this.clicked ==0){
      console.log(this.items[i].btnmode)
      this.items[i].btnmode = 'edit';
      // var index = this.items.findIndex(x => x.name == item.name && x.gender == item.gender);
      // var nameEdit = z.currentTarget.parentNode.parentNode.childNodes[1];
      // var genderEdit = z.currentTarget.parentNode.previousElementSibling;
      
      // console.log(item); 
      // console.log(index);
      // console.log(z);
      // console.log(z.currentTarget.nextElementSibling);
      // console.log(nameEdit);
      // nameEdit.contentEditable = "true";
      // nameEdit.focus();
      // genderEdit.contentEditable = "true";
      z.currentTarget.hidden = true;
      z.currentTarget.nextElementSibling.hidden = false;
      this.clicked = 1;
      }
    // z.attributes["hidden"].edithide = true;
    // z.currentTarget.getAttributes["hidden"].updatehide = false;
    // (<HTMLDivElement>document.querySelector("#editbtn")).clickText = update;

  }

  update(i,z){

    this.items[i].btnmode = 'view';
    // var index = this.items.findIndex(x => x.name == item.name && x.gender == item.gender);  
    // var nameEdit = z.srcElement.parentNode.parentNode.childNodes[1];
    // var genderEdit = z.srcElement.parentNode.previousElementSibling;  
    // this.items[index].name = nameEdit.innerText;
    // this.items[index].gender = genderEdit.innerText;

    // nameEdit.contentEditable = "false";
    // genderEdit.contentEditable = "false";

    z.currentTarget.hidden = true;
    z.currentTarget.previousElementSibling.hidden = false;
    this.clicked = 0;
    // this.edithide = false;
    // this.updatehide = true;  
  }

  delete(i){
    // var index = this.items.findIndex(x => x.name == item.name && x.gender == item.gender); 
    this.items.splice(i, 1);
  }


}
