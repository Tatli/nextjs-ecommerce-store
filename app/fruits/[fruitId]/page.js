import { getFruitById } from '../../../database/fruits';

export default function SingleFruitPage() {
  const fruit = getFruitById(Number(props.params.fruitId));
  return <div>Enter</div>;
}
