import Statistic from "./Statistic/Statistic";
import s from "./Statistics.module.css";

const Statistics = (props) => {
  const arryOption = Object.entries(props);

  return (
    <ul className={s.list}>
      {arryOption.map((option) => (
        <Statistic key={option[0]} name={option[0]} data={option[1]} />
      ))}
    </ul>
  );
};

export default Statistics;
