import { HttpClientModule, provideHttpClient, withFetch } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component"; 
import { EmployeeListComponent } from "../employee-list/employee-list.component";
import { CreateEmployeeComponent } from "../create-employee/create-employee.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        CreateEmployeeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [provideHttpClient(withFetch())],
    bootstrap: [AppComponent]
})
export class AppModule { }
