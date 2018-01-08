import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TestCompTwoComponent } from './test-comp-two/test-comp-two.component';

@NgModule({
  declarations: [AppComponent, TestCompTwoComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: "",
          component: TestCompTwoComponent
        }
      ],
      {
        initialNavigation: "enabled"
      }
    ),
    ServiceWorkerModule.register("/sw-app-two/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
