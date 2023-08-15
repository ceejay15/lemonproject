import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { serviceService } from 'src/app/service.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  activePath: any;
  barHeight: string = "45%";

  constructor(private route: Router, private service : serviceService) {
    console.log(this.route.url)
  }

  ngOnInit(): void {
      this.service.getPage().subscribe(d=>{
        console.log("page ",d);

        if(d === "home"){
          this.barHeight = "35%";
        }
        if(d === "services"){
          this.barHeight = "65%";
        }
        if(d === "works"){
          this.barHeight = "85%";
        }
        if(d ===  "contact"){
          this.barHeight = "100%";
        }
      })
  }

  setPage(p: string){
    this.service.setPage(p);
  }

}
