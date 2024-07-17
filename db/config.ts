import { defineDb, defineTable, column } from 'astro:db'

const Blog = defineTable({
    columns: {
        title: column.text(),
        description: column.text()
    }
})

export default defineDb({
    tables: { Blog }
})
