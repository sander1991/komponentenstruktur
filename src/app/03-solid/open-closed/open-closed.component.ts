import { Component } from '@angular/core';
import { ComponentEvent } from 'src/app/shared/models/component-event';
import {
  CardConfiguration,
  CardConfigurationFooter,
} from './models/CardConfiguration';

@Component({
  selector: 'app-open-closed',
  templateUrl: './open-closed.component.html',
  styleUrls: ['./open-closed.component.css'],
})
export class OpenClosedComponent {
  cardConfiguration = {
    title: 'Shiba Inu',
    body: {
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      text: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    },
    footer: {
      buttons: [
        { title: '499 - Downvote', color: 'warn', icon: 'expand_more' },
        { title: '522 - Upvote', color: 'primary', icon: 'expand_less' },
      ],
    } as CardConfigurationFooter,
  } as CardConfiguration;

  onEvent(event: ComponentEvent) {
    console.log(event);
  }
}
