// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set , get, child} from "firebase/database";
import { getStorage, getDownloadURL, ref as sref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdpchf45b6z7_wEa-E3vO_fv0JuEwK1dw",
  authDomain: "hear-me-out-785e2.firebaseapp.com",
  projectId: "hear-me-out-785e2",
  storageBucket: "hear-me-out-785e2.appspot.com",
  messagingSenderId: "994012007554",
  appId: "1:994012007554:web:35d88c91c2fcdbcd4bf89b",
  databaseURL: "https://hear-me-out-785e2-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage();
const dbRef = ref(db);

function createMinimalPairNode(id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, soundPair, soundType, positionInWord) {
  return {
    id,
    words: [
      {
        word: word1,
        photo_paths: word1PhotoPaths,
        man_sound_path: word1ManSoundPath,
        woman_sound_path: word1WomanSoundPath,
      },
      {
        word: word2,
        photo_paths: word2PhotoPaths,
        man_sound_path: word2ManSoundPath,
        woman_sound_path: word2WomanSoundPath,
      }
    ],
    sound_pair: soundPair,
    sound_type: soundType,
    position_in_word: positionInWord,
  };
}

function writeWordData(id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, soundPair, soundType, positionInWord) {
    const reference = ref(db, 'words/' + soundType + '/' + id );
    const newNode = createMinimalPairNode(id, word1, word1PhotoPaths, word1ManSoundPath, word1WomanSoundPath, word2, word2PhotoPaths, word2ManSoundPath, word2WomanSoundPath, soundPair, soundType, positionInWord);
    set (reference, newNode);        
}

// writeWordData("1", "bat",
// "bat_photo.jpg",
// "bat_man_sound.mp3",
// "bat_woman_sound.mp3",
// "pat",
// "pat_photo.jpg",
// "pat_man_sound.mp3",
// "pat_woman_sound.mp3",
// "b-p",
// "constant22",
// "initial");

async function getAllMinimalPairs() {  
  try {
    const snapshot = await get(child(dbRef, `words`));
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
}

// const minimalPairs = getAllMinimalPairs();

// // Function to filter minimal pairs by sound type
// function filterPairsBySoundType(minimalPairs, soundType) {
//   return minimalPairs.filter(pair => pair.sound_type === soundType);
// }

// // Function to filter minimal pairs by position in word
// function filterPairsByPosition(minimalPairs, position) {
//   return minimalPairs.filter(pair => pair.position_in_word === position);
// }

// // Function to filter minimal pairs by a specific pair of sounds
// function filterPairsBySoundPair(minimalPairs, soundPair) {
//   return minimalPairs.filter(pair =>
//     pair.sound_pair === soundPair
//   );
// }

// // Function to get minimal pairs based on sound pair, sound type, and position in word
// async function getPairsByCriteria(soundType, soundPair, positionInWord) {
//     try {
//       const snapshot = await databaseRef.once('value');
//       const minimalPairsData = snapshot.val();

//       if (minimalPairsData) {
//         const minimalPairs = Object.values(minimalPairsData);   

//          // Filter minimal pairs based on provided criteria
//       const filteredPairs = minimalPairs.filter(pair =>
//         (soundPair === null || pair.sound_pair === soundPair) &&
//         (soundType === null || pair.sound_type === soundType) &&
//         (positionInWord === null || pair.position_in_word === positionInWord)
//       );

//         return filteredPairs;
//       } else {
//         throw new Error('No minimal pairs found.');
//       }
//     } catch (error) {
//       console.error('Error getting minimal pairs:', error);
//       return [];
//     }
//   }

// Function to download an image from Firebase Storage
async function downloadImageFromStorage(imageUrl) {
  try {    
    const ref = sref(storage, imageUrl);
    const response = await getDownloadURL(ref);
    console.log("response: " + response.toString());

    return response;

  } catch (error) {
    console.error('Error downloading image:', error);
    return null;
  }
}

// // // Call the functions and log the filtered minimal pairs
// //
// // (async () => {
// //   const allPairs = await getAllMinimalPairs();
// //   const soundFilteredPairs = filterPairsBySoundType(allPairs, desiredSoundType);
// //   const positionFilteredPairs = filterPairsByPosition(soundFilteredPairs, desiredPosition);
// //   const soundPairFilteredPairs = filterPairsBySoundPair(positionFilteredPairs, desiredSoundPair);

// //   if (soundPairFilteredPairs.length > 0) {
// //     console.log(`Retrieved ${soundPairFilteredPairs.length} minimal pairs with sound type ${desiredSoundType}, position ${desiredPosition}, and sound pair ${desiredSoundPair}:`, soundPairFilteredPairs);
// //   } else {
// //     console.log(`No minimal pairs found with sound type ${desiredSoundType}, position ${desiredPosition}, and sound pair ${desiredSoundPair}.`);
// //   }
// // })();

export { downloadImageFromStorage, getAllMinimalPairs };