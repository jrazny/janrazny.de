import { sanityClient } from "../lib/sanity";
import { groq } from "next-sanity";

export const fetchSocialIcons = async () => {
    const query = groq`
    *[_type=="socialIcons"] {
        _id, name, url
      }
    `;

    const socialIcons = await sanityClient.fgetch(query);
    return socialIcons;
}