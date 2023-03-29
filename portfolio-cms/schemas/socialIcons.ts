import { defineField, defineType } from "sanity"

export default defineType(
{
        name: "socialIcons",
        title: "Soziale Icons",
        type: "document",
        fields: [
            defineField({
                name: "name",
                title: "Name",
                type: "string",
            }),
            defineField({
                name: "url",
                title: "Url",
                type: "string",
            }),
        ],
    }
)