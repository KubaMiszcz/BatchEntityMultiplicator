import { IKeyValues, KeyValues } from './../../models/KeyValues.model';
import { AppService } from '../../services/app.service';
import { Component, OnInit } from '@angular/core';
import {
  EXAMPLE_INPUT_DATA,
  EXAMPLE_TEMPLATE,
} from 'src/assets/app-example-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  inputData = EXAMPLE_INPUT_DATA;
  template = EXAMPLE_TEMPLATE;
  inputDataDelimiter = '';
  inputDataDelimiterText = '\\t';
  outputResults = 'output';

  keys: string[] = [];
  valuesRows: string[][] = [];
  keysWithValues: KeyValues[] = [];

  ignoredNewLineChar = '|';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.validateDelimiter();
    this.extractData(this.inputDataDelimiter);
    this.fillTextAreasContent(this.keys);
    this.generateOutput();
  }
  
  extractData(delimiter: string = '\t') {
    this.validateDelimiter();
    console.log(this.inputData);

    let inputRows: string[][] = [];
    this.inputData
      .trim()
      .split('\n')
      .forEach((row) => {
        console.log(row.split(delimiter));
        inputRows.push(row.split(delimiter));
      });
    console.log(inputRows);

    this.keys = inputRows[0];
    this.valuesRows = inputRows.slice(1);

    this.fillTextAreasContent(this.keys);
  }

  fillTextAreasContent(keys: string[]) {
    this.keysWithValues = [];

    keys.forEach((k) => {
      let idx = keys.indexOf(k);
      let keyValue: IKeyValues = {
        key: k,
        values: '',
      };

      this.valuesRows.forEach((v) => {
        keyValue.values += v[idx] + '\n';
      });

      this.keysWithValues.push(keyValue);
    });
  }

  generateOutput() {
    // check if same length in stringvalues
    let result = '';

    this.valuesRows.forEach((valueRow) => {
      let entryToAppend = this.template;
      valueRow.forEach((value) => {
        let idx = valueRow.indexOf(value);
        let key = this.keys[idx];
        entryToAppend = entryToAppend.replaceAll(key, value);
      });

      result += entryToAppend + '\n';
    });

    this.outputResults = result;
    console.log(result);
  }

  validateDelimiter() {
    this.inputDataDelimiter =
      this.inputDataDelimiterText === '\\t' ? '\t' : this.inputDataDelimiter;
    this.inputDataDelimiter =
      this.inputDataDelimiterText === '\\n' ? '\n' : this.inputDataDelimiter;
  }
}
