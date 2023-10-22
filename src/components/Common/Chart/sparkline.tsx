import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

const InteractiveSparkline = ({ data }: { data: number[] }) => {
  return (
    <div>
      <Sparklines data={data}>
        <SparklinesLine color="#6d28d9" />
        <SparklinesReferenceLine />
      </Sparklines>
    </div>
  );
};

export default InteractiveSparkline;
