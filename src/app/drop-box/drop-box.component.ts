import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drop-box',
  templateUrl: './drop-box.component.html',
  styleUrls: ['./drop-box.component.css']
})
export class DropBoxComponent implements OnInit {

  constructor() { }

  showShipInfo = true;
  showGoosInfo = true;

  onShipClick(goo){

    goo == "ship"? this.showShipInfo = !this.showShipInfo : this.showGoosInfo = !this.showGoosInfo;

  }

  ngOnInit() {
  }

}
