export interface IKeyValuesDEPR {
  key: string;
  values: string;
  valuesArray?: string[];
}

export class KeyValues implements IKeyValuesDEPR {
  key = '';
  values = '';
}







export interface IRawInputData {
  singleRowWithAllKeys: string;
  singleRowWithAllValues: string;
}