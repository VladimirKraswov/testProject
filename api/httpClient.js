import axios from 'axios';

export async function httpClient(method, url, data) {
  const baseURL = 'https://api.github.com/events';

  try {
    const res = await axios.request({
      url: baseURL,
      method,
      data,
      responseType: 'json',
    });

    return res.data;
  } catch (error) {
    if (error instanceof Error && error?.message !== undefined) {
      console.log('Error in api call', url, error);
    }
  }
}
