import axios from 'axios';
import toast from 'react-hot-toast';
import { baseURL } from './URLS';

const postRequest = (url, data, setLoading) => {
  toast.promise(
    axios({
      method: 'POST',
      data: data,
      url: baseURL + url,
      withCredentials: true,
    })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          if (error.response.data.error) {
            return Promise.reject(error.response.data);
          } else {
            return Promise.reject({ error: 'An Internal Error has occurred!' });
          }
        } else {
          console.log('hi');
          return Promise.reject({ error: 'Error Connecting to Server..' });
        }
      })
      .then((response) => {
        setLoading(false);
        return response.data;
      }),
    {
      loading: 'Connecting...',
      success: (data) => data.success,
      error: (err) => err.error,
    }
  );
};

const verify = async () => {
  return await axios({
    method: 'GET',
    url: baseURL + '/user/',
    withCredentials: true,
  })
    .catch((error) => {
      if (error.response) {
        return { verified: false };
      } else {
        console.log();
        return { verified: false };
      }
    })
    .then((response) => {
      return response.data;
    });
};
export { postRequest, verify };
