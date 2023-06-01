import {AxiosResponse} from "axios";
import {Food} from "../../types/Food";
import server from "./server";

export async function all(): Promise<AxiosResponse<Food[]>> {
  return server.get('client/foods');
}
