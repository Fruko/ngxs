export interface Dog {
  img: string;
}

export const enum DogApiStatus {
  success = 'success'
}

export interface DogApiResponse {
  message: string;
  status: DogApiStatus;
}
