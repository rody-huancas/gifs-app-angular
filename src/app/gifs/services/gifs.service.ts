import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' }) // cuado es root, estará disponible en todos los módulos
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    this._tagsHistory.unshift(tag);
  }
}
