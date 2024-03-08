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
      <h3 style={{ background: theme === 'dark' ? '#333' : '#eee'}}>Card</h3>
      <button onClick={handleToggleTheme} style={{ color: theme === 'dark' ? '#333' : '#eee'}}>Toggle Theme</button>
    </div>
  );  
};

export default Card;