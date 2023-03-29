import { defineField, defineType } from "sanity"

export default defineType(
{
        name: "project",
        title: "Projekt",
        type: "document",
        fields: [
            defineField({
                name: "title",
                title: "Titel des Projekts",
                type: "url",
            }),
            defineField({
                name: "url",
                title: "Url des Projekts",
                type: "url",
            }),
            defineField({
                name: "mainImage",
                title: "Bild des Videos",
                type: "image",
                options: {
                    hotspot: true,
                },
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