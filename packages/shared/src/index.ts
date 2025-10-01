export interface City {
  id: string;
  name: string;
  country: string;
}

export interface Fact {
  id: string;
  cityId: string;
  content: string;
  category: string;
}

export interface CityWithFacts extends City {
  facts: Fact[];
}
