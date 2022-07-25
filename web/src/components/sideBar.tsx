import '../styles/SideBar.css';
import { telAvivData } from "../jsons/tel-aviv-json";
import { ageGroupsLablesArr, getCategoriesMap } from '../icons/icons-service';
import { Checkbox } from 'semantic-ui-react';
// import { toggleCategory } from '../stateMachine/UpdateGlobalStates';
import { useStateMachine } from 'little-state-machine';
import { toggleCategory, toggleAgeGroup } from '../stateMachine/UpdateGlobalStates';
import { useEffect } from 'react';


function SideBar() {
  const CategoriesMap = getCategoriesMap();
  const { state, actions } = useStateMachine({
    toggleCategory,
    toggleAgeGroup
  });  
  useEffect(() => {
    console.log('state', state)   
  }, [state])


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
          
          </label>} 
          onChange={()=>{
            console.log('pressed', key)
            actions.toggleCategory({selected:key})}}
          >
        </Checkbox>
      ))}

    <h1> Choose age group</h1>
    {ageGroupsLablesArr.map((ageLabel) => (
        <Checkbox  key={ageLabel} label={
          <label className='categoryLabel'>
          {ageLabel}
          </label>} 
          onChange={()=>{
            console.log('pressed', ageLabel)
            actions.toggleAgeGroup({selected:ageLabel})}}
          >
        </Checkbox>
      ))}

  </div>
  );

}

export default SideBar;
