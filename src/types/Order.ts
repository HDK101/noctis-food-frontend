export interface Order {
  id: number;
  createdAt: string;
  updatedAt: string;
  FoodOrders: {
    id: number;
    name: string;
    image: string;
    price: number;
  }[];
}
