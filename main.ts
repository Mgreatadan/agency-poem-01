import { mkdirSync, writeFileSync } from node:fs;

const poem = `At my request, the machine
laid a bridge across the river.

It could carry my words
all the way across.
It could not choose a shore.

I stepped. The current
learned the shape of my weight.
Behind me, one plank stayed warm
for the next hand
that would have to choose.`;

mkdirSync(/output, { recursive: true });
writeFileSync(/output/entry.txt, poem, utf8);
