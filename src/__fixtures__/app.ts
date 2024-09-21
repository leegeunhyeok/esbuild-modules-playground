import { add } from './add';
import { div } from './div';
import { mul } from './mul';
import { sub } from './sub';

interface AppInput {
  a: number;
  b: number;
}

export function App({ a, b }: AppInput) {
  console.log('add', add(a, b));
  console.log('sub', sub(a, b));
  console.log('mul', mul(a, b));
  console.log('div', div(a, b));
}
