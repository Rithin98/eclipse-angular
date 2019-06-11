import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Some welcome message"
  welcomeMessageFromService:String
  name = " "

  constructor(private route:ActivatedRoute,
               private service:WelcomeDataService) { }

  ngOnInit() {
   // console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];

  }
  getwelcomemessage(){
    console.log(this.service.executeHelloWorldbean());
    this.service.executeHelloWorldbeanpath(this.name).subscribe(response=>this.HandleSuccessfulResponse(response),error=>this.ErrorMessage(error));
    //console.log("last line Get Welcome Message")
  }

  HandleSuccessfulResponse(response){
    
    this.welcomeMessageFromService=response.message;
  }

ErrorMessage(error){
  console.log(error);
  console.log(error.error); 
  this.welcomeMessageFromService=error.error.message;
}

}
