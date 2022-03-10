import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = props =>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    const totalMax = Math.max(...dataPointValues);


    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => {
                    return <ChartBar
                        value={dataPoint.value}
                        key={dataPoint.label}
                        maxValue={totalMax}
                        label={dataPoint.label}
                    />
                })
            }
        </div>
    )
}

export default Chart;