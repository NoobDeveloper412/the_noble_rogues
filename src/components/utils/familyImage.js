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
    captionTitle: "Tėtis",
    content: [
      "Visada pasitempęs",
      "Nemėgsta ginčų",
      "Nepriklauso jokiai politinei partijai.",
    ],
  },
  {
    src: bigBrotherSrc,
    alt: "",
    class: "absolute bottom-0 left-1/5 mx-auto w-62 sm:w-44",
    captionTitle: "Aronas",
    content: [
      "Svajokis",
      "Rytais daro mankštą.",
      'Dažniausias posakis - "o jeigu"',
    ],
  },
  {
    src: grandmaSrc,
    alt: "",
    class: "absolute bottom-0 right-1/5 mx-auto w-62 sm:w-44",
    captionTitle: "Močiutė",
    content: [
      "Moka daug pasakų",
      "Verda puikiausius saldainius.",
      'Verda puikiausius saldainius',
    ],
  },
  {
    src: momSrc,
    alt: "",
    class: "absolute bottom-0 right-0 mx-auto w-62 sm:w-44",
    captionTitle: "Mama",
    content: [
      "Dainuoja gamindama maistą.",
      "Turi plokštelių kolekciją.",
      'Dažniausias žodis - "valgyk"',
    ],
  },
  {
    src: lejaSrc,
    alt: "",
    class: "absolute bottom-0 left-0 right-0 mx-auto w-48 sm:w-44",
    captionTitle: "Lėja",
    content: [
      "Gimtadieniui nori dviračio",
      "Mėgsta stebėti žmones",
      'Dažniausias žodis - "kodėl"',
    ],
  },
  {
    src: littleBrotherSrc,
    alt: "",
    class: "absolute bottom-0 right-1/10 mx-auto w-44 sm:w-44",
    captionTitle: "Tolikas",
    content: [
      "Nemėgsta agurkų",
      "Svajoja turėti šuniuką",
      'Močiutės lepūnėlis',
    ],
  },
];