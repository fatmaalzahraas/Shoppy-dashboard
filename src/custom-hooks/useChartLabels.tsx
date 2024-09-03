import { useState } from "react";
import { ChartLabels, ChartPropsType } from "../types/types";

const useChartLabels = (chartLabels: ChartLabels) => {
  const obj: ChartPropsType = chartLabels.reduce(
    (a: ChartPropsType, { value }) => {
      a[value] = false;
      return a;
    },
    {}
  );
  const [chartProps, setChartProps] = useState<ChartPropsType>(obj);
  const hideTicks = Object.values(chartProps).some((el) => el === false);
  return {
    chartProps,
    setChartProps,
    hideTicks,
  };
};

export default useChartLabels;
