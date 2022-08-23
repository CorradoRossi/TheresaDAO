import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(process.env.EDITION_ADDRESS);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Theresa Crown",
        description: "This NFT provides access to TheresaDAO!",
        image: readFileSync("scripts/assets/trinity.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();