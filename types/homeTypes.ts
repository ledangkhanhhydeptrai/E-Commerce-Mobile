export interface Home {
  id: string;
  name: string;
  price: number;
  stockStatus: string;
  image: string;
}
export interface HomeResponse {
  status: number;
  message: string;
  data: Home[];
}
