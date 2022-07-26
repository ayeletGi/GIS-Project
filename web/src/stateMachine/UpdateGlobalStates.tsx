import { GlobalState } from "little-state-machine";

export function toggleCategory(
  state: GlobalState,
  payload: { selected: string }
): GlobalState {
  const prev = state.chosenCategories[`${payload.selected}`];

  return {
    ...state,
    chosenCategories: { ...state.chosenCategories, [payload.selected]: !prev },
  };
}

export function toggleAgeGroup(
  state: GlobalState,
  payload: { selected: string }
): GlobalState {
  const prev = state.chosenAges[`${payload.selected}`];
  return {
    ...state,
    chosenAges: { ...state.chosenAges, [payload.selected]: !prev },
  };
}