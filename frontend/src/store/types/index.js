// Auth Actions
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const CHANGE_PASSWORD_REQUEST = 'CHANGE_PASSWORD_REQUEST';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';

export const FETCH_USER_PROFILE_REQUEST = 'FETCH_USER_PROFILE_REQUEST';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_PROFILE_FAILURE';

export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

export const FORGET_PASSWORD_REQUEST = 'FORGET_PASSWORD_REQUEST';
export const FORGET_PASSWORD_SUCCESS = 'FORGET_PASSWORD_SUCCESS';
export const FORGET_PASSWORD_FAILURE = 'FORGET_PASSWORD_FAILURE';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';

export const PHOTO_UPLOAD_REQUEST = 'PHOTO_UPLOAD_REQUEST';
export const PHOTO_UPLOAD_SUCCESS = 'PHOTO_UPLOAD_SUCCESS';
export const PHOTO_UPLOAD_PROGRESS = 'PHOTO_UPLOAD_PROGRESS';
export const PHOTO_UPLOAD_FAILURE = 'PHOTO_UPLOAD_FAILURE';
export const REMOVE_UPLOADED_PHOTO = 'REMOVE_UPLOADED_PHOTO';

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE';

export const ADD_PROJECT_REQUEST = 'ADD_PROJECT_REQUEST';
export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILURE = 'ADD_PROJECT_FAILURE';

export const GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE';

export const COVER_UPLOAD_REQUEST = 'COVER_UPLOAD_REQUEST';
export const COVER_UPLOAD_SUCCESS = 'COVER_UPLOAD_REQUEST';
export const COVER_UPLOAD_FAILURE = 'COVER_UPLOAD_REQUEST';
export const COVER_UPLOAD_PROGRESS = 'COVER_UPLOAD_PROGRESS';

export const MODEL_UPLOAD_REQUEST = 'MODEL_UPLOAD_REQUEST';
export const MODEL_UPLOAD_SUCCESS = 'MODEL_UPLOAD_REQUEST';
export const MODEL_UPLOAD_FAILURE = 'MODEL_UPLOAD_REQUEST';
export const MODEL_UPLOAD_PROGRESS = 'MODEL_UPLOAD_PROGRESS';

export const GET_PROJECT_DETAIL_REQUEST = "GET_PROJECT_DETAIL_REQUEST";
export const GET_PROJECT_DETAIL_SUCCESS = "GET_PROJECT_DETAIL_SUCCESS";
export const GET_PROJECT_DETAIL_FAILURE = "GET_PROJECT_DETAIL_FAILURE";

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';

export const REVIEW_TASK_REQUEST = 'REVIEW_TASK_REQUEST';
export const REVIEW_TASK_SUCCESS = 'REVIEW_TASK_SUCCESS';
export const REVIEW_TASK_FAILURE = 'REVIEW_TASK_FAILURE';

export const EDIT_TASK_REQUEST = 'EDIT_TASK_REQUEST';
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
export const EDIT_TASK_FAILURE = 'EDIT_TASK_FAILURE';

export const GET_FORGE_TOKEN_REQUEST = 'GET_FORGE_TOKEN_REQUEST';
export const GET_FORGE_TOKEN_SUCCESS = 'GET_FORGE_TOKEN_SUCCESS';
export const GET_FORGE_TOKEN_FAILURE = 'GET_FORGE_TOKEN_FAILURE';

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const GET_SUPERINTENDENTS_REQUEST = 'GET_SUPERINTENDENTS_REQUEST';
export const GET_SUPERINTENDENTS_SUCCESS = 'GET_SUPERINTENDENTS_SUCCESS';
export const GET_SUPERINTENDENTS_FAILURE = 'GET_SUPERINTENDENTS_FAILURE';

export const GET_ENGINEERS_REQUEST = 'GET_ENGINEERS_REQUEST';
export const GET_ENGINEERS_SUCCESS = 'GET_ENGINEERS_SUCCESS';
export const GET_ENGINEERS_FAILURE = 'GET_ENGINEERS_FAILURE';

export const GET_MEMBERS_REQUEST = 'GET_MEMBERS_REQUEST';
export const GET_MEMBERS_SUCCESS = 'GET_MEMBERS_SUCCESS';
export const GET_MEMBERS_FAILURE = 'GET_MEMBERS_FAILURE';

export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_FAILURE = 'GET_TASKS_FAILURE';

export const INVITE_SUPERINTENDENT_REQUEST = 'INVITE_SUPERINTENDENT_REQUEST';
export const INVITE_SUPERINTENDENT_SUCCESS = 'INVITE_SUPERINTENDENT_SUCCESS';
export const INVITE_SUPERINTENDENT_FAILURE = 'INVITE_SUPERINTENDENT_FAILURE';

export const INVITE_ENGINEER_REQUEST = 'INVITE_ENGINEER_REQUEST';
export const INVITE_ENGINEER_SUCCESS = 'INVITE_ENGINEER_SUCCESS';
export const INVITE_ENGINEER_FAILURE = 'INVITE_ENGINEER_FAILURE';

export const INVITE_MEMBER_REQUEST = 'INVITE_MEMBER_REQUEST';
export const INVITE_MEMBER_SUCCESS = 'INVITE_MEMBER_SUCCESS';
export const INVITE_MEMBER_FAILURE = 'INVITE_MEMBER_FAILURE';

export const GET_NOTIFICATION_COUNT_REQUEST = 'GET_NOTIFICATION_COUNT_REQUEST';
export const GET_NOTIFICATION_COUNT_SUCCESS = 'GET_NOTIFICATION_COUNT_SUCCESS';
export const GET_NOTIFICATION_COUNT_FAILURE = 'GET_NOTIFICATION_COUNT_FAILURE';

export const GET_NOTIFICATIONS_REQUEST = 'GET_NOTIFICATIONS_REQUEST';
export const GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS';
export const GET_NOTIFICATIONS_FAILURE = 'GET_NOTIFICATIONS_FAILURE';

export const GET_TASK_ENGINEERS_REQUEST = 'GET_TASK_ENGINEERS_REQUEST';
export const GET_TASK_ENGINEERS_SUCCESS = 'GET_TASK_ENGINEERS_SUCCESS';
export const GET_TASK_ENGINEERS_FAILURE = 'GET_TASK_ENGINEERS_FAILURE';

export const GET_TASK_MEMBERS_REQUEST = 'GET_TASK_MEMBERS_REQUEST';
export const GET_TASK_MEMBERS_SUCCESS = 'GET_TASK_MEMBERS_SUCCESS';
export const GET_TASK_MEMBERS_FAILURE = 'GET_TASK_MEMBERS_FAILURE';

export const GET_TASK_DETAIL_REQUEST = 'GET_TASK_DETAIL_REQUEST';
export const GET_TASK_DETAIL_SUCCESS = 'GET_TASK_DETAIL_SUCCESS';
export const GET_TASK_DETAIL_FAILURE = 'GET_TASK_DETAIL_FAILURE';

export const START_TASK_REQUEST = 'START_TASK_REQUEST';
export const START_TASK_SUCCESS = 'START_TASK_SUCCESS';
export const START_TASK_FAILURE = 'START_TASK_FAILURE';

export const CANCEL_TASK_REQUEST = 'CANCEL_TASK_REQUEST';
export const CANCEL_TASK_SUCCESS = 'CANCEL_TASK_SUCCESS';
export const CANCEL_TASK_FAILURE = 'CANCEL_TASK_FAILURE';

export const CLEAR_NOTIFICATION_REQUEST = 'CLEAR_NOTIFICATION_REQUEST';
export const CLEAR_NOTIFICATION_SUCCESS = 'CLEAR_NOTIFICATION_SUCCESS';
export const CLEAR_NOTIFICATION_FAILURE = 'CLEAR_NOTIFICATION_FAILURE';

export const POST_MESSAGE_REQUEST = 'POST_MESSAGE_REQUEST';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE';

export const GET_TASK_MESSAGES_REQUEST = 'GET_TASK_MESSAGES_REQUEST';
export const GET_TASK_MESSAGES_SUCCESS = 'GET_TASK_MESSAGES_SUCCESS';
export const GET_TASK_MESSAGES_FAILURE = 'GET_TASK_MESSAGES_FAILURE';

export const SUBMIT_FOR_CHECKING_TASK_REQUEST = 'SUBMIT_FOR_CHECKING_TASK_REQUEST';
export const SUBMIT_FOR_CHECKING_TASK_SUCCESS = 'SUBMIT_FOR_CHECKING_TASK_SUCCESS';
export const SUBMIT_FOR_CHECKING_TASK_FAILURE = 'SUBMIT_FOR_CHECKING_TASK_FAILURE';

export const CHECK_TASK_REQUEST = 'CHECK_TASK_REQUEST';
export const CHECK_TASK_SUCCESS = 'CHECK_TASK_SUCCESS';
export const CHECK_TASK_FAILURE = 'CHECK_TASK_FAILURE';

export const REWORK_TASK_REQUEST = 'REWORK_TASK_REQUEST';
export const REWORK_TASK_SUCCESS = 'REWORK_TASK_SUCCESS';
export const REWORK_TASK_FAILURE = 'REWORK_TASK_FAILURE';

export const REMOVE_MEMBER_REQUEST = 'REMOVE_MEMBER_REQUEST';
export const REMOVE_MEMBER_SUCCESS = 'REMOVE_MEMBER_SUCCESS';
export const REMOVE_MEMBER_FAILURE = 'REMOVE_MEMBER_FAILURE';

export const GET_TASK_HISTORY_REQUEST = 'GET_TASK_HISTORY_REQUEST';
export const GET_TASK_HISTORY_SUCCESS = 'GET_TASK_HISTORY_SUCCESS';
export const GET_TASK_HISTORY_FAILURE = 'GET_TASK_HISTORY_FAILURE';

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';