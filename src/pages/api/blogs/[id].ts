import type { APIRoute } from 'astro'
import { db, Comment, eq } from 'astro:db'

export const DELETE: APIRoute = async (ctx) => {
    await db.delete(Comment).where(eq(Comment.author, ctx.params.author || ''))
    return new Response(null, { status: 204 })
}
