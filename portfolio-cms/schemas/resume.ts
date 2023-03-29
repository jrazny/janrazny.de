import { defineField, defineType } from "sanity"

export default defineType(
{
        name: "resume",
        title: "Lebenslauf",
        type: "document",
        fields: [
            defineField({
                name: "year",
                title: "Jahr",
                type: "string",
            }),
            defineField({
                name: "description",
                title: "Was ist in diesem Jahr passiert",
                type: "text",
            }),
        ],
    }
)