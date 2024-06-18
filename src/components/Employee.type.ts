export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
export const dummyEmployee: Employee[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: 'Yasowant',
    lastName: 'Nayak',
    email: 'yasowant1998@gmail.com',
  },
];

export enum PageEnum {
  list,
  add,
}
