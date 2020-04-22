export interface PhoneNumberObjInterface {
  name: string;
  phoneNumber: string;
}

export interface CategoryInterface {
  title: string;
  icon: React.ReactNode;
  phoneNumbers: PhoneNumberObjInterface[];
}

export interface NavigationInterface {
  navigate: (route: string) => void;
}