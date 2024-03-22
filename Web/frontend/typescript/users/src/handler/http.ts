import IProduct from "../model/product";

class HTTPClient {
  async get(url: URL): Promise<IProduct[]> {
    try {
      const response = await fetch(url)
      try {
        const data: IProduct[] = await response.json()
        return data
      } catch {
        throw new Error("Error decoding data.")
      }
    } catch {
      throw new Error("Error fetching Data, is json-server running?")
    }
  }
}
export default new HTTPClient()
