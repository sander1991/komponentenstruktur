import { Component, EventEmitter, Output } from '@angular/core';
import { ComponentEvent } from 'src/app/shared/models/component-event';

@Component({
  selector: 'app-smart-dumb-toolbar',
  templateUrl: './smart-dumb-toolbar.component.html',
  styleUrls: ['./smart-dumb-toolbar.component.css']
})
export class SmartDumbToolbarComponent{
  @Output() event = new EventEmitter<ComponentEvent>(); 
}