export class Language {

  private id: string;
  private description: string;

  getId(): string {
    return this.id;
  }

  getDescription(): string {
    return this.description;
  }

  setId(id: string) {
    this.id = id;
  }

  setDescription(description: string) {
    this.description = description;
  }
}
