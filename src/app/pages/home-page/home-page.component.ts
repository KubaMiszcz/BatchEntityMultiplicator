import { IKeyValues, KeyValues } from './../../models/KeyValues.model';
import { AppService } from '../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  result = 'result';
  template = EXAMPLE_TEMPLATE;

  allKeysValues: IKeyValues[] = EXAMPLE_KEYSVALUES;

  string1key = '{cn}';
  strings1values = 'Maniek\nGrazyna';

  string2key = '{uid}';
  strings2values = '2001\n2002';

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

  generate2() {
    // check if same lengyth in stringvalues
    let result = '';
    let item = this.template;

    let count = this.allKeysValues[0]?.values.length;
    count = 1;
    for (let index = 0; index < count; index++) {
      let item = this.template;

      this.allKeysValues.forEach((keyValues) => {
        item = item.replaceAll(keyValues.key, keyValues.values[index]);
      });

      result += item;
      result += '\n\n';
    }

    console.log(result);
  }

  addKey() {
    this.allKeysValues.push(new KeyValues());
  }
}

export const EXAMPLE_TEMPLATE =
  '# Entry 1: cn={cn},ou=users,ou=312klp-SZKOL,dc=ldap,dc=local\ndn: cn={cn},ou=users,ou=312klp-SZKOL,dc=ldap,dc=local\ncn: {cn}\ngidnumber: 2001\nhomedirectory: /home/users/{cn}\nobjectclass: inetOrgPerson\nobjectclass: posixAccount\nobjectclass: top\nsn: {cn}\nuid: {cn}\nuidnumber: {uidNo}';

export const EXAMPLE_KEYSVALUES = [
  {
    key: '{cn}',
    values: 'Maniek\nGrazyna',
  },
  {
    key: '{uidNo}',
    values: '2222\n3333',
  },
];
