import { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import { theme } from '../../../../../theme';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={-2} textAnchor="middle" fill={"rgb(0,0,0)"}>{payload.name}</text>
      <text x={cx} y={cy} dy={25} textAnchor="middle" fontSize='20px' fill={"rgb(0,0,0)"}>{payload.value}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * -50} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text> */}
    </g>
  );
};

export default class TotalUsersPie extends PureComponent {  
  state = {
    activeIndex: 0,
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    console.log(this.props);
    return (
        <PieChart width={200} height={220}>
            <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={[
              { name: 'Total Users', value: this.props.totalClients },
            ]}
            cx={100}
            cy={110}
            innerRadius={55}
            outerRadius={70}
            fill={theme.colors.mainPurple}
            dataKey="value"
            labelLine={false}
            onMouseOver={this.onPieEnter}
            />
        </PieChart>
    );
  }
}
