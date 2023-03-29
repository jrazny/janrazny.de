import { defineField, defineType } from "sanity"

export default defineType(
{
        name: "generalCategory",
        title: "General Category",
        type: "document",
        fields: [
            defineField({
                name: "title",
                title: "Titel",
                type: "string",
            }),
            defineField({
                name: "description",
                title: "Beschreibung",
                type: "text",
            }),
            defineField({
                name: "color",
                title: "Farbe",
                type: "string",
            }),
            defineField({
                name: "stacks",
                title: "Stack",
                type: "array",
                of:  [{type: 'reference', to: {type: 'stack'}}],
            }),
        ],
    }
)