// Before
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello React!</h1>,
  document.getElementById('root')
);

// After
import ReactDOM from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <h1>Hello React!</h1>
);




