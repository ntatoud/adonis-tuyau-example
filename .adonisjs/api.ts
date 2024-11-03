import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

export interface ApiDefinition {}
const routes = [
  {
    params: [],
    name: 'hello',
    path: '/',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
] as const
export const api = {
  routes,
  definition: {} as ApiDefinition,
}
