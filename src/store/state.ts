export interface state {
  APIAdress: string,
  active: number,
  menuOpen: boolean,
  consultants: Array<object>
}

export const state: state = {
  APIAdress: "http://available-consultantsapi.azurewebsites.net/AvailableConsultants",
  active: 0,
  menuOpen: false,
  consultants: []
}