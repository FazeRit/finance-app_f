/** @jsxImportSource @emotion/react */
import React from "react";
import Loading from "../../../../shared/components/loading/loading.component";
import CanvasJSReact from "@canvasjs/react-charts";
import NoDataFound from "../../../../shared/components/noDataFound/noDataFound.component";
import { COLORS } from "../../../../shared/styles/colors";
import { styles } from "./totalExpenseByMonth.styles";
import { useTotalExpenseByMonth } from "../../hooks/useTotalExpenseByMonth";

const { CanvasJSChart } = CanvasJSReact;

export interface DiagramProps {
  year?: number;
  month?: number;
}

const TotalExpenseByMonth: React.FC<DiagramProps> = ({ year, month }) => {
  const queryParams: Partial<{ year: number; month: number }> = {};
  if (year !== undefined) queryParams.year = year;
  if (month !== undefined) queryParams.month = month;

  const { isPending, data } = useTotalExpenseByMonth(
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
    axisX: {
      title: "Expenses",
      labelFontSize: 12,
       labelFormatter: () => {
        return " ";
       }
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
      <p css={styles.title}>Monthly Overview</p>
      <CanvasJSChart
        options={options}
        containerProps={{ width: 320, height: 200 }}
      />
    </div>
  );
};

export default TotalExpenseByMonth;
