import "./styles/App.css";
import Map from "./components/MapComponent";
import SideBar from "./components/sideBar";
import { StateMachineProvider, createStore } from "little-state-machine";
import { initialAgesState, initialCategoriesState } from "./icons/icons-service";

createStore({
  chosenCategories: { ...initialCategoriesState() },
  chosenAges: {...initialAgesState()},
});

function App() {
  return (
    <StateMachineProvider>
      <SideBar/>
      <Map/>
    </StateMachineProvider>
  );
}

export default App;
