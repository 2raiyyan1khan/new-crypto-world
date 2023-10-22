const StatsCard = ({
  title,
  value,
}: {
  title: string;
  value: number | string;
}) => (
  <div className="dark:bg-neutral-900 bg-zinc-100 p-5 rounded-xl text-center border-[0.5px] dark:border-neutral-800">
    <h5 className="text-5xl font-semibold mb-3">{value}</h5>
    <p className="text-sm dark:text-gray-400 text-gray-600">{title}</p>
  </div>
);
export default StatsCard;
