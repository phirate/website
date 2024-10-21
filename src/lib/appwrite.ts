import { Client, Account, Databases } from 'appwrite'

export const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('67134ca10003b93e4234') // Replace with your project ID

export const account = new Account(client)
export const databases = new Databases(client)
export { ID } from 'appwrite'
