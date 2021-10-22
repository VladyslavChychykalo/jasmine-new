export interface SomeI {}

export interface TeamI {
  id: string;
  src: string;
  name: string;
  experience: number;
  profession: string;
  alt: string;
}

export interface SelectTeamI {
  id: string;
  selectName: string;
  team?: TeamI[];
}

export interface SubCategorieI {
  id: string;
  subCategorie: string;
  services?:
    | {
        id: string;
        serviceName: string;
        servicePrice: string;
      }[]
    | string
    | any;
}

export interface SelectPriceI {
  id: string;
  selectName: string;
  subCategories: SubCategorieI[];
}
