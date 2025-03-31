export const PATHS = {
  home: "/",
  auth: '/auth',
  expenses: {
    root: '/expenses',
    listById: "/expenses/:id",
    uploadBankStatement: "/expenses/upload-bank_statement",
  },
  categories: {
    root: '/categories',
    listById: "/categories/:id",
  }
} as const;
