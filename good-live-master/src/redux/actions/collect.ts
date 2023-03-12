import { COLLECT, UNCOLLECT } from '../constants'

export function setCollect(collect) {
  return {
    type: COLLECT,
    collect,
  }
}

export function removeCollect(id) {
  return {
    type: UNCOLLECT,
    id,
  }
}
