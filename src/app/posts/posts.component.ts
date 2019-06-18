import { UserdataService } from './../userdata.service';
import { Http } from '@angular/http';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
      users;

      constructor(private userdata:UserdataService,private router:Router) 
      {
        this.users=userdata.getuser();
      
      }

      ngOnInit() 
      {
            //   this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(response=>{

              console.log(this.users);
      }
      
      navigateToComments(user)
      {
        this.router.navigate(['/comment'],{queryParams:{user:JSON.stringify(user)}});
      }
      like(user)
      {
        if(typeof user['value']=== undefined || user['value'] == null)
        {
              user['value']="glyphicon glyphicon-heart";
        }   
        else
        {
              user['value']=null;
        }
        this.userdata.setusers(this.users);
    }

}
