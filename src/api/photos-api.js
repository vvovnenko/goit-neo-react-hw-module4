import axios from "axios";

const ACCESS_KEY = "bErWcPkgfugqdJ-L_Bbq1qAb5TD-8rAXjrY0FXNzHWM";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
  "Accept-Version": "v1",
};

const searchPhotos = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      per_page: 8,
      orientation: "landscape",
      query,
      page,
    },
  });

  return response.data;
};

export default searchPhotos;
