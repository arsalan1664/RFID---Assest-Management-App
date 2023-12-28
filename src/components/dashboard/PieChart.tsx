
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 30 },
  { name: "Group C", value: 30 },
  { name: "Group D", value: 20 }
];
const COLORS = ["#6d52f3", "#00C49F", "#FFBB28", "#FF8042"];

export default function MyPieChart() {
  return (
    <PieChart width={450} height={300} className="flex items-center justify-center">
      <Pie
        data={data}
        cx={220}
        cy={150}
        innerRadius={80}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      
    </PieChart>
  );
}