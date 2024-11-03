import v from '@vinejs/vine'

export const helloValidator = v.compile(
  v.object({
    name: v.string(),
  })
)
