import { UPDATE_SEARCH } from '../constants'

export function updaetSearch(search) {
  return {
    type: UPDATE_SEARCH,
    search,
  }
}
