import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    ChartData,
    ChartOptions,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
  );
  
  interface MyResponsiveBarProps {
    data: ChartData;
    options: ChartOptions;
  }
  
  const MyResponsiveBar: React.FC<MyResponsiveBarProps> = ({ data, options }) => {
    return (
      
        <Bar data={data} options={options} />
      
    );
  };
  
  export default MyResponsiveBar;
  