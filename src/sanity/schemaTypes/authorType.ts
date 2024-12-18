import { defineArrayMember, defineField, defineType } from "sanity";

export const authorType = defineType({
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		defineField({
			name: "name",
			type: "string"
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: {
				source: "name"
			}
		}),
		defineField({
			name: "image",
			type: "image",
			options: {
				hotspot: true
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text"
				}
			]
		}),
		defineField({
			name: "bio",
			type: "array",
			of: [
				defineArrayMember({
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: []
				})
			]
		})
	],
	preview: {
		select: {
			title: "name",
			media: "image"
		}
	}
});