export interface IKeyValues {
  key: string;
  values: string;
  valuesArray?: string[];
}

export class KeyValues implements IKeyValues {
  key = '';
  values = '';
}







export interface IRawKeyValues {
  keys: string;
  values: string;
}