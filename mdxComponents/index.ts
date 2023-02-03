// JSX components used in MDX files
import MyButton from "./MyButton";
import TreeList from "./TreeList";
import Image from "./Image";

const allComponents = { MyButton, TreeList, Image };

/** returns all components */
export const getAllMdxComponents = () => {
  return allComponents;
};
