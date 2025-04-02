/** @jsxImportSource @emotion/react */
import IconComponent from "../../../../shared/components/icon/icon.component";
import Card from "../../../../shared/components/card/card.component";
import { FaPlus, FaList, FaUpload } from "react-icons/fa6";
import { styles } from "./quick-actions.styles";
import { useState } from "react";
import CreateCategory from "../create-category/create-category.component";
import CreateExpense from "../create-expenses/create-expense.component";
import UploadBankStatement from "../upload-bank-document/upload-bank-statement.component";

const QuickActions = () => {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isUploadBankStatementModalOpen, setIsUploadBankStatementModalOpen] =
    useState(false);

  const closeAllModals = () => {
    setIsCategoryModalOpen(false);
    setIsExpenseModalOpen(false);
    setIsUploadBankStatementModalOpen(false);
  };

  const handleCategoryClick = () => {
    closeAllModals();
    setIsCategoryModalOpen(true);
  };

  const handleExpenseClick = () => {
    closeAllModals();
    setIsExpenseModalOpen(true);
  };

  const handleUploadBankStatementClick = () => {
    closeAllModals();
    setIsUploadBankStatementModalOpen(true);
  };

  return (
    <div css={styles.quickActions}>
      <p css={styles.quickText}>Quick options</p>
      <div css={styles.cardContainer}>
        <Card
          text={`Add Expense`}
          icon={<IconComponent icon={FaPlus} size={24} />}
          onClick={handleExpenseClick}
        />
        <Card
          text={`Add category`}
          icon={<IconComponent icon={FaList} size={24} />}
          onClick={handleCategoryClick}
        />
        <Card
          text={`Upload Statement`}
          icon={<IconComponent icon={FaUpload} size={24} />}
          onClick={handleUploadBankStatementClick}
        />
      </div>
      {isCategoryModalOpen && (
        <CreateCategory
          isOpen={isCategoryModalOpen}
          onClose={() => setIsCategoryModalOpen(false)}
        />
      )}
      {isExpenseModalOpen && (
        <CreateExpense
          isOpen={isExpenseModalOpen}
          onClose={() => setIsExpenseModalOpen(false)}
        />
      )}
      {isUploadBankStatementModalOpen && (
        <UploadBankStatement
          isOpen={isUploadBankStatementModalOpen}
          onClose={() => setIsUploadBankStatementModalOpen(false)}
        />
      )}
    </div>
  );
};

export default QuickActions;
