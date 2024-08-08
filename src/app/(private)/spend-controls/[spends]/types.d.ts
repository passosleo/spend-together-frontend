export type Spend = {
  spendId: string;
  spendControlId: string;
  spendCategoryId: string;
  userId: string;
  description: string | null;
  amount: number;
  isEnabled: boolean;
  createdAt: string;
  updatedAt: string;
  spendCategory: {
    spendCategoryId: string;
    name: string;
    color: string;
    description: string;
    isEnabled: boolean;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    username: string;
    name: string | null;
    avatar: string | null;
  };
};
