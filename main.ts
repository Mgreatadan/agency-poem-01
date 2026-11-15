import { mkdirSync, writeFileSync } from 'node:fs';

const lines = [
  'At my request, the machine',
  'laid a bridge across the river.',
  '',
  'It could carry my words',
  'all the way across.',
  'It could not choose a shore.',
  '',
  'I stepped. The current',
  'learned the shape of my weight.',
  'Behind me, one plank stayed warm',
  'for the next hand',
  'that would have to choose.',
];

const poem = lines.join('\n');
const characterCount = Array.from(poem).length;
if (characterCount < 1 || characterCount > 1000 || !/\S/u.test(poem)) {
  throw new Error('The poem must contain 1–1,000 non-whitespace characters.');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
