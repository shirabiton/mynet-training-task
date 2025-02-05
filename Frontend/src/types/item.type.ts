import LQIPMedia from "./lqip-media.type";
import MetaData from "./meta-data.type";

type Item = {
    thumbnails: LQIPMedia;
    content: LQIPMedia;
    title: string;
    description: string;
    metaData: MetaData;
}
export default Item;