import { IRawInputData } from 'src/app/models/KeyValues.model';

export const EXAMPLE_TEMPLATE =
  '# Entry 1: cn={cn},ou=users,ou=UNIT4,dc=ldap,dc=local\ndn: cn={cn},ou=users,ou=UNIT4,dc=ldap,dc=local\ncn: {cn}\ngidnumber: 2001\nhomedirectory: /home/users/{cn}\nobjectclass: inetOrgPerson\nobjectclass: posixAccount\nobjectclass: top\nsn: {cn}\nuid: {cn}\nuidnumber: {uidNo}';

export const EXAMPLE_KEYSVALUES: IRawInputData = {
  singleRowWithAllKeys: '{cn};{uidNo}',
  singleRowWithAllValues:
    '3p1s-SWYB-kobra\tTeamMember\n2p3s-RTO-user2\tTeamMember\n3p2s--user33\tTeamMember\n1p2s-DCA-user44\tTeamLeader\n',
};
