import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp-one',
  template: `
    <p>
      test-comp-one works!
    </p>
  `,
  styles: []
})
export class TestCompOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
