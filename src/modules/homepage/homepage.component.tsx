/** @jsxImportSource @emotion/react */
import Card from "../../shared/components/card/card.component";
import IconComponent from "../../shared/components/icon/icon.component";
import { PATHS } from "../../shared/constants/path-options";
import CategoryByMonth from "./diagrams/categoryByMonth/categoryByMonth.component";
import { styles } from "./homepage.styles";
import { FaPlus } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";
import TotalExpenseByMonth from './diagrams/totalExpenseByMonth/totalExpenseByMonth.component';

const HomePage = () => {
  return (
    <div css={styles.container}>
      <div css={styles.cardContainer}>
        <Card
          to={PATHS.expenses.list}
          text={`Add Expense`}
          icon={<IconComponent icon={FaPlus} size={24} />}
        />
        <Card
          to={PATHS.expenses.uploadBankStatement}
          text={`Upload Statement`}
          icon={<IconComponent icon={FaUpload} size={24} />}
        />
      </div>
      <CategoryByMonth />
      <TotalExpenseByMonth />
    </div>
  );
};

export default HomePage;
