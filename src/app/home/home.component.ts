import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  company = {
    name: 'Tech Innovators Inc.',
    industry: 'Technology',
    founded: 2005,
    mission: 'Innovating the future with cutting-edge technology.',
    headquarters: 'Silicon Valley, California',
    employees: 5000,
    website: 'https://techinnovators.com',
    logoUrl: 'https://via.placeholder.com/150'  // Placeholder for the company logo
  };
}
