# GraphBounty
Create a better subgraph than me, before I do.

The Phar-Out NFT Market needs a subgraph for decentralized querying in the front-end!

I generated and coded the temp-mint contract and Pharout NFT contract subgraphs and deployed both the Rinkeby and Mainnet versions here:
<ul>
  <li>https://thegraph.com/studio/subgraph/pharout-temp-mint-mainnet/</li>
  <li>https://thegraph.com/studio/subgraph/pharout-temp-mint/</li>
</ul>
You can find the Rinkeby addresses of the current test contracts here:

<ul>
  <li>"rinkeby_MarketBidsAddress": "0x58Cf70baCd7e754161f604228bbeC1C48b619893"</li>
  <li> "rinkeby_MarketCollectionsAddress": "0xAe042E24C6530A8c9f4d1535aBbF9635556bCFE9"</li>
  <li> "rinkeby_MarketOffersAddress": "0x92A39E24935Ced66684faaffA9b4B3262419c597"</li>
  <li> "rinkeby_MarketRoleProviderAddress": "0x0dc4b15f3dB2bDcCf7f577D45e388279386126D0"</li>
  <li> "rinkeby_MarketTradesAddress": "0xeD08820e94755dC30E161351427d2143Ef385c86"</li>
  <li> "rinkeby_MintAddress": "0x585c3Efea4554Aa4148ea916dC17DA8Bd1A49634"</li>
  <li> "rinkeby_NFTMarketAddress": "0xB8C9bB7C6D9eb97e31E9D1dBb6D15279dB982377"</li>
  <li> "rinkeby_OwnerProxyAddress": "0x531120563Dc04bE4b8dC0E167f63EE520bd2a17B"</li>
  <li> "rinkeby_PhamTokenAddress": "0xA70C63dA41263cEb34cd66494Ebf95f7140312E1"</li>
  <li>  "rinkeby_RewardsControlAddress": "0xD89099C8310D2215195cbd8Ff5DBf35FD110100E"</li>  
</ul>

I will upload a current diagram of the marketplace interactions for you to visualize how the marketplace will interact with each other, as well as a base example of all the entities I would like recorded.
<img src="https://github.com/StarKeyJON/GraphBounty/blob/main/marketplaceDiagramFin.png" />
<h4>The best creator of a subgraph is determined by:</h4>
<ul>
  <li>Does include a link to a public Github with a Readme explaining any unique features or decisions made.</li>
  <li>Does index each entity according to the schema provided.(If expanded upon or adapted for different use, please explain why.)</li>
  <li>Does include indexing daily and hourly Rewards Control contract ETH holdings, ERC20 holdings, ClaimClock time and attributes(alpha, delta, omega times and total user count including total Pharout NFT holders.). To also include total dev count, dev rewards and total DAO rewards for each daily and hourly period.</li>
  <li>Is not filled with generic events or function handlers.</li>
  <li>Must listen to retarded phunk at least once while coding. https://www.youtube.com/watch?v=pHyA16xiaMQ</li>
  <li>Is finished with an adequate subgraph before I create one!</li>
  <li>Happy Hacking!</li>
  </ul>
  This would ideally be one marketplace subgraph.
  Due note, the PhamToken is a test token in place of PHUNKY, and the Mint contract will be the mainnet mint contract used to exchange PHNUNKY for PharOut NFTs.
