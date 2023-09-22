import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent {

  sponsors = [ {name : "Example Sponsor", url: "example.com", role: "Funding", img: "../assets/MUengineering"},
               {name : "Example Sponsor", url: "example.com", role: "Funding", img: "../assets/MUengineering"},
               {name : "Example Sponsor", url: "example.com", role: "Funding", img: "../assets/MUengineering"},
               {name : "Example Sponsor", url: "example.com", role: "Funding", img: "../assets/MUengineering"}, 
               {name : "Example Sponsor", url: "example.com", role: "Funding", img: "../assets/MUengineering"},
               {name : "Example Sponsor", url: "example.com", role: "Funding", img: "../assets/MUengineering"} ]

}
