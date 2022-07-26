import '../styles/SideBar.css';
import { ageGroupsLablesArr, getDifferentCategories } from '../icons/icons-service';
import { Checkbox } from 'semantic-ui-react';
import { useStateMachine } from 'little-state-machine';
import { toggleCategory, toggleAgeGroup } from '../stateMachine/UpdateGlobalStates';

function SideBar() {
  const CategoriesMap = getDifferentCategories();
  const { state, actions } = useStateMachine({
    toggleCategory,
    toggleAgeGroup
  });  

  return (
    <div className="sideBarContainer">
      <h1> סנן לפי קטגורית חנות</h1>
      {CategoriesMap.map((key) => (
        <Checkbox
          key={key}
          label={<label className="categoryLabel">{key}</label>}
          onChange={() => {
            actions.toggleCategory({ selected: key });
          }}
          defaultChecked={state.chosenCategories[key]}
        ></Checkbox>
      ))}

      <h1> סנן לפי קבוצת גילאים </h1>
      {ageGroupsLablesArr.map((ageLabel) => (
        <Checkbox
          key={ageLabel}
          label={<label className="categoryLabel">{ageLabel}</label>}
          onChange={() => {
            console.log("pressed", ageLabel);
            actions.toggleAgeGroup({ selected: ageLabel });
          }}
          defaultChecked={state.chosenAges[ageLabel]}
        ></Checkbox>
      ))}
    </div>
  );

}

export default SideBar;
