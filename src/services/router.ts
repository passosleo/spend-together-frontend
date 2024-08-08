const HOST = process.env.NEXT_PUBLIC_API_URL as string;

const routes = {
  signIn: {
    method: "POST",
    uri: "/api/v1/sign-in",
  },
  sendRecoverPassword: {
    method: "POST",
    uri: "/api/v1/sign-in/recover-password/send",
  },
  signUp: {
    method: "POST",
    uri: "/api/v1/sign-up",
  },
  sendVerifyEmail: {
    method: "POST",
    uri: "/api/v1/sign-up/verify-email/send",
  },
  getPrivacyPolicy: {
    method: "GET",
    uri: "/api/v1/privacy-policy",
  },
  getUserInfo: {
    method: "GET",
    uri: "/api/v1/user/info",
    listenHeaders: ["Authorization"],
  },
  updateUserPreferences: {
    method: "PUT",
    uri: "/api/v1/user/preferences",
    listenHeaders: ["Authorization"],
  },
  deleteUserAccount: {
    method: "DELETE",
    uri: "/api/v1/user",
    listenHeaders: ["Authorization"],
  },
  searchUsers: {
    method: "GET",
    uri: "/api/v1/user/search",
    listenHeaders: ["Authorization"],
  },
  listSpendCategories: {
    method: "GET",
    uri: "/api/v1/spend-categories",
    listenHeaders: ["Authorization"],
  },
  createSpendControl: {
    method: "POST",
    uri: "/api/v1/spend-control",
    listenHeaders: ["Authorization"],
  },
  deleteSpendControl: {
    method: "DELETE",
    uri: "/api/v1/spend-control/:spendControlId",
    listenHeaders: ["Authorization"],
  },
  updateSpendControl: {
    method: "PUT",
    uri: "/api/v1/spend-control/:spendControlId",
    listenHeaders: ["Authorization"],
  },
  getSpendControlById: {
    method: "GET",
    uri: "/api/v1/spend-control/:spendControlId",
    listenHeaders: ["Authorization"],
  },
  listSpendControls: {
    method: "GET",
    uri: "/api/v1/spend-control/list",
    listenHeaders: ["Authorization"],
  },
  listSpendControlsSummary: {
    method: "GET",
    uri: "/api/v1/spend-control/summary",
    listenHeaders: ["Authorization"],
  },
  createSpend: {
    method: "POST",
    uri: "/api/v1/spend",
    listenHeaders: ["Authorization"],
  },
  deleteSpend: {
    method: "DELETE",
    uri: "/api/v1/spend/:spendId",
    listenHeaders: ["Authorization"],
  },
  getSpendById: {
    method: "GET",
    uri: "/api/v1/spend/:spendId",
    listenHeaders: ["Authorization"],
  },
  listSpendsBySpendControlId: {
    method: "GET",
    uri: "/api/v1/spend/spend-control/:spendControlId",
    listenHeaders: ["Authorization"],
  },
  listSpendControlInvites: {
    method: "GET",
    uri: "/api/v1/spend-control-invite",
    listenHeaders: ["Authorization"],
  },
  replySpendControlInvite: {
    method: "POST",
    uri: "/api/v1/spend-control-invite/:inviteId/reply",
    listenHeaders: ["Authorization"],
  },
  listNotifications: {
    method: "GET",
    uri: "/api/v1/notification",
    listenHeaders: ["Authorization"],
  },
  getUnreadNotifications: {
    method: "GET",
    uri: "/api/v1/notification/unread",
    listenHeaders: ["Authorization"],
  },
  deleteNotification: {
    method: "DELETE",
    uri: "/api/v1/notification/:notificationId",
    listenHeaders: ["Authorization"],
  },
} as const;

export { HOST, routes };
