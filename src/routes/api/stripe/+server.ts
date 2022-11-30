import { redirect, error, type RequestHandler } from '@sveltejs/kit'
import { STRIPE_KEY } from '$env/static/private'
import Stripe from 'stripe'

const stripe = new Stripe(STRIPE_KEY, {
	apiVersion: '2022-08-01'
})

export const POST: RequestHandler = async ({ request }) => {
	const host = new URL(request.url).host

	const formData = await request.formData()
	const data = Object.fromEntries(formData.entries())

	const priceId = data.priceId as string

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

	if (session?.url) {
		throw redirect(301 ,session.url)
	} else {
		throw error(500, 'Something went wrong')
	}
}
