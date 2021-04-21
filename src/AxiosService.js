import axios from 'axios'

export const nasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=g5Sy3sO226Fw9tyQpga9igwHrY1ecmk2Z5T9rwBA',
  timeout: 3000
})