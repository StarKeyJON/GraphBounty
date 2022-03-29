# GraphBounty
Create a better subgraph than me, before I do.

The Phar-Out NFT Market needs a subgraph for decentralized querying in the front-end!

I generated and coded the temp-mint contract and Pharout NFT contract subgraphs and deployed both the Rinkeby and Mainnet versions.

You can find the Rinkeby addresses of the current test contracts here:

<ul>
  <li> "rinkeby_NFTMarketAddress": "0x49A8f85d191D96211124cC4765989e393f9DFCe1"</li>
  <li> "rinkeby_MarketBidsAddress": "0xf7164522373a7bF04D63CC21611C17eB6bE117e0"</li>
  <li> "rinkeby_MarketOffersAddress": "0x8614Bae80E8Cb8bC5828DAB506EecF264EBFB032"</li>
  <li> "rinkeby_MarketTradesAddress": "0xC5fDdaAe84a6ca3C7C58Cd56228DcFC7E80E3bE9"</li>
  <li> "rinkeby_MintAddress": "0x75f65B65047e170000587D245BAeA2e70007E30d"</li>
  <li> "rinkeby_RewardsControlAddress": "0xF141FFea607d727FB7DCfb0B7fB4d143D513c5c5"</li>  
</ul>

Below is a current diagram of the marketplace for you to visualize how the marketplace will interact with each other. There is also a base example of all the entities I would like recorded. I may expand on them, feel free to improvise.
<img src="https://github.com/StarKeyJON/GraphBounty/blob/main/pharoutmarketdiagram.png" />
<img src="https://github.com/StarKeyJON/GraphBounty/blob/main/PharOutRewardsControllerDiagram.png" />
<h4>The best creator of a subgraph is determined by:</h4>
<ul>
  <li>Does include a link to a public Github with a Readme explaining any unique features or decisions made.</li>
  <li>Does index each entity according to the schema provided.(If expanded upon or adapted for different use, please explain why, although you can spare the obvious just make a note of it in the readme.)</li>
  <li>Does include indexing daily and hourly Rewards Control contract ETH holdings, ERC20 holdings, ClaimClock time and attributes(alpha, delta, omega times and total user count including total Pharout NFT holders.). To also include total dev count, dev rewards and total DAO rewards for each daily and hourly period.</li>
  <li>Is not filled with generic events or function handlers.</li>
  <li>Must listen to retarded phunk at least once while coding. https://www.youtube.com/watch?v=pHyA16xiaMQ</li>
  <li>Is finished with an adequate subgraph before I create one!</li>
  <li>Happy Hacking!</li>
  </ul>
  This would ideally be one marketplace subgraph.
  Due note, the PhamToken is a test token in place of PHUNKY, and the Mint contract will be the mainnet mint contract used to exchange PHNUNKY for PharOut NFTs.
The devs total rewards are split in half, 1/2 goes to the dev multi-sig, the remaining 1/2 gets split between devs to claim daily.
