export function useImagUrl(imgUrl: string) {
  const baseUrl = import.meta.env.VITE_SERVER_BASEURL
  if (imgUrl) {
    if (imgUrl.indexOf('http') !== -1) {
      return imgUrl
    } else {
      return baseUrl + imgUrl || ''
    }
  }
}
