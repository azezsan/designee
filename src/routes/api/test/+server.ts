import type { RequestHandler } from '../stripe/$types'

export const GET: RequestHandler = async () => {
	return new Response('Hello world!')
}
