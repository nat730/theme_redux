import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './actions';

const Card = () => {
  const theme = useSelector((state: { theme: any; }) => state.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="card" style={{ backgroundColor: theme === 'dark' ? '#eee' : '#333', padding: '10px', marginTop: '10px' }}>
      <h3>Card</h3>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Card;