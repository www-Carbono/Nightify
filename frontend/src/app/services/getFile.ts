'use client'
import { type info } from '../components/types'

const handleFetch = async (url: string, params: Record<string, any>): Promise<any> => {
  try {
    const response = await fetch(url, {
      cache: 'no-store',
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error during fetch:', error)
    throw error // Re-throw the error to let the calling code handle it
  }
}

const getFile = async (
  links: FormDataEntryValue,
  tempo: FormDataEntryValue,
  pitch: FormDataEntryValue
): Promise<info> => {
  const params = { link: links, tempo, pitch }
  return await handleFetch(`${process.env.URL}/convertSong`, params)
}

export const getYoutubeSearch = async (name: any): Promise<any> => {
  const params = { search: name }
  return await handleFetch(`${process.env.URL}/youtubeSearch`, params)
}

export default getFile
