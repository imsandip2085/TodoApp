import axios from "axios";

export default async function apiRequest(url, method, header) {
  try {
    let response;
    switch (method) {
      case "get":
        response = await axios.get(url, { header: header });
        console.log(response.data.token);
        return response.data;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }
}
