import { IKeyValues, KeyValues } from './../../models/KeyValues.model';
import { AppService } from '../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { EXAMPLE_KEYSVALUES, EXAMPLE_KEYSVALUESV2, EXAMPLE_TEMPLATE } from 'src/assets/app-example-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  result = 'result';
  template = EXAMPLE_TEMPLATE;

  allKeysValues: IKeyValues[] = EXAMPLE_KEYSVALUES;
  inputData = EXAMPLE_KEYSVALUESV2;

  string1key = '{cn}';
  strings1values = 'Maniek\nGrazyna';

  string2key = '{uid}';
  strings2values = '2001\n2002';

  ignoredNewLineChar = '|';

  constructor(private appService: AppService) {}

  ngOnInit(): void {  }

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

  extractData() {
    throw new Error('Method not implemented.');
  }
}


