import React from 'react';
import Chart from "react-apexcharts";

const DonutChartData = ( { totalLabel, series, labels } ) => {
    const chartOptions = {
        labels: labels,
        colors: ["#c5366e", "#85adff", "#502579"],
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true,
          floating: false,
          position: "right",
          horizontalAlign: "center",
        },
        plotOptions: {
          pie: {
            customScale: 0.8,
            donut: {
              size: "65%",
              labels: {
                show: true,
                name: {
                  show: true,
                  offsetY: 30,
                },
                value: {
                  offsetY: -30,
                  fontWeight: 600,
                  fontSize: "2.5em"
                },
                total: {
                  show: true,
                  label: totalLabel,
                  fontSize: "1.75em",
                  color: "black"
                  }
              },
            },
          },
        }
    }
    return (
        <>
        <Chart
        options={chartOptions}
        series={series}
        type="donut"
        width="500"
      />
      </>
    )
}

export default DonutChartData