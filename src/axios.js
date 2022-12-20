import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-aug-bc35b.cloudfunctions.net/api',
});
// / (http:127.0.0.1:5001/cloneproject-ea23d/us-central1/api).
export default instance;