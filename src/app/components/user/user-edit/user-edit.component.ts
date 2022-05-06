import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user:{id:number,name:string,lastName:string};

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params['id'])
    this.user = this.userService.getUser(+this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params
    .subscribe((res)=>{
      this.user = this.userService.getUser(+this.activatedRoute.snapshot.params['id']);
    })
  }

  update(name:any,lastName:any){
    let id:number = +this.activatedRoute.snapshot.params['id'];
    let nameValue:string = name.value;
    let lastNameValue:string = lastName.value;
    let status = this.userService.update(id,nameValue,lastNameValue);
    //console.log(status)
    if (status) {
      this.router.navigate(['/user']);
    }else{
      console.log("Bir hatayla karşılaştık");
    }

  }

  canDeactivate(){
    return confirm("Değişliklik ekranından çıkmak istiyor musunuz?");
  }

}
