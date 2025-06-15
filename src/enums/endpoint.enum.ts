const BASE_URL = process.env.NEXT_PUBLIC_URL_BE;
export const ENDPOINT = {
  GET_HOME: `${BASE_URL}/api/trang-chu`,
  GET_DESTINATIONS_HOME: `${BASE_URL}/api/destinations`,
  GET_BLOG: `${BASE_URL}/api/blogs`,
  GET_TOURS: `${BASE_URL}/api/tours`,
  GET_FOOTER: `${BASE_URL}/api/footer`,
  GET_LIST_TOUR_PAGE: `${BASE_URL}/api/tour-list`,
  GET_DESTINATION_PAGE: `${BASE_URL}/api/destination-page`,
  GET_TOURS_BY_DESTINATION: `${BASE_URL}/api/destinations/tours`,
  GET_TIN_TUC_PAGE: `${BASE_URL}/api/tin-tuc-page`,
  GET_ABOUT: `${BASE_URL}/api/about`,
  GET_CONTACT: `${BASE_URL}/api/contact`,
  POST_BOOKING: `${BASE_URL}/api/bookings`,
};
