import s from "./Statistic.module.css";

const Statistic = ({ name, data }) => {
  return (
    <li>
      <span>{name} -</span>
      <span className={s.fedbackStatistics}>{data}</span>
    </li>
  );
};

export default Statistic;
