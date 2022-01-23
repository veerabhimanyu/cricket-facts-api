import cricketFacts from "./cricketFacts.js";
let unwrappedArray = cricketFacts();

export const randomFacts = (req, res) => {
  let random = Math.floor(Math.random() * 75);
  res.send(unwrappedArray[random]);
};

export const allFacts = (req, res) => {
  res.send(unwrappedArray);
};
