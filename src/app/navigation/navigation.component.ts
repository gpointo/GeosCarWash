import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  activetab = "home";
  x: any;
  constructor() {}

  ngOnInit() {}

  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }
  burgerClick(){
    
  }
  menuToggle(ham: any,cheese:any){
    ham.classList.toggle("change");
    cheese.classList.toggle("changes");
  }
}
