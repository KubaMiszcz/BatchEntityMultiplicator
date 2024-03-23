import { Injectable } from '@angular/core';
import packageJson from './../../../package.json';


@Injectable({
  providedIn: 'root',
})
export class AppService {
  version: string = packageJson.version;
  build: string = packageJson.build;

  constructor(
  ) {
  }
}
