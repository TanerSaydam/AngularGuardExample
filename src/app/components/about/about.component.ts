import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  text:string = "";
  text2:string = "";
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.text = this.activatedRoute.snapshot.params['value'];
    this.text2 = this.activatedRoute.snapshot.params["value2"];
    console.log(this.activatedRoute);
    //console.log(this.text);
    this.activatedRoute.params.subscribe((res)=> {
      this.text = res["value"];
      this.text2 = res["value2"];
    },(err)=>{
      console.log(err);
    })
  }

  getAbout(){
    //işlemler
    this.router.navigate(['/about'], {relativeTo:this.activatedRoute});
    //console.log(this.activatedRoute)
  }

  changeAbout(){
    this.router.navigate(['/about','seval','saydam'], {queryParams: {value: '1', value2: '2', value3: '3'}, fragment: 'loading'})
  }
}
