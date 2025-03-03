type Quality = {
    highResolution: string;
    lowResolution: string;
}

export type LQIPMedia = {
    highQuality: Quality;
    lowQuality: Quality;
};

type MetaData = {
    publisher: string;
    date: string;
}

export type Item = {
    _id: string;
    thumbnails: LQIPMedia;
    content: LQIPMedia;
    title: string;
    description: string;
    metaData: MetaData;
}