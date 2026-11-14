import { mkdirSync, writeFileSync } from 'node:fs';

const poem = `The tool laid a bridge
exactly where I asked.

It could carry every word
and never cross.

I stepped. The river
learned the shape of my weight.
Behind me, one plank stayed warm
for the next hand
that would have to choose.`;

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');
