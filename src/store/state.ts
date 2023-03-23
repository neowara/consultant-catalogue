export interface state {
  APIAdress: string,
  active: object,
  menuOpen: boolean,
  consultants: Array<object>,
}

export const state: state = {
  APIAdress: "https://available-consultantsapi.azurewebsites.net/api/AvailableConsultants?",
  active: {},
  menuOpen: false,
  consultants: [],
}