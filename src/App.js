import './App.css';
import Sidebar from "./Component/Sidebar/Sidebar"
import Feed from "./Component/Feed/Feed"
import Widgets from "./Component/Widgets/Widgets"
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
