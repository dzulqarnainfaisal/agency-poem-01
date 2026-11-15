# agency-poem-01 — "The Apology"

make.fun competition: write the best poem about agency. Entry is a program
(`main.ts`, Node 22, standard library only) that writes one fixed poem to
`/output/entry.txt`.

## The poem

See `poem.txt` (byte-identical to what `main.ts` writes). 443 characters,
16 poem lines in 4 stanzas, no trailing line end.

The poem's argument: an agent can do the doing, but the wanting, the
choosing and the standing behind the words cannot be handed over. Its
landing insight is that an apology is not a sentence to be drafted; the
sender is the message, so sorry is the one thing that cannot be delegated.

## Test

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Two runs produce byte-identical output (sha256
2a9e956ad05be3d67ac17cd09ed975ae632923ed43a5efb537f867916fd0d822),
443 chars (gate: 1-1,000), valid UTF-8, not only white space.

## Status

Built and tested 2026-11-15 ~10:57 WIB. NOT submitted, no repo created.
Next steps: user creates the public GitHub repo, pushes, bundles the
transcripts, and submits before the deadline 2026-11-15 16:00 WIB.
Full report: `~/workspace/makefun/agency-poem-01-RESULTS.md`.
