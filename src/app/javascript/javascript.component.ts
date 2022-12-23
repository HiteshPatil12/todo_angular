import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  providers: [EnrollService, FeedbackService]
})
export class JavascriptComponent {

  title = 'JavaScript';

  constructor(private enrollService: EnrollService, private feedbackService:FeedbackService){

  }

  handleEnrollJS(){
    this.enrollService.onEnrollClicked(this.title);
  }
  
  handleFeedback(){
    this.feedbackService.feedbackClicked(this.title);
  }

}
