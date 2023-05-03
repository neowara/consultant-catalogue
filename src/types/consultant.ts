export interface IConsultant {
  consultantDetails: IConsultantDetails;
}

export interface IConsultantDetails {
  id: string;
  name: string;
  businessArea: string;
  workTitle: string;
  workDesc: string;
  location: string;
  availableFrom: string;
  availableTill: string;
  availableType: string;
  experienceInYears: number;
  availability: number;
  canTravel: boolean;
  canTravelComment: string;
  workingTitles: Array<string>;
  workTitleShortDesc: string;
  consultantBio: {
    cvLink: string;
    ingress: string;
    profilePic: string;
  };
}

export interface Consultant {
  consultantDetails: {
    id: string;
    name: string;
    businessArea: string;
    workTitle: string;
    workDesc: string;
    location: string;
    availableFrom: string;
    availableTill: string;
    availableType: string;
    experienceInYears: number;
    availability: number;
    canTravel: boolean;
    canTravelComment: string;
    workingTitles: Array<string>;
    workTitleShortDesc: string;
    consultantBio: {
      cvLink: string;
      ingress: string;
      profilePic: string;
    };
  };
}

export interface Filter {
  name: string;
  key: string;
  btnType: string;
}

export interface state {
  APIAdress: string,
  active: object,
  menuOpen: boolean,
  consultants: Array<Consultant>,
  keyword: string | Array<string>,
  filters: Array<Filter>,
}
