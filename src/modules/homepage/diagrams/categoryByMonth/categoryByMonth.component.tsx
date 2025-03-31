/** @jsxImportSource @emotion/react */
import React from "react";
import { useCategoryByMonth } from "../../hooks/useCategoryByMonth";
import Loading from "../../../../shared/components/loading/loading.component";
import CanvasJSReact from "@canvasjs/react-charts";
import NoDataFound from "../../../../shared/components/noDataFound/noDataFound.component";
import { COLORS } from "../../../../shared/styles/colors";
import { styles } from "./categoryByMonth.styles";
import { DiagramProps } from "../totalExpenseByMonth/totalExpenseByMonth.component";

const { CanvasJSChart } = CanvasJSReact;

const CategoryByMonth: React.FC<DiagramProps> = ({ year, month }) => {
  const queryParams: Partial<{ year: number; month: number }> = {};
  if (year !== undefined) queryParams.year = year;
  if (month !== undefined) queryParams.month = month;

  const { isPending, data } = useCategoryByMonth(
    Object.keys(queryParams).length > 0 ? queryParams : undefined
  );

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
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: ${y}",
        showInLegend: false,
        indexLabelFontSize: 12,
        indexLabel: "{label} - ${y}",
        dataPoints: chartDataPoints ?? [],
      },
    ],
  };

  return (
    <div css={styles.container}>
      <p css={styles.title}>Category Split</p>
      <CanvasJSChart
        options={options}
        containerProps={{ width: 320, height: 200 }}
      />
    </div>
  );
};

export default CategoryByMonth;
