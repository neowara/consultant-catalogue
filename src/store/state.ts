
export const state = {
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
        { value: true, label: 'Yes' },
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