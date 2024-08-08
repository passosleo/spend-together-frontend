export type User = {
  userId: string;
  username: string;
  name: string | null;
  email: string;
  emailVerified: boolean;
  receiveEmails: boolean;
  avatar: string | null;
  isPublic: boolean;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type MenuOption = {
  name: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};
