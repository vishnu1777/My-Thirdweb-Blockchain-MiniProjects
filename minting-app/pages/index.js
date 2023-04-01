import {
  ThirdwebNftMedia,
  useContract,
  useNFTs,
  useMintNFT,
  Web3Button,
} from "@thirdweb-dev/react";

export default function NFTCollectionView() {
  // Get the NFT collection using its contract address
  const { contract } = useContract(
    "0x933771f3bABB03a29a2AC79ED015748Edbe8973B"
  );

  // Load all the NFTs from the collection (with a loading flag)
  const { data: nfts, isLoading, isError } = useNFTs(contract);
  const { mutate: mintNft } = useMintNFT(contract);

  // .map over the nfts array, rendering each NFT as a div containing the media asset and name.
  return (
    <div>
      {!isLoading ? (
        <div>
          {nfts?.map((nft) => (
            <div key={nft.metadata.id.toString()}>
              <ThirdwebNftMedia
                key={nft.id}
                metadata={nft.metadata}
                height={200}
              />
              <h3>{nft.metadata.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {/* Here's where we put the next section (the mint button) */}
      <Web3Button
        contractAddress="0x933771f3bABB03a29a2AC79ED015748Edbe8973B"
        action={(contract) => {
          contract.erc721.mint({
            name: "My Nft",
            description: "This is MY Nft",
            image:
              "https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg",
          });
        }}
        height={200}
      >
        MintNft
      </Web3Button>
    </div>
  );
}
