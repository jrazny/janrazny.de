import { defineField, defineType } from "sanity"

export default defineType(
{
        name: "stack",
        title: "Stack",
        type: "document",
        fields: [
            defineField({
                name: "title",
                title: "Stack Titel",
                type: "string",
            }),
            defineField({
                name: "skill",
                title: "Ausprägung der Programmiersprache",
                type: "number",
            }),
            defineField({
                name: "mainImage",
                title: "Bild des Videos",
                type: "image",
                options: {
                    hotspot: true,
                },
            }),
        ],
    }
)