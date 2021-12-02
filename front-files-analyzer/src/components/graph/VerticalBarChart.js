import React from 'react';
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title, ArcElement, Tooltip, Legend, defaults } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';


// ChartJS.defaults.plugins.legend.position = 'bottom';

export const VerticalBarChart = (props) => {
    
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin,
  );
    
  return (
    <div>
      <Bar
        data={{
          labels: props.labels,
          datasets: [
            {
              label: 'Diccinario',
              data: props.data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
          plugins: {
            zoom: {
                zoom: {
                wheel: {
                    enabled: true,
                },
                pinch: {
                    enabled: true
                },
                mode: 'x',
                }
            }
            }
        }}
      />
    </div>
  )
}

