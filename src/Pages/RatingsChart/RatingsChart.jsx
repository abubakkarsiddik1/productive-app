import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RatingsChart = ({ ratings }) => {

  
  const chartData = ratings?.map(item => ({
    name: item.name,
    count: item.count,
  })) || [];

  return (
    <ComposedChart
      layout="vertical"
      width={300}
      height={250}
      data={chartData}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" width={80} />
      <Tooltip />
      <Legend />
      
      {/* You can style these however you want */}
      <Area dataKey="count" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="count" barSize={20} fill="#413ea0" />
      <Line dataKey="count" stroke="#ff7300" />
    </ComposedChart>
  );
};

export default RatingsChart;
