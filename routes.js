//Global Variables

const HOME = "/";
const JOIN = "/join";
const LOGOUT = "/logout";
const LOGIN = "/login";
const SEARCH = "/search";

//USER

const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//VIDEOS
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = ":/id";
const EDIT_VIDEO = "/:id/edit-video";
const DELETE_VIDEO = "/deleteVideo";

const routes = {
  home: HOME,
  login: LOGIN,
  logout: LOGOUT,
  join: JOIN,
  search: SEARCH,
  users: USER,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: VIDEO_DETAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
};

export default routes;
