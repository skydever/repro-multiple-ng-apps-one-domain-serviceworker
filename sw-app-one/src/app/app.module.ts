import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TestCompOneComponent } from './test-comp-one/test-comp-one.component';

@NgModule({
  declarations: [AppComponent, TestCompOneComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          component: TestCompOneComponent
        }
      ],
      {
        initialNavigation: "enabled"
      }
    ),
    ServiceWorkerModule.register("/sw-app-one/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
