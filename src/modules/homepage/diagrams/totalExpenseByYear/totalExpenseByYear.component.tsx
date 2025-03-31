/** @jsxImportSource @emotion/react */
import React from "react";
import { useCategoryByMonth } from "../../hooks/useCategoryByMonth";
import Loading from "../../../../shared/components/loading/loading.component";
import CanvasJSReact from "@canvasjs/react-charts";
import NoDataFound from "../../../../shared/components/noDataFound/noDataFound.component";
import { COLORS } from "../../../../shared/styles/colors";
import { styles } from "./totalExpenseByYear.styles";
import { DiagramProps } from "../totalExpenseByMonth/totalExpenseByMonth.component";
import { useTotalExpenseByYear } from '../../hooks/useTotalExpenseByYear';

const { CanvasJSChart } = CanvasJSReact;

const TotalExpenseByYear: React.FC<DiagramProps> = ({ year }) => {
  const { isPending, data } = useTotalExpenseByYear(year ? { year } : undefined);

  if (isPending) {
    return <Loading />;
  }

  const chartDataPoints =
    data?.dataPoints.map((point) => ({
      y: point.y,
      label: point.label,
    })) || [];

  if (chartDataPoints.length === 0) {
    return <NoDataFound />;
  }

  const options = {
    animationEnabled: true,
    backgroundColor: COLORS.light_gray,
    creditText: "",
    axisX: {
      title: "Months",
      labelFontSize: 12,
      labelAngle: -45,
    },
    axisY: {
      title: "Expenses ($)",
      includeZero: true,
      labelFormatter: (e: { value: any }) => `$${e.value}`,
    },
    data: [
      {
        type: "column",
        toolTipContent: "<b>{label}</b>: ${y}",
        dataPoints: chartDataPoints ?? [],
      },
    ],
  };

  return (
    <div css={styles.container}>
      <p css={styles.title}>Yearly Overview</p>
      <CanvasJSChart
        options={options}
        containerProps={{ width: 320, height: 200 }}
      />
    </div>
  );
};

export default TotalExpenseByYear;
