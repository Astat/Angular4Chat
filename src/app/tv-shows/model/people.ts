import {Image} from './image';

export class People {
  score: number;
  person: Person;
  character: Person;
}

export class Person {
  id: number;
  image: Image;
  name: string;
}
