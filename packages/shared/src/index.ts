export interface City {
  id: string;
  name: string;
}

export interface CityWithCount extends City {
  _count: {
    facts: number;
  };
}

export interface Fact {
  id: string;
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CityWithFacts {
  city: City;
  facts: Fact[];
}

export interface CitiesResponse {
  cities: CityWithCount[];
}

export interface CityFactsResponse {
  city: City;
  facts: Fact[];
}
