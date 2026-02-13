
export enum AppState {
  HOME = 'HOME',
  LOADING = 'LOADING',
  VIDEO = 'VIDEO',
  SHARE = 'SHARE'
}

export interface FormData {
  partnerName: string;
  age: string;
  dob: string;
  favouriteColor: string;
  luckyNumber: string;
}
