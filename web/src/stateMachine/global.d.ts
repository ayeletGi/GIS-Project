import "little-state-machine";


declare module "little-state-machine" {
  interface GlobalState {
    chosenCategories:{[key:string]: boolean };
    chosenAges:{[key:string]: boolean };
  }
};