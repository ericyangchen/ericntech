/** JSX components used in MDX files */

// animated
import { TreeContainer, Tree } from "./components/TreeList";

// extend next/image
import Image from "./components/Image";

// extend next/link
import Link from "./components/Link";
import LinkWithIcon from "./components/LinkWithIcon";

/** returns all components */
const allComponents = {
  TreeContainer,
  Tree,
  Image,
  Link,
  LinkWithIcon,
};

export const getAllMdxComponents = () => {
  return allComponents;
};
