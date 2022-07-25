import foodStoreImage from "./food_store.png";
import carStoreImage from "./car_store.webp";
import chemistryStoreImage from "./chemistry_business.png";
import healthStoreImage from "./health_store.webp";
import entertainStoreImage from "./entertain_business.png";
import generalStoreImage from "./general_store.png";
import guardServiceImage from "./guard-service.png";
import natureBuisnessImage from "./nature-buisness.webp";
import fuelServiceImage from "./fuel_service.png";
import waterServicesImage from "./water_services.png";
import { telAvivData } from "../jsons/tel-aviv-json";

export function getDifferentCategories() {
  let arr: string[] = [];
  telAvivData.forEach((element: any) => {
    if (!arr.includes(element.category)) {
      arr.push(element.category);
    }
  });
  return arr;
}

export function getCategoriesMap() {
  let map: { [id: string]: string } = {};
  telAvivData.forEach((element: any) => {
    if (!Object.keys(map).includes(element.category)) {
      map[element.category] = getImageUrl(element.category);
    }
  });
  return map;
}

export function getImageUrl(category: string) {
  switch (category) {
    case "מזון":
      return foodStoreImage;
    case "רכב ותחבורה":
      return carStoreImage;
    case "עינוג ציבורי כללי":
      return entertainStoreImage;
    case "מסחר ושונות":
      return generalStoreImage;
    case "תעשיה, כימיה, מחצב":
      return chemistryStoreImage;
    case "בריאות, רוקחות, קוסמטיקה":
      return healthStoreImage;
    case "שרותי שמירה ואבטחה":
      return guardServiceImage;
    case "חקלאות ובעלי חיים":
      return natureBuisnessImage;
    case "דלק ואנרגיה":
      return fuelServiceImage;
    case "מים ופסולת":
      return waterServicesImage;
    default:
      console.log("can't map!!!", category);
      return foodStoreImage;
  }
}

export function initialCategoriesState() {
  let dict: { [key: string]: boolean } = {};
  telAvivData.forEach((element: any) => {
    if (!Object.keys(dict).includes(element.category)) {
      dict[element.category] = false;
    }
  });
  return dict;
}
export const ageGroupsLablesArr = [
  "0-4",
  "5-9",
  "10-14",
  "15-19",
  "20-24",
  "25-29",
  "30-34",
  "35-39",
  "40-44",
  "45-49",
  "50-54",
  "55-59",
  "60-64",
  "65-69",
  "70-74",
  "75-79",
  "80-84",
  "85 and up",
];

export function initialAgesState() {
  let dict: { [key: string]: boolean } = {};
  ageGroupsLablesArr.map((label) => {
    dict[label] = false;
  });
  return dict;
}
