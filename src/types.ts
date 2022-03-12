import { IGatsbyImageData } from "gatsby-plugin-image";
export type Story = {
  id: string;
  name: string;
  category: string;
  date?: string;
  url: string;
  thumbnail: {
    id: string;
    childImageSharp: {
      image: IGatsbyImageData;
    };
  };
};
