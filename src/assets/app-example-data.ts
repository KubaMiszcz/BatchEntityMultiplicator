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

export const EXAMPLE_KEYSVALUESV2 = [
  {
    rawKeys: '{cn}\t{uidNo}',
    rawValues: 'Maniek\t2222\nGrazyna\t3333',
  },
];
