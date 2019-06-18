import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css']
})
export class NavibarComponent implements OnInit {

  constructor(private userdata:UserdataService) { }

  ngOnInit() {
  }
  intializing()
  {
    this.userdata.initialize();
  }
}
