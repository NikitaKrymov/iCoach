"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var recharts_1 = require("recharts");
var theme_1 = require("../../../../../theme");
var renderActiveShape = function (props) {
    var RADIAN = Math.PI / 180;
    var cx = props.cx, cy = props.cy, midAngle = props.midAngle, innerRadius = props.innerRadius, outerRadius = props.outerRadius, startAngle = props.startAngle, endAngle = props.endAngle, fill = props.fill, payload = props.payload, percent = props.percent, value = props.value;
    var sin = Math.sin(-RADIAN * midAngle);
    var cos = Math.cos(-RADIAN * midAngle);
    var sx = cx + (outerRadius + 10) * cos;
    var sy = cy + (outerRadius + 10) * sin;
    var mx = cx + (outerRadius + 30) * cos;
    var my = cy + (outerRadius + 30) * sin;
    var ex = mx + (cos >= 0 ? 1 : -1) * 22;
    var ey = my;
    var textAnchor = cos >= 0 ? 'start' : 'end';
    return (<g>
      <text x={cx} y={cy} dy={-2} textAnchor="middle" fill={"rgb(0,0,0)"}>{payload.name}</text>
      <text x={cx} y={cy} dy={25} textAnchor="middle" fontSize='20px' fill={"rgb(0,0,0)"}>{(percent * 100).toFixed(2) + "%"}</text>
      <recharts_1.Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={theme_1.theme.colors.mainPink}/>
      <recharts_1.Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={theme_1.theme.colors.mainPink}/>
      <path d={"M" + sx + "," + sy + "L" + mx + "," + my + "L" + ex + "," + ey} stroke="#505050" fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill="#505050" stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} fontSize="20px" textAnchor={textAnchor} fill="#000000">{"" + value}</text>
      {/* <text x={ex + (cos >= 0 ? 1 : -1) * -50} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text> */}
    </g>);
};
var PieChartClass = /** @class */ (function (_super) {
    __extends(PieChartClass, _super);
    function PieChartClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: 0,
        };
        _this.onPieEnter = function (data, index) {
            _this.setState({
                activeIndex: index,
            });
        };
        return _this;
    }
    PieChartClass.prototype.render = function () {
        return (<recharts_1.PieChart width={200} height={220}>
            <recharts_1.Pie activeIndex={this.state.activeIndex} activeShape={renderActiveShape} data={[
                { name: 'Active Users', value: 1 },
                { name: 'Unactive Users', value: 0 },
            ]} cx={100} cy={110} innerRadius={55} outerRadius={70} fill={theme_1.theme.colors.mainPurple} dataKey="value" onMouseOver={this.onPieEnter}/>
        </recharts_1.PieChart>);
    };
    return PieChartClass;
}(react_1.PureComponent));
exports.default = PieChartClass;
