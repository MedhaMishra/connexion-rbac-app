// Import necessary Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { ProtectedRoute1Component } from './components/protected-route1/protected-route1.component';
import { ProtectedRoute2Component } from './components/protected-route2/protected-route2.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Define the AppModule
@NgModule({
  declarations: [
    // Declare the components used in the application
    AppComponent,
    UserComponent,
    ProtectedRoute1Component,
    ProtectedRoute2Component,
    NavigationComponent
  ],
  imports: [
    // Import necessary modules
    BrowserModule, // Provides services that are essential to launch and run a browser app
    AppRoutingModule, // Contains the application routing configuration
    FormsModule, // Provides support for template-driven forms
    HttpClientModule, // Provides support for making HTTP requests
    BrowserAnimationsModule // Provides support for animations
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap the AppComponent at application startup
})
export class AppModule { }
