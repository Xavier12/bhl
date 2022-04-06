import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }

}
