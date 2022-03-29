import { BigInt } from "@graphprotocol/graph-ts"
import {
  MarketBids,
  BidAccepted,
  BidEntered,
  BidRefunded,
  BidWithdrawn,
  BlindBidAccepted,
  BlindBidWithdrawn,
  BlindBidentered,
  FundsForwarded
} from "../../generated/MarketBids/MarketBids"
import { Stats, NFT, Bid, MarketItem } from "../../generated/schema"
import { getDateString, getTimeString } from '../helpers/datetime';
/*~~~>
  tokenId: token_id of the NFT to be bid on;
  itemId: itemId for internal storage index in the Market Contract;
  bidValue: Value of the bid entered;
  seller: ownerOf NFT;
  <~~~*/
export function handleBidEntered(event: BidEntered): void {

  //Load in and update Stats
  let stats = Stats.load("bid_stats");
  if(!stats){
    stats = new Stats("bid_stats");
    stats.count = BigInt.fromI32(0);
  }
  stats.type = "bids";
  stats.count = stats.count + BigInt.fromI32(1);
  let date = getTimeString(event.block.timestamp) + " : " + getDateString(event.block.timestamp);
  // Load in Bid
  let bid = Bid.load("bids_"+event.params.bidder.toString()+event.params.bidId.toString());
  if (!bid) {
    bid = new Bid("bids_"+event.params.bidder.toString()+event.params.bidId.toString());
  }
  bid.type = "listed";
  bid.date = date;
  bid.block = event.block.timestamp;
  bid.item = event.params.seller.toString() + event.params.itemId.toString();
  bid.bidId = event.params.bidId;
  bid.bidder = event.params.bidder.toString();
  bid.value = event.params.bidValue;
  bid.isSpecific = true;
  bid.valid = true;

  bid.save()

}

export function handleBidAccepted(event: BidAccepted): void {
  let bid = Bid.load("bids_"+event.params.bidder.toString()+event.params.bidId.toString())
  if(bid){bid.valid = false}
}

export function handleBidWithdrawn(event: BidWithdrawn): void {  
  let bid = Bid.load("bids_"+event.params.bidder.toString()+event.params.bidId.toString())
  if(bid){bid.valid = false}
}

export function handleBlindBidentered(event: BlindBidentered): void {
  let stats = Stats.load(event.address.toString()+"_blind");

  if(!stats){
    stats = new Stats(event.address.toString()+"_blind");
    stats.count = BigInt.fromI32(0);
  }
  stats.count = stats.count + BigInt.fromI32(1);

  let bid = Bid.load("blindBids_"+event.params.bidder.toString()+event.params.blindBidId.toString());

  if (!bid) {
    bid = new Bid("blindBids_"+event.params.bidder.toString()+event.params.blindBidId.toString());
  }
  
  bid.type = "blind";
  bid.date = getTimeString(event.block.timestamp) + " : " + getDateString(event.block.timestamp);

  let item = MarketItem.load("market_bids_"+stats.count.toString());
  if(!item){
    item = new MarketItem("market_bids_"+stats.count.toString());
  }

  let nft = NFT.load(event.params.bidder.toString()+event.params.tokenId.toString());

  if(!nft){
    nft = new NFT(event.params.bidder.toString()+event.params.tokenId.toString())
  }
  nft.token_id = event.params.tokenId;
  nft.save();

  bid.value = event.params.bidValue;

  item.save()

  bid.valid = true;
  bid.bidId = event.params.blindBidId;
  bid.bidder = event.params.bidder.toString();
  bid.isSpecific = true;

  bid.save()
}

export function handleBlindBidAccepted(event: BlindBidAccepted): void {
  let bid = Bid.load("blindBids_"+event.params.bidder.toString()+event.params.blindBidId.toString())
  if(bid){bid.valid = false}
}

export function handleBlindBidWithdrawn(event: BlindBidWithdrawn): void {
  let bid = Bid.load("blindBids_"+event.params.bidder.toString()+event.params.blindBidId.toString())
  if(bid){bid.valid = false}
}

export function handleBidRefunded(event: BidRefunded): void {
  let bid = Bid.load("bids_"+event.params.bidder.toString()+event.params.bidId.toString())
  if(bid){bid.valid = false}
}

