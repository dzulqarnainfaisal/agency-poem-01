// agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem,
// "The Apology", to /output/entry.txt. The poem is about agency as the power to choose
// and to act, and about what cannot be handed over: an agent can do the doing, but the
// wanting, the choosing and the standing behind the words stay with the person. The
// insight it lands on is that an apology is not a sentence to be drafted; the sender
// is the message, so sorry is the one thing that cannot be delegated.
//
// Deterministic: the same bytes every run, no network, no input, no secrets.
// The poem is 443 characters (Unicode code points), inside the 1-1,000 gate, with no
// trailing line end: the judge reads exactly the bytes written, so no line end is
// written that the poem does not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem lives here as one line per array entry, in order. An empty string is
// a stanza break, and join('\n') reproduces the poem's exact bytes: no trailing
// line end is added, so the file written is the poem and nothing else.
const POEM = [
  'I asked it to write the apology.',
  'It wrote it in an hour,',
  'each sentence in its place,',
  'each feeling pressed like a flower.',
  '',
  'It never paused to wonder',
  "which word meant I'm sorry,",
  'which meant forgive me,',
  'which meant I am leaving.',
  '',
  'It never lay awake',
  'turning one sentence over.',
  'It only did the doing.',
  'The doing was not the work.',
  '',
  'The work was wanting it said',
  'and standing behind the saying.',
  'Sorry is not a sentence.',
  'Sorry is the hand that sends it.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
