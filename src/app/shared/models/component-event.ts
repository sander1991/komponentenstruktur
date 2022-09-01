export interface ComponentEvent {
  type: EventType;
  data?: any;
}

export type EventType =
  | 'EVENT_SHOW'
  | 'EVENT_CANCEL'
  | 'EVENT_EDIT'
  | 'EVENT_DELETE'
  | 'EVENT_DEVICE'
  | 'EVENT_FILTER'
  | 'EVENT_SAVE'
  | 'EVENT_ADD';
