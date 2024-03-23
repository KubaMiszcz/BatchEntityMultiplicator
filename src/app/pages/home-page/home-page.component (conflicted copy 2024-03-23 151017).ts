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

  pivotArray(arrayToPivot: any[]) {
    console.log(arrayToPivot);
    
  }

  extractData() {
    let keys = this.inputData.singleRowWithAllKeys.split('\t');
    let rowsWithTabbedValues = this.inputData.singleRowWithAllValues.split('\n');
    let arrayToPivot:any = [];

    rowsWithTabbedValues.forEach((row) => {
      arrayToPivot.push(row.split('\t'));
    });

    this.pivotArray(arrayToPivot);



    keys.forEach((k) => {
      this.allKeysValues.push({
        key: k,
        values: '',
      });
    });


    rowsWithTabbedValues.forEach(valuesRow=>{
      let values = valuesRow.split('\t');

    })





    keys.forEach((k) => {
      this.allKeysValues.push({
        key: keys[0],
        values: rowsWithTabbedValues[0],
      });
    });
  }

}
