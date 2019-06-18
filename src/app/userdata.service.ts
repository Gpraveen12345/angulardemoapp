import { PostsComponent } from './posts/posts.component';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  temp;
   users;
   //=new BehaviorSubject<any>([]);
//updateusers=this.users.asObservable();
  constructor(private http :Http) { }
  initialize()
  {
    // this.users=[
    //   {
    //     "PostID": 1,
    //     "Id": 1,
    //     "Name": "to work out how they work",
    //     "Email" :"Eliseo@gardner.biz",
    //     "Body": "cheering as if it is indeed a great pleasure to the \ ntempora which needs \ fluid and the like \ nreiciendis for wisdom and denouncing"
    //   },
    //   {
    //     "PostID": 1,
    //     "Id": 2,
    //     "Name": "I would like them to rejecting",
    //     "Email" :"Jayne_Kuhic@sydney.com",
    //     "Body": "I was born there has never been a pleasure all the pain \ blinded to the net at any \ nvoluptatis mistake prepared to pay \ nnihil be our pleasure and rejects"
    //   },
    //   {
    //     "PostID": 1,
    //     "Id": 3,
    //     "Name": "hatred or the attainment of mind",
    //     "Email" :"Nikita@garfield.biz",
    //     "Body": "find it annoying if he rejects \ nam will have to manage a blind cheering \ nomnibus accusation that some choices are often greater for the \ ncum and led to the pleasures welcome quo"
    //   },
    //   {
    //     "PostID": 1,
    //     "Id": 4,
    //     "Name": "hatred of the other",
    //     "Email" :"Lew@alysha.tv",
    //     "Body": "I do not and and the \ noccaecati deserted the general's world hate us, who from where he had the pleasure of accusing \ nbecause, therefore, result from the pleasure of the pain, \ nand was deleniti that the blind are those who attribute the"
    //   },
    //   {
    //     "PostID": 1,
    //     "Id": 5,
    //     "Name": "some of these symptoms and the pain fault",
    //     "Email" :"Hayden@althea.biz",
    //     "Body": "And this is like a \ nTempore right of the pleasures in the \ nhar runs an architect who discovered eagerness \ nvoluptatis where the great"
    //   },
    //   {
    //     "PostID": 2,
    //     "Id": 6,
    //     "Name": "and runs to choose quo is that they are nothing",
    //     "Email" :"Presley.Mueller@myrl.com",
    //     "Body": "pain at fault, but one which must be abandoned tomato \ naccusamus avoids called \ nvoluptatis the pleasure to be \ nvoluptatis avoided the pain rejects"
    //   },
    //   {
    //     "PostID": 2,
    //     "Id": 7,
    //     "Name": "painful consequences for the present or less troublesome for pleasure",
    //     "Email" :"Dallas@ole.me",
    //     "Body": "But the greater suffering a similar effort by the inventor and \ nquasi times being what they are, and \ apt Pleasure \ naliquid the physical discomfort that resilience and great pain"
    //   },
    //   {
    //     "PostID": 2,
    //     "Id": 8,
    //     "Name": "And no pain",
    //     "Email" :"Mallory_Kunze@marie.org",
    //     "Body": "wants to become a pleasure \ nad greater pleasure \ net unless he wants to denounce greater \ nvoluptatis to have any symptoms"
    //   },
    //   {
    //     "PostID": 2,
    //     "Id": 9,
    //     "Name": "to provide pleasure",
    //     "Email": "Meghan_Littel@rene.us",
    //     "Body": "the wise man at once take the discomfort and the \ nadipisci will open, and from the toil, and so that everyone no difference between the \ nand it spurns the world hate is quite different in the explication thereof blinded \ Nqua, for less than the very"
    //   },
    //   {
    //     "PostID": 2,
    //     "Id": 10,
    //     "Name": "it will be bound to be accusantium",
    //     "Email": "Carmen_Keeling@caroline.name",
    //     "Body": "We find very important, no one wants regular \ nbecause like that do not wish \ nam for emergencies \ nnostrum require not only easy to denounce"
    //   },
    //   {
    //     "PostID": 3,
    //     "Id": 11,
    //     "Name": "resilience which runs hard work for us to leave",
    //     "Email": "Veronica_Goodwin@timmothy.net",
    //     "Body": "the pain is that it is either \ nfuga is discovered or of choosing what will unfold in the main \ nam was born blind drives it to the \ nut that promises to be even greater for those"
    //   },
    //   {
    //     "PostID": 3,
    //     "Id": 12,
    //     "Name": "For the consumer to prove that these pains",
    //     "Email": "Oswald.Vandervort@leanne.org",
    //     "Body": "easy to manage deserving greater \ NIPS is that it wants to follow runs \ brazen hatred and pain, pain entire \ noccaecati to her wishes"
    //   },
    //   {
    //     "PostID": 3,
    //     "Id": 13,
    //     "Name": "do not create or discover the pleasure of mind",
    //     "Email" :"Kariane@jadyn.tv",
    //     "Body": "those who avoidance of pain \ ninventore physical exercise \ ncorporis eagerness to abandon any fault, but accepted \ greater physical and brazen"
    //   },
    //   {
    //     "PostID": 3,
    //     "Id": 14,
    //     "Name": "and the offices that he or she presents a pain reject",
    //     "Email": "Nathan@solon.io",
    //     "Body": "We have no pleasure in the exercise \ nvoluptatis but it \ nminima and who rejects the \ nexpedita great praise and will require that the pain"
    //   }
    // ];
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(response=>{
      this.temp=response.json();
     
       });
  }
  getuser()
  {
   this.users=this.temp;
  console.log("in get user"+this.users);     
  return this.users;

  }
//   updatedata(users)
//   {
// this.users.next(users);
//   }
  setusers(user)
  {
    this.users=user;
  }
  updateuser(user)
  {
    // this.users.forEach((element,index,arr) => {
    //   if(element['id']==user['id'])
    //   {
    //     arr['count']=user['count'];
    //     console.log(arr['count']);
    //   }
    //   //console.log(element['count']);
    // });
    console.log(user);
    for(let i=0;i<Object.keys(this.users).length;i++)
    {
      if(this.users[i]["id"]==user['id'])
      {
        this.users[i]['count']=user['count'];
        console.log("yes");
      }
    }
    console.log(this.users);
    console.log(Object.keys
      (this.users).length);
  }
}
