export interface IKeyValues {
  key: string;
  values: string;
  valuesArray?: string[];
}

export class KeyValues implements IKeyValues {
  key = '';
  values = '';
}