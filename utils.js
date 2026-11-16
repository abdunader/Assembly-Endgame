import { words } from "./words";

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export function getFarewellText(language) {
  const options = [
    `Farewell, ${language}`,
    `We'll miss you, ${language}`,
    `Oh no, not ${language}!`,
    `${language} bites the dust`,
    `Gone but not forgotten, ${language}`,
    `The end of ${language} as we know it`,
    `Off into the sunset, ${language}`,
    `${language}, it's been real`,
    `${language}, your watch has ended`,
    `${language} has left the building`,
    `Signal lost: ${language} is offline.`,
    `${language} has left the build pipeline.`,
    `${language} has entered its final commit.`,
    `Deploying a fond farewell to ${language}.`,
    `${language} has been archived with honors.`,
    `The debugger could not save ${language}.`,
    `${language} has gracefully exited with code 0.`,
    `A moment of silence for ${language}.`,
    `${language} has been retired from the stack.`,
    `The source code remembers ${language}.`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
