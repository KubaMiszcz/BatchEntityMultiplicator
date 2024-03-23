import { KeyValues } from './../../models/KeyValues.model';
import { IKeyValues } from '../../models/KeyValues.model';
import { combineLatestWith } from 'rxjs';
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

  allKeyValues: IKeyValues[] = EXAMPLE_KEYVALUES;

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

    let count = this.allKeyValues[0]?.values.length;
    for (let index = 0; index < count; index++) {
      let item = this.template;
      let keyValues;

      item = item.replaceAll(this.string1key, strings1valuesArray[index]);
      item = item.replaceAll(this.string2key, strings2valuesArray[index]);

      result += item;
      result += '\n\n';
    }



  }
  generate2() {
    // check if same lengyth in stringvalues
    let result = '';
    let item = this.template;

    let count = this.allKeyValues[0]?.values.length;
    for (let index = 0; index < count; index++) {
      let item = this.template;
      let keyValues;

      item = item.replaceAll(this.string1key, strings1valuesArray[index]);
      item = item.replaceAll(this.string2key, strings2valuesArray[index]);

      result += item;
      result += '\n\n';
    }


    this.allKeyValues.forEach((keyValues) => {
      let count = keyValues.values.length;

      for (let index = 0; index < count; index++) {
        item = item.replaceAll(keyValues.key, keyValues.values[index]);

        result += item;
        result += '\n\n';
      }
    });














    let strings1valuesArray = this.strings1values.split('\n');
    let strings2valuesArray = this.strings2values.split('\n');

    let count = strings1valuesArray.length;

    for (let index = 0; index < count; index++) {
      let item = this.template;
      let keyValues;

      item = item.replaceAll(this.string1key, strings1valuesArray[index]);
      item = item.replaceAll(this.string2key, strings2valuesArray[index]);

      result += item;
      result += '\n\n';
    }

    console.log(result);
  }

  addKey() {
    this.allKeyValues.push(new KeyValues());
  }
}

export const EXAMPLE_TEMPLATE =
  '# Entry 1: cn={cn},ou=users,ou=312klp-SZKOL,dc=ldap,dc=local\ndn: cn={cn},ou=users,ou=312klp-SZKOL,dc=ldap,dc=local\ncn: {cn}\ngidnumber: 2001\nhomedirectory: /home/users/{cn}\nobjectclass: inetOrgPerson\nobjectclass: posixAccount\nobjectclass: top\nsn: {cn}\nuid: {cn}\nuidnumber: {uidNo}';

export const EXAMPLE_KEYVALUES = [
  {
    key: '{cn}',
    values: 'Maniek\nGrazyna',
  },
  {
    key: '{uidNo}',
    values: '2222\n3333',
  },
];
