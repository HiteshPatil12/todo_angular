import { FeedbackService } from "./feedback.service"
import { Injectable } from "@angular/core"
@Injectable()
export class EnrollService{
    constructor(private fbs:FeedbackService){}
    onEnrollClicked(title){
        console.log('1')
        console.log('1')
        console.log('1')
        alert('Thanks for enrolling in '+title)
    }
}