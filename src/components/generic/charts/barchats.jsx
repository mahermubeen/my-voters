import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  Legend,
  ReferenceLine,
  Cell,
  ResponsiveContainer,
  BarChart,
} from 'recharts';
import { kFormatter } from './numberForamte';
export function ReferenceLabel(props) {
  const { fill, value, textAnchor, fontSize, viewBox, dy, dx } = props;
  const x = viewBox.x + 20;
  const y = viewBox.y - 6;
  return (
    <>
      <svg
        x={x + 450}
        y={y - 45}
        dy={dy}
        dx={dx}
        width='94'
        height='94'
        viewBox='0 0 94 94'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_d)'>
          <circle cx='47' cy='47' r='17' fill='white' />
        </g>

        <defs>
          <filter
            id='filter0_d'
            x='0'
            y='0'
            width='94'
            height='94'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            />
            <feOffset />
            <feGaussianBlur stdDeviation='15' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow'
              result='shape'
            />
          </filter>
        </defs>
      </svg>
      <text
        x={x + 487}
        y={y + 6}
        dy={dy}
        dx={dx}
        fill={fill}
        fontSize={fontSize || 16}
        textAnchor={textAnchor}
      >
        {value}
      </text>
    </>
  );
}
const data = [
  {
    name: 'Candidate 1',
    votes: 10000,
  },
  {
    name: 'Candidate 2',
    votes: 8000,
  },
  {
    name: 'Candidate 3',
    votes: 20000,
  },
  {
    name: 'Candidate 4',
    votes: 15000,
  },
  {
    name: 'Candidate 5',
    votes: 4000,
  },
  {
    name: 'Candidate 6',
    votes: 9000,
  },
];
const barColors = [
  '#2B8CC6',
  '#42DEDD',
  '#F5BC27',
  '#85DB47',
  '#9B5BED',
  '#D02B8F',
];

const CustomDot = (props) => {
  const { cx, cy, value } = props;

  return (
    <>
      <text x={cx} y={cy - 30} fill='#6f6f6f'>
        {value}
      </text>
      <circle
        cx={cx}
        cy={cy}
        r={10}
        stroke='#26b15d'
        strokeWidth={0}
        fill='#26b15d'
      />
    </>
  );
};
const CandidateChart = () => {
  return (
    <div className='candidateChart'>
      <div>
        <h2 className='fw600 fs24 lh48'>Candidates Votes</h2>
      </div>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart
          width={420}
          height={421}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
          }}
          style={{ direction: 'ltr' }}
        >
          <CartesianGrid
            strokeDasharray='4 4'
            vertical={false}
            horizontal={false}
          />
          <XAxis
            fontSize={16}
            tickMargin={16}
            tickLine={false}
            axisLine={true}
            dataKey='name'
            stroke='#989898'
            style={{ padding: 10 }}
          />
          <YAxis
            tickFormatter={kFormatter}
            fontSize={16}
            tickMargin={21}
            tickLine={false}
            axisLine={true}
            stroke='#989898'
          />
          <Tooltip />
          <Bar dataKey='votes' fill='#00a0fc' radius={[10, 10, 10, 10]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                width={48}
                fill={barColors[index % 20]}
              />
            ))}
          </Bar>
          {/* <Bar dataKey='votes' fill='#26b15d' radius={[10, 10, 0, 0]} /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CandidateChart;
