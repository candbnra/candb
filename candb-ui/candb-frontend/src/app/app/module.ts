import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component"; 
import { EmployeeListComponent } from "../employee-list/employee-list.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }