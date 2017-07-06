import {Component} from '@angular/core';
import {Employee} from './Models/employee';

@Component({
    selector:'employee-root',
    templateUrl:'./Views/employee-app.component.html'
})

export class EmployeeComponent{
    // Interpolation Binding
    empObj:Employee = new Employee();
}