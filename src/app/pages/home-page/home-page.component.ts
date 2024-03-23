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

  keyValues: IKeyValues[] = EXAMPLE_KEYVALUES;

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
    let strings1valuesArray = this.strings1values.split('\n');
    let strings2valuesArray = this.strings2values.split('\n');

    let count = strings1valuesArray.length;

    for (let index = 0; index < count; index++) {
      let item = this.template;
      item = item.replaceAll(this.string1key, strings1valuesArray[index]);
      item = item.replaceAll(this.string2key, strings2valuesArray[index]);

      result += item;
      result += '\n\n';
    }

    console.log(result);
  }

  addKey() {
    throw new Error('Method not implemented.');
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