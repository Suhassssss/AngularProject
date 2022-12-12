import { Component } from '@angular/core';

@Component({
    selector: 'app-warningAlert',
    templateUrl: './warningAlert.component.html',
    styleUrls: ['./warningAlert.component.css']
})

export class WarningAlertComponent {
    warnAlert = "This is a warning. You are in danger...!";
}