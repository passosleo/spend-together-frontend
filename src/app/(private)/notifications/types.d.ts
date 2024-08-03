export type Notification = {
  notificationId: string;
  title: string;
  content: string;
  link: string | null;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
};
