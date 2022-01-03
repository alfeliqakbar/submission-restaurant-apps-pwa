import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
  // IMAGE_SMALL: (pictureId) => `${CONFIG.BASE_URL}images/small/${pictureId}`,
  // IMAGE_MEDIUM: (pictureId) => `${CONFIG.BASE_URL}images/medium/${pictureId}`,
  // IMAGE_LARGE: (pictureId) => `${CONFIG.BASE_URL}images/large/${pictureId}`,
  // FAVORITE: ``,
  SEARCH: (search) => `${CONFIG.BASE_URL}search?q=${search}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
