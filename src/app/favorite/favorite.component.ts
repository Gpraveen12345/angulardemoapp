import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
users;
  constructor(private userdata:UserdataService) {
  }

  ngOnInit() {
    
   let a=this.userdata.getuser();
   let temp:object[]=[];
   //console.log(a);
   a.forEach(item => {

    
     if(!(typeof item['value']=== undefined || item['value']==null))
     {
         console.log(item);
         temp.push(item);
     }
    
   });
 
   this.users=temp;
   console.log(this.users);
    }
     //   for(let i of a)
  //  {
  //   if(!(typeof i['value']=== undefined || i['value']==null))
  //  temp.append(i);
  //   }
  like(user)
{
// if(typeof user['value']=== undefined || user['value'] == null)
//     user['value']="glyphicon glyphicon-heart";
// else
//   user['value']=null;

  
// this.userdata.setusers(this.users);
for(let i=0;i<Object.keys(this.users).length;i++)
{
if(this.users[i]['id']==user['id'])
{
  if(typeof user['value']=== undefined || user['value'] == null)
  this.users[i]['value']="glyphicon glyphicon-heart";
  else
  this.users[i]['value']=null;
}
}
}

}
