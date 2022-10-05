export interface Widget {
  load: (value:string) => void;
  init: () =>void;
  value: string
}