import server from "./server";

export async function all() {
  return server.get('client/foods');
}
