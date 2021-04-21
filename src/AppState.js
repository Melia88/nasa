import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import Nasa from './models/Nasa'

export const AppState = reactive({
  /** @type {Nasa[]} */
  results: []
})

