import { IRawInputData } from 'src/app/models/KeyValues.model';

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

export const EXAMPLE_KEYSVALUESV2: IRawInputData = {
  singleRowWithAllKeys: '{cn1}\t{uidNo1}',
  singleRowWithAllValues:
    '3p1s-SWYB-kobra22\tTeamMember\n2p3s-RTO-Malej \tTeamMember\n3p2s--Pawulon\tTeamMember\n1p2s-DCA-MANIEK\tTeamLeader\n',
};
