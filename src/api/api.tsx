import axios from "axios"

export const api = axios.create({
  baseURL: 'https://newdemostock.gopos.pl/',
  headers: {
    "Authorization": 'fd9ba9e1-0788-4e8f-ac46-a43df43e205e'
  }
})