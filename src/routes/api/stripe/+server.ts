import type { RequestHandler } from '@sveltejs/kit'
import { STRIPE_TEST_KEY } from '$env/static/private'
import Stripe from 'stripe'

const stripe = new Stripe(STRIPE_TEST_KEY, {
	apiVersion: '2022-08-01'
})

export const POST: RequestHandler = async ({ request }) => {
	
	const host = new URL(request.url).host
	
	const res = await request.formData()

	const priceId = res.get('priceId')


	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: priceId,
				quantity: 1
			}
		],

		mode: 'subscription',
		success_url: `http://calendly.com/designee/30minute`,
		cancel_url: `http://${host}/`
	})

	return Response.redirect(session.url, 303)
}
