import React from "react";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

const Statistics = ({ title, statistic }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statsList}>
        {statistic.map((statisticEl) => {
          return (
            <li key={statisticEl.id}>
              <span className={css.label}>{statisticEl.label}</span>
              <span className={css.label}>{statisticEl.percentage}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistic: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
