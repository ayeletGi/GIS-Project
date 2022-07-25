import { GlobalState } from "little-state-machine";

export function toggleCategory(
    state: GlobalState,
    payload: { selected:string}
  ): GlobalState {
    const prev = state.chosenCategories[`${payload.selected}`]
    console.log(payload);
    return {
      ...state,
      chosenCategories:
      {...state.chosenCategories, [payload.selected]:!prev}
    };
  }
