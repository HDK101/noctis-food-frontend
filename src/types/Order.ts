export interface Order {
  id: number;
  createdAt: string;
  updatedAt: string;
  FoodOrder: {
    id: number;
  }[];
}
