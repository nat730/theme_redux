import { useSelector } from 'react-redux';
import Card from './Card';

const Container = () => {
  const theme = useSelector((state: { theme: any; }) => state.theme);

  return (
    <div className="container" style={{ backgroundColor: theme === 'dark' ? '#333' : '#eee', padding: '20px' }}>
      <h2>Container</h2>
      <Card />
    </div>
  );
};

export default Container;