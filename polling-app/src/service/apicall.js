import axios from "axios";

export default async function apiRequest(url, method, header, data) {
  let response;
  try {
    switch (method) {
      case "get":
        response = await axios.get(url, { header: header });
        return response.data;
      case "post":
        response = await axios.post(url, { headers: header, data: data });
        return response.data;
      default:
        break;
    }
  } catch (error) {
    response = await axios.get(url, { header: header, error: error });
  }
}
