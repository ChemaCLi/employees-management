import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request }) => {
  const body = await request.json()
  return new Response(
    JSON.stringify({
      data: []
    }),
    { status: 200 }
  )
}
