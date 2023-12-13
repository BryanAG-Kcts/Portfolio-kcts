export const fetchDataJson = async (url: string) => {
  try {
    const data = await fetch(url)
    const dataJson = await data.json()
    return dataJson
  } catch (error) {
    return {}
  }
}
