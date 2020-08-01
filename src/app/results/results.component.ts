import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() res;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getResultDetails(id) {
    this.router.navigate(['results', id]);
  }

}
