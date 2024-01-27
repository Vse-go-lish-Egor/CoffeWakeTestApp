export type RootStackParamList = {
  Greeting: undefined;
  PhotoList: undefined;
  ViewFullPhoto: {photoUrl: string};
};
export type Photo = {
  id: string;
  urls: {
    raw: string;
    full: string;
    small: string;
  };
  likes: number;
  user: {
    name: string;
  };
};
