import { writable } from 'svelte/store'
import { ID, type Models } from 'appwrite'
import { goto } from '$app/navigation'
import { account } from '$lib/appwrite'

const isBrowser = typeof window !== 'undefined'

const createUser = () => {
  const store = writable<Models.User<Models.Preferences> | null>(null)

  async function init() {
    if (!isBrowser) return
    try {
      store.set(await account.get())
    } catch (e) {
      store.set(null)
    }
  }

  init()

  async function register(email: FormDataEntryValue | null, password: FormDataEntryValue | null, name: FormDataEntryValue | null) {
    if (!isBrowser) return
    await account.create(ID.custom(name as string), email as string, password as string, name as string)
    await login(email, password)
  }

  async function login(email: FormDataEntryValue | null, password: FormDataEntryValue | null) {
    if (!isBrowser) return
    await account.createEmailPasswordSession(email as string, password as string)
    await init()
    goto('/')
  }

  async function logout() {
    await account.deleteSession('current')
    store.set(null)
  }

  return {
    subscribe: store.subscribe,
    register,
    login,
    logout,
    init
  }
}

export const user = createUser()
