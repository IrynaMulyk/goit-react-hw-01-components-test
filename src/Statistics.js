import PropTypes from 'prop-types';

const Statistics = ({title, statistic}) => {
  return (<div className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">
  {statistic.map(statisticEl => {
            return (
              <li key={statisticEl.id} >
                <span >{statisticEl.label}</span>
                <span >{statisticEl.percentage}</span>
              </li>
            );
          })}
  </ul>
</div>);
}
  
// Profile.propTypes = {
//     avatar: PropTypes.string,
//     username: PropTypes.string,
//     tag: PropTypes.string,
//     location: PropTypes.string,
//     stats: PropTypes.object,

// }
export default Statistics;