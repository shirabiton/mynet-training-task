import { FC, useEffect, useState } from "react";
import { LQIPMedia } from "../../../../Libs/src/types/DB/item.type";
import useStyles from "./styles";

const ItemImage: FC<{ image: LQIPMedia; title: string }> = ({
  image,
  title,
}) => {
  const [baseUrl, setBaseUrl] = useState(image.lowQuality);
  const [isLoaded, setIsLoaded] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const img = new Image();
    img.src = image.highQuality.lowResolution;
    img.onload = function () {
      setBaseUrl(image.highQuality);
      setIsLoaded(true);
    };
    
    return () => {
      img.onload = null;
    };
  }, [image]);

  return (
    <img
      src={baseUrl.lowResolution} // default url
      srcSet={`${baseUrl.lowResolution} 400w, ${baseUrl.highResolution} 800w`}
      alt={title}
      title={title}
      className={!isLoaded ? classes.loading : ""}
    />
  );
};
export default ItemImage;
