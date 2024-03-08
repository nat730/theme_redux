import { useSelector, useDispatch } from 'react-redux';
import {RootState } from './reducers';
import { toggleTheme } from './actions';

const Button = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="button-container" style={{ marginTop: '10px' }}>
      <button
        className={theme === 'dark' ? 'dark-button' : 'light-button'}
        onClick={handleToggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Button;
