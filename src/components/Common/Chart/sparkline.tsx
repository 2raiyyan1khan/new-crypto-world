import { useState } from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from "react-sparklines";

const InteractiveSparkline = ({ data }: { data: number[] }) => {
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <div>
      <Sparklines data={data}>
        <SparklinesLine
          color="#6d28d9"
          onMouseMove={(e) => {
            const index = Math.round(
              (e.nativeEvent.offsetX / e.target.clientWidth) * 6
            );
            setHoveredValue(data[index]);
          }}
        />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      {hoveredValue && <div>Hovered Value: {hoveredValue}</div>}
    </div>
  );
};

export default InteractiveSparkline;
