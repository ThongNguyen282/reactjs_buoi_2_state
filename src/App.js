import './App.css';
import BaiTap from './components/BaiTap';

function App() {


  // function chao() {
  //   console.log('chao')
  // }
  // 
  return (
    <div className=""> {/* bug thêm class = app không handle event */}
      {/* <button onClick={chao}>Hello</button> */}
      <BaiTap />
    </div>
  );
}

export default App;
