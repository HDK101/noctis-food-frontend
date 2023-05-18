import {useQuery} from "react-query";
import Loading from "../../components/Loading";

import * as food from '../../services/api/food';
import FoodItem from "./FoodItem";

export default function Home() {
  const { isLoading, isError, data } = useQuery('foods', () => food.all().then(res => res.data));

  console.log(data);

  return (
    <>
      {isLoading ? <Loading /> : null}
      {(!isLoading && !isError) ? data?.map(foodItem => <FoodItem key={foodItem.name} name={foodItem.name}/>) : null}
    </>
  );
}
