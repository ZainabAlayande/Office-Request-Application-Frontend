import { RechartData } from "../../utils/data/Data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


export default function Rechart() {
  return (
    <BarChart
      width={400}
      height={310}
      data={RechartData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Category" fill="#0079FF" />
    </BarChart>
  );
}
