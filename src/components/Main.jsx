import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Utility function to trucate content to two sentences
const truncateContent = (content) => {
  const sentences = content.split(". ");
  if (sentences.length <= 2) {
    return content;
  }
  return sentences.slice(0, 2).join(". ") + ".";
};

const Main = () => {
  const [showContent, setShowContent] = useState(false);
  return <section></section>;
};

export default Main;
