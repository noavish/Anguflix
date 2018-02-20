export class Movie {
  '_id': string;
  'imgUrl': string;
  'title': string;
  'year': number;
  'price': number;
  'shortDescription': string;
  'fullDescription': string;
  'director': string;
  'reviews': [{
    'name': string,
    'rating': {
      type: number,
      min: 0,
      max: 5
    },
    'text': string;
  }];
}
