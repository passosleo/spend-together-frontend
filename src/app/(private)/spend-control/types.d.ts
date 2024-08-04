export type SpendControlUser = {
  user: {
    username: string;
    name: string | null;
    avatar: string | null;
  };
  isOwner: boolean;
  invitedAt: Date;
  joinedAt: Date | null;
};

export type SpendControl = {
  spendControlId: string;
  name: string;
  description: string | null;
  color: string;
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  users: SpendControlUser[];
  isShared: boolean;
  balance: number;
  totalSpent: number;
  totalSpentByUser: number;
  totalSpentByOthers: number;
};
