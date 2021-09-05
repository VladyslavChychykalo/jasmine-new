export interface SomeI {}

export interface TeamI {
  id: string;
  src: string;
  name: string;
  experience: number;
  profession: string;
}

export interface SelectI {
  id: string;
  selectName: string;
  team?: TeamI[];
}
