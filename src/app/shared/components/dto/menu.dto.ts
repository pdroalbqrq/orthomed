export class MenuDto {
  text: string;
  route: string;

  constructor({ text, route }: MenuDto) {
    this.text = text;
    this.route = route;
  }
}
