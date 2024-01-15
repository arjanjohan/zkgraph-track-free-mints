# Test script for zkGraph

# Update `zkgraph.config.ts` with your own parameters first!
# Then run `sh test.sh`

# npm run compile-local &&
# npm run exec-local -- 5087832 &&
# npm run prove-local -- --inputgen <blockId> <expectedStateStr> &&
# npm run prove-local -- --test <blockId> <expectedStateStr>

npm run compile &&
npm run exec -- 18750315 &&
npm run prove -- --inputgen 18750315 00000000 &&
npm run prove -- --test 18750315 00000000