import {
  ConnectWallet,
  useAddress,
  useUser,
  useMetamask,
  useLogin,
  useLogout,
} from "@thirdweb-dev/react";
import { list } from "postcss";

export default function NFTCollectionView() {
  // Get the NFT collection using its contract address
  // const { contract: marketplaceContract } = useContract(
  //   "0x933771f3bABB03a29a2AC79ED015748Edbe8973B",
  //   "marketplace"
  // );

  // async function buyNft() {
  //   const listingId = 0;
  //   const quantityDesired = 1;
  //   await marketplaceContract.buyoutListing(listingId, quantityDesired);
  // }
  const address = useAddress();
  const connect = useMetamask();

  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();

  return (
    <div>
      {address ? (
        <>
          <ConnectWallet />
          <button onClick={login}>Login with Wallet</button>
          <button onClick={logout}>Logout</button>
          <pre>User: {JSON.stringify(user || null)}</pre>
        </>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}
