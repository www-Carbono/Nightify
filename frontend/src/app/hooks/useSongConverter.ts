import getFile, { getYoutubeSearch } from '../services/getFile'

import { useState } from 'react'

import { type info } from '../components/types'

const useSongConverter = (): {
  handleClick: (e: React.MouseEvent) => void
  sendSong: (e: React.FormEvent<HTMLFormElement>) => void
  uploadType: boolean
  downloadInfo: info | null
  loaded: boolean
  search: any
  sendSongYoutube: (link: any, tempo: any, pitch: any) => void
  youtubeInfo?: any
  youtubeSearchLoaded: boolean
  error: string

} => {
  const [uploadType, setUploadType] = useState(true)
  const [downloadInfo, setDownloadInfo] = useState<info | null >(null)
  const [loaded, setLoaded] = useState(true)
  const [search, setSearch] = useState([])
  const [youtubeSearchLoaded, setYoutubeSearchLoaded] = useState(true)
  const [error, setError] = useState('')

  const handleClick = (e: React.MouseEvent): void => {
    setError('')
    if (e.currentTarget.innerHTML === 'Copiar Link Youtube') {
      setUploadType(true)
      setDownloadInfo(null)
      setLoaded(true)
      return
    }
    setUploadType(false)
    setDownloadInfo(null)
    setLoaded(true)
  }

  const sendSong = (e: React.FormEvent<HTMLFormElement>): void => {
    setError('')
    setLoaded(false)
    setDownloadInfo(null)
    e.preventDefault()

    const fields = new window.FormData(e.currentTarget)
    const query = fields.get('songLink')
    const tempo = fields.get('tempo')
    const pitch = fields.get('pitch')

    if (query !== null && tempo !== null && pitch !== null) {
      getFile(query, Number(tempo), Number(pitch))
        .then(e => { setDownloadInfo(e) })
        .catch(error => { setError('Ha Ocurrido un Error al intentar obtener la canción, vuelve a intentarlo'); console.log(error) })
        .finally(() => { setLoaded(true) })
    }
  }

  const sendSongYoutube = (link: any, tempo: any, pitch: any): void => {
    setError('')
    setLoaded(false)
    setDownloadInfo(null)

    const url = link

    if (url !== null && tempo !== null && pitch !== null) {
      getFile(url, tempo, pitch)
        .then(e => { setDownloadInfo(e) })
        .catch(error => { setError('Ha Ocurrido un Error al intentar obtener la canción, vuelve a intentarlo'); console.log(error) })
        .finally(() => { setLoaded(true) })
    }
  }

  const youtubeInfo = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    setError('')
    setYoutubeSearchLoaded(false)

    e.preventDefault()
    const fields = new window.FormData(e.currentTarget)
    const query = fields.get('songLink')
    getYoutubeSearch(query)
      .then(e => {
        setSearch(e)
      })
      .catch(error => { setError('Ha Ocurrido un Error al intentar obtener la canción, vuelve a intentarlo'); console.log(error) })
      .finally(() => {
        setYoutubeSearchLoaded(true)
      })
  }
  return { handleClick, sendSong, uploadType, downloadInfo, loaded, search, sendSongYoutube, youtubeInfo, youtubeSearchLoaded, error }
}

export default useSongConverter
