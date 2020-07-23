import { create } from 'axios'

const instance = create({ baseURL: 'https://covid19-backend-br-staging.herokuapp.com/' })

export const saveContact = async ({ name, email }) =>
  instance.post('/api/v1/subscribe/', { name, email })

// Wake up backend dyno
export const poke = async () => {
  try {
    instance.get()
  } finally {
    console.info('Backend dyno is awake!')
  }
}
