export interface FoodItemProps {
  name: string;
}

export default function FoodItem({ name }: FoodItemProps) {
  return (
    <p>{name}</p>
  );
}
