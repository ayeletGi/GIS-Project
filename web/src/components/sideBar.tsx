import '../styles/SideBar.css';
import { telAvivData } from "../jsons/tel-aviv-json";
import { getCategoriesMap } from '../icons/icons-service';
import { Checkbox } from 'semantic-ui-react';
// import { toggleCategory } from '../stateMachine/UpdateGlobalStates';
import { useStateMachine } from 'little-state-machine';
import { toggleCategory } from '../stateMachine/UpdateGlobalStates';


function SideBar() {

  const CategoriesMap = getCategoriesMap();
  const { state, actions } = useStateMachine({
    toggleCategory
  });  
console.log('state', state)   
  return (   
  <div className='sideBarContainer'>

    <h1> Choose category</h1>
    {Object.keys(CategoriesMap).map((key) => (
        <Checkbox  key={key} label={
          <label className='categoryLabel'>
          {key}
          <img
          className='icon'
            src={CategoriesMap[key]}
            alt={key}
          />
          
          </label>} >

        
      
        </Checkbox>
      ))}

    <h1> Choose age group</h1>


  </div>
  );

}

export default SideBar;