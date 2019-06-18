import { UserdataService } from './../userdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostviewed',
  templateUrl: './mostviewed.component.html',
  styleUrls: ['./mostviewed.component.css']
})
export class MostviewedComponent implements OnInit {

  constructor(private service:UserdataService) { }
  users;
  temp;
  ngOnInit() {
    console.log("hii");
    this.users=this.service.getuser();
    this.temp=this.users;
    this.temp.sort((a,b)=>{
      if(a['count']==null && b['count']>0)
      {
        return 1;
      }
      else if(a['count']>0 && b['count']==null)
      {
        return -1;
      }
      else if(a['count']==null && a['count']==null)
      {
        return 0;
      }
      else
      {
        return b['count']-a['count'];
      }
    });
    console.log(this.temp);
  }

}
