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
  result = 'result';
  template = EXAMPLE_TEMPLATE;

  // allKeysValues: IKeyValues[] = EXAMPLE_KEYSVALUES;
  allKeysValues: IKeyValues[] = [];
  inputData = EXAMPLE_KEYSVALUESV2;

  ignoredNewLineChar = '|';

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  extractData() {
    let keys = this.inputData.singleRowWithAllKeys.split('\t');
    let values: any = [];

    this.inputData.singleRowWithAllValues.split('\n').forEach((row) => {
      values.push(row.split('\t'));
    });

    console.log(keys);
    console.log(values);

    this.pivotArray(values)

    keys.forEach((key) => {
      let idx = keys.indexOf(key);
      this.allKeysValues.push({
        key: key,
        values: values[idx],
        valuesArray: values[idx],
      });
    });
  }
  pivotArray(values: any) {
    throw new Error('Method not implemented.');
  }

  //////////////////////////////
  //////////////////////////////
  //////////////////////////////
  //////////////////////////////
  //////////////////////////////
  //////////////////////////////
  //////////////////////////////
  //////////////////////////////
  //////////////////////////////
  //////////////////////////////
  //////////////////////////////

  generate() {
    // check if same lengyth in stringvalues
    let result = '';
    let item = this.template;

    this.fillValuesArrays(this.allKeysValues);
    let count = this.allKeysValues[0]?.valuesArray?.length ?? 0;
    for (let index = 0; index < count; index++) {
      item = this.template;

      this.allKeysValues.forEach((keyValues) => {
        item = item.replaceAll(keyValues.key, keyValues.valuesArray![index]);
      });

      result += item;
      result += '\n\n';
    }

    this.result = result;
    console.log(result);
  }

  fillValuesArrays(allKeysValues: IKeyValues[]) {
    allKeysValues.forEach((kv) => {
      if (!kv.valuesArray) {
        kv.valuesArray = kv.values.split('\n');
      }
    });
  }

  addKey() {
    this.allKeysValues.push(new KeyValues());
  }
}
