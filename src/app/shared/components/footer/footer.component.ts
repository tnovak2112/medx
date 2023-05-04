import { Component } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  facebookIcon = faFacebook;
  instaIcon = faInstagram;
  mailIcon = faEnvelope;

}
