import { Component, OnInit } from '@angular/core';

@Component({
	  selector: 'app-root',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.scss']
	})
export class AppComponent implements OnInit {
	  title = 'theGreatTable';
	  public toogleTrue: boolean = false;
	  public day:number;
	  public totalAmount: number = 350.5550;
	  public totalDrinks: number = 25.50;

  	public weekDays : {} = {
	    0: "Monday",
	    1: "Tuesday",
	    2: "Wednesday",
	    3: "Thrusday",
	    4: "Friday",
	    5: "Saturday",
	    6: "Sunday"
	};

	public buttonItems: Array<{}> = [
	{
		0: "Drink"
	},
	{
		1: "Food"
	},
	{
		2: "Dessert"	
	}
];

	ngOnInit(){
		var d = new Date();
		this.day = d.getDay()
	}
	  
}

