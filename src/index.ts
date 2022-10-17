import { createBaratheonTree } from "./families/baratheon";
import { createBritishSuccessionTree } from "./families/britain";
import { createLannisterTree } from "./families/lannister";
import { createStarkTree } from "./families/stark";
import { listAllPeopleInTree } from "./treeListing";
// import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./solutions/solution";
import { logAllPeopleInTree, logAllPeopleInTreeWithQueue } from "./treeLogging";
import { printBanner } from "./utils/bannerUtils";
import { printPersonTreeAsAscii } from "./utils/toAsciiTree";

async function mainProgram() {
  // printBanner("BARATHEON");
  // printPersonTreeAsAscii(createBaratheonTree());

  // printBanner("STARK");
  // printPersonTreeAsAscii(createStarkTree());

  
  // printBanner("All people in STARK")
  // logAllPeopleInTree(createStarkTree());

  // Uncomment to test your work..

  // printBanner("LANNISTER");
  // printPersonTreeAsAscii(createLannisterTree());
  
  // printBanner("WITH STACK - british royals")
  // logAllPeopleInTree(createBritishSuccessionTree());
  // printBanner("WITH QUEUE - british royals")
  // logAllPeopleInTreeWithQueue(createBritishSuccessionTree());

  const britishRoyalsList = listAllPeopleInTree(createBritishSuccessionTree())
  console.log(britishRoyalsList,'length of', britishRoyalsList.length);
}

mainProgram();
