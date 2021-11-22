import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'converter';
  result ="";
  currency = "";
  value = 0;
  ans =0;
  onSubmit()
  {
    if(this.currency=="INR")
    {
      this.ans = this.value / 74.24;
      
      this.result = "Dollar Equivalent is " + this.ans;
     
    }
    else if(this.currency=="Dollar")
    {
      this.ans = this.value * 74.24;
      this.result = "INR Equivalent is "+this.ans;
    }
    else
    {
      this.result = "Invalid Input";
    }

  }

}
