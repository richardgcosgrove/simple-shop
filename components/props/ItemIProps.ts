export default interface ItemIProps {
  item : Item
}

export interface Item {
  id: string;
  description: string;
  price: number;
  image: string;
  title: string;
}