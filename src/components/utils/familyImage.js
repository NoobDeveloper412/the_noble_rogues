import lejaSrc from "images/Chapter2/leja2.png";
import dadSrc from "images/Chapter2/dad.png";
import momSrc from "images/Chapter2/mom.png";
import bigBrotherSrc from "images/Chapter2/big-brother.png";
import littleBrotherSrc from "images/Chapter2/little-brother.png";
import grandmaSrc from "images/Chapter2/grandma.png";

export const familyImages = [
  {
    src: dadSrc,
    alt: "",
    class: "absolute left-0 bottom-0 mx-auto w-62 sm:w-44",
    captionTitle: "Dad",
    content: [
      "Always tense",
      "Does not like arguments",
      "Does not belong to any political party.",
    ],
  },
  {
    src: bigBrotherSrc,
    alt: "",
    class: "absolute bottom-0 left-1/5 mx-auto w-62 sm:w-44",
    captionTitle: "Aaron",
    content: [
      "A dreamer",
      "He exercises in the morning.",
      'The most common expression is "what if"',
    ],
  },
  {
    src: grandmaSrc,
    alt: "",
    class: "absolute bottom-0 right-1/5 mx-auto w-62 sm:w-44",
    captionTitle: "Grandma",
    content: [
      "Tells a lot of stories",
      "Makes the best candies.",
      "Makes the best candies.",
    ],
  },
  {
    src: momSrc,
    alt: "",
    class: "absolute bottom-0 right-0 mx-auto w-62 sm:w-44",
    captionTitle: "Mom",
    content: [
      "Sings while cooking.",
      "Has a collection of records.",
      'Most common word - "eat"',
    ],
  },
  {
    src: lejaSrc,
    alt: "",
    class: "absolute bottom-0 left-0 right-0 mx-auto w-48 sm:w-44",
    captionTitle: "Leah",
    content: [
      "Wants a bicycle for her birthday",
      "Likes watching people",
      'Most common word - "why"',
    ],
  },
  {
    src: littleBrotherSrc,
    alt: "",
    class: "absolute bottom-0 right-1/10 mx-auto w-44 sm:w-44",
    captionTitle: "Tolik",
    content: [
      "Does not like cucumbers",
      "Dreams of having a puppy",
      'Grandma’s favorite',
    ],
  },
];
