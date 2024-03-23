import { IKeyValues, KeyValues } from './../../models/KeyValues.model';
import { AppService } from '../../services/app.service';
import { Component, OnInit } from '@angular/core';
import {
  EXAMPLE_KEYSVALUES,
  EXAMPLE_KEYSVALUESV2,
  EXAMPLE_TEMPLATE,
} from 'src/assets/app-example-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  inputData = EXAMPLE_KEYSVALUESV2;
  generatedOutput = 'result';
  template = EXAMPLE_TEMPLATE;
  keys: string[] = [];
  valuesRows: string[][] = [];
  keysWithValues: KeyValues[] = [];

  ignoredNewLineChar = '|';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.extractData();
    this.fillTextAreasContent(this.keys);
  }

  extractData() {
    this.keys = this.inputData.singleRowWithAllKeys.trim().split('\t');
    this.valuesRows = [];

    // this.appService.pivotArray(values);

    this.inputData.singleRowWithAllValues
      .trim()
      .split('\n')
      .forEach((row) => {
        this.valuesRows.push(row.split('\t'));
      });
  }

  getValuesForKey(key: string) {
    console.log('keys', key);
    return 'ee';
  }

  fillTextAreasContent(keys: string[]) {
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
    // check if same lengyth in stringvalues
    let result = '';
    
    this.valuesRows.forEach((valueRow) => {
      let entryToAppend = this.template;
      valueRow.forEach((value) => {
        let idx = valueRow.indexOf(value);
        let key = this.keys[idx];
        entryToAppend = entryToAppend.replaceAll(key, value);
      });

      result += entryToAppend + '\n\n';
    });

    this.generatedOutput = result;
    console.log(result);
  }
}
