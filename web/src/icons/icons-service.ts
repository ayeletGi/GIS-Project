import foodStoreImage from "./food_store.png";
import carStoreImage from "./car_store.webp";
import chemistryStoreImage from "./chemistry_business.png";
import healthStoreImage from "./health_store.webp";
import entertainStoreImage from "./entertain_business.png";
import generalStoreImage from "./general_store.png";

export function logCategories(dataArr: any) {
  let arr: string[] = [];
  dataArr.forEach((element: any) => {
    if (!arr.includes(element.category)) {
      arr.push(element.category);
    }
  });
  console.log(arr);
}

export function getCategoriesMap(dataArr: any) {
  let map: { [id: string]: string } = {};
  dataArr.forEach((element: any) => {
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
    default:
      console.log("can't map!!!", category);
      return foodStoreImage;
  }
}
