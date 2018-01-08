import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp-two',
  template: `
    <p>
      test-comp-two works!
    </p>
  `,
  styles: []
})
export class TestCompTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
