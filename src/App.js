import logo from './logo.svg';
import './App.css';
import UseFetchHookTest from './components/fetch-test';
import UseOnclickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';

function App() {
  return (
    <div className="App">
      {/* <UseFetchHookTest/> */}
      {/* Use onClick Outside */}
      {/* <UseOnclickOutsideTest /> */}
      {/* Use Window Resize Hook Test */}
      <UseWindowResizeTest/>
    </div>
  );
}

export default App;
