export const PATHS = {
  home: "/",
  auth: '/auth',
  expenses: {
    root: '/expenses',
    list: "/expenses/list",
    listById: "/expenses/list/:id",
    uploadBankStatement: "/expenses/upload-bank_statement",
  },
} as const;
