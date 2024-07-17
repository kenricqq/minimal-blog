import { db, Blog } from 'astro:db'

export default async function seed() {
    await db.insert(Blog).values({
        title: 'why md',
        description: 'hi'
    })
}
