import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { safeGetSession, supabase } }) => {
	const { session } = await safeGetSession()

	if (!session) {
		throw redirect(303, '/')
	}

	// Fetch a trivial resource - in this case, we'll just get the current user's metadata
	const { data: user, error } = await supabase.auth.getUser()

	// You could also query a Supabase table here, for example:
	// const { data: items, error } = await supabase.from('items').select('*').limit(5)

	return {
		user: user.user,
		userMetadata: user.user?.user_metadata || {},
		authenticatedAt: session.expires_at ? new Date(session.expires_at * 1000).toISOString() : 'Unknown',
	}
}
