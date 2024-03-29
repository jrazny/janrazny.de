import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
    token: process.env.SANITY_API_TOKEN,
    projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
    apiVersion: "2022-03-10",
    useCdn: "production",
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(config);
export const urlFor = (source) => builder.image(source);