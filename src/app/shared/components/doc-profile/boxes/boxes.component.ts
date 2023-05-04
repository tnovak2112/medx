import { Component } from '@angular/core';
import { faLocationDot, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMobileButton } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent {
  locationIcon = faLocationDot;
  phoneIcon = faMobileButton;
  mailIcon = faEnvelope;
  whatsappIcon = faWhatsapp;
  webIcon = faGlobe;
  instaIcon = faInstagram;
}
