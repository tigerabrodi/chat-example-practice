export const ROUTES = {
  home: "/",
  roomDetail: "/rooms/:id",
  rooms: "/rooms/",
  login: "/login",
  register: "/register",
};

export const FORM_INTENT_KEY = "intent";

export const FORM_INTENT_VALUES = {
  register: "register",
  login: "login",
} as const;

export const COOKIE_KEYS = {
  setCookie: "Set-Cookie",
  getCookie: "Cookie",
} as const;
