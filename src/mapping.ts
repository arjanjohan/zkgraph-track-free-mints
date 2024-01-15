//@ts-ignore
import { Bytes, Event, Block, ByteArray } from "@hyperoracle/zkgraph-lib";

var null_address = Bytes.fromHexString(
  "0x0000000000000000000000000000000000000000"
  );
var transfer_event = Bytes.fromHexString(
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
);

var free = Bytes.fromHexString("Value: 0");

export function handleBlocks(blocks: Block[]): Bytes {
  let events: Event[] = blocks[0].events;

  // Check all new mints events (transfer from null address)
  // Check if value is 0 to see if it is a free mint
  let free_mint_collections: ByteArray = ByteArray.empty();
  for (let i = events.length - 1; i >= 0; i--) {
    if (
      events[i].topic2 == null_address && 
      events[i].esig == transfer_event && 
      events[i].data == free
      ) {
        free_mint_collections = free_mint_collections.concat(events[i].address);
    }
  }
  let state = Bytes.fromByteArray(free_mint_collections);

  return state;
}