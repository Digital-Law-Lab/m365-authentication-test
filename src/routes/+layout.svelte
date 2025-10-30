<script lang="ts">
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	let { data, children } = $props()

	onMount(() => {
		const { data: authListener } = data.supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => {
			authListener?.subscription.unsubscribe()
		}
	})
</script>

{@render children?.()}
