export interface info {
  nombre: string
  fileName: string
}
export interface props {
  downloadInfo: info | null
  loaded: boolean
  sendSong: (e: React.FormEvent<HTMLFormElement>) => void
}
