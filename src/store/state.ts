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
  options: {
    value: string;
    label: string;
  }[];
}

export interface state {
  APIAdress: string,
  active: object,
  menuOpen: boolean,
  consultants: Array<Consultant>,
  keyword: string,
  filters: Array<Filter>,
}


export const state: state = {
  APIAdress: "https://available-consultantsapi.azurewebsites.net/api/AvailableConsultants?",
  active: {},
  menuOpen: false,
  consultants: [],
  keyword: "",
  filters: [
    {
      name: 'Location',
      key: 'location',
      btnType: 'clickable',
      options: [
        { value: 'new-york', label: 'New York' },
        { value: 'san-francisco', label: 'San Francisco' },
        { value: 'london', label: 'London' },
        { value: 'paris', label: 'Paris' },
      ],
    },
    {
      name: 'Business Area',
      key: 'businessArea',
      btnType: 'clickable',
      options: [
        { value: 'technology', label: 'Technology' },
        { value: 'finance', label: 'Finance' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'sales', label: 'Sales' },
      ],
    },
    {
      name: 'Working Titles',
      key: 'workingTitles',
      btnType: 'clickable',
      options: [
        { value: 'consultant', label: 'Consultant' },
        { value: 'senior-consultant', label: 'Senior Consultant' },
        { value: 'manager', label: 'Manager' },
        { value: 'senior-manager', label: 'Senior Manager' },
      ],
    },
    {
      name: 'Can Travel',
      key: 'canTravel',
      btnType: 'checkbox',
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ],
    },
    {
      name: 'Available Type',
      key: 'availableType',
      btnType: 'clickable',
      options: [
        { value: 'full-time', label: 'Full-time' },
        { value: 'contract', label: 'Contract' },
        { value: 'freelance', label: 'Freelance' },
      ],
    },
  ]
}