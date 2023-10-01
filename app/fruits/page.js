import Link from 'next/link';
import { fruits } from '../../database/fruits';

export default function FruitsPage() {
  return (
    <div>
      {fruits.map((fruit) => (
        <div key={`fruit-${fruit.id}`}>
          <Link href={`fruits/${fruit.id}`}>
            <h1>{fruit.icon}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
