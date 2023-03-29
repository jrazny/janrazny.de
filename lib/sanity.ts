import { createClient } from "next-sanity";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const config = {
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
    token: process.env.SANITY_API_TOKEN,
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    apiVersion: "2022-03-10",
    useCdn: "production",
};

export const sanityClient = createClient(config);
