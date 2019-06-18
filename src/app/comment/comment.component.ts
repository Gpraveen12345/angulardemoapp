import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:UserdataService) { }
user;
  ngOnInit() {
    this.route.queryParamMap.subscribe(params=>
      {
        this.user=params.get('user')
        this.user=JSON.parse(this.user);
        console.log(this.user['body']);
        if(this.user['count']== null)
        {
          this.user['count']=1;
        }
        else
        {
          this.user['count']++;
        }
        this.service.updateuser(this.user);
      
  }
    )};
}
