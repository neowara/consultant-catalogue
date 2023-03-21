export interface state {
  APIAdress: string,
  active: number,
  menuOpen: boolean,
  consultants: Array<object>
}

export const state: state = {
  APIAdress: "https://available-consultantsapi.azurewebsites.net/api/AvailableConsultants?",
  active: 0,
  menuOpen: false,
  consultants: []
}