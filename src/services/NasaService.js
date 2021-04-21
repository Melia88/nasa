// import Nasa from '../models/nasa';
import { AppState } from '../AppState';
import { nasaApi } from '../AxiosService';

class NasaService {
  async getNasa() {
    // console.log('getting Apod from nasa service');
    const res = await nasaApi.get('')
    console.log(res.data);
    AppState.results = res.data
  }
}

export const nasaService = new NasaService();
