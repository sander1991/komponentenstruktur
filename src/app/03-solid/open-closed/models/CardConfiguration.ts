export interface CardConfiguration {
  title: string;
  body: CardConfigurationBody;
  footer: CardConfigurationFooter;
}

export interface CardConfigurationBody {
  imageUrl: string;
  text: string;
}

export interface CardConfigurationFooter {
  buttons: CardConfigurationButton[];
}

export interface CardConfigurationButton {
  title: string;
  icon: string;
  color: string;
}
