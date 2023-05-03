
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
    },
    {
      name: 'Business Area',
      key: 'businessArea',
      btnType: 'clickable',
    },
    {
      name: 'Working Titles',
      key: 'workingTitles',
      btnType: 'clickable',
    },
    {
      name: 'Can Travel',
      key: 'canTravel',
      btnType: 'checkbox',
    },
    {
      name: 'Available Type',
      key: 'availableType',
      btnType: 'clickable',
    },
  ]
}