<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()

	async function signInWithAzure() {
		const { error } = await data.supabase.auth.signInWithOAuth({
			provider: 'azure',
			options: {
				scopes: 'email',
				redirectTo: `${window.location.origin}/auth/callback`,
			},
		})
		if (error) {
			console.error('Error logging in:', error.message)
		}
	}

	async function signOut() {
		const { error } = await data.supabase.auth.signOut()
		if (error) {
			console.error('Error signing out:', error.message)
		}
	}
</script>

<main>
	<div class="container">
		<h1>M365 Authentication Test</h1>
		<p>Demonstration of SvelteKit app with Supabase and M365 (Azure) authentication</p>

		{#if data.session}
			<div class="user-info">
				<h2>Welcome!</h2>
				<p>You are logged in as: <strong>{data.user?.email || 'Unknown'}</strong></p>
				<p>User ID: {data.user?.id}</p>
				
				<div class="actions">
					<a href="/protected">View Protected Resource</a>
					<button onclick={signOut}>Sign Out</button>
				</div>
			</div>
		{:else}
			<div class="login">
				<h2>Please sign in</h2>
				<button onclick={signInWithAzure}>Sign in with Microsoft 365</button>
			</div>
		{/if}
	</div>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
	}

	.container {
		background: white;
		padding: 3rem;
		border-radius: 12px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
		max-width: 500px;
		width: 90%;
	}

	h1 {
		color: #333;
		margin-bottom: 0.5rem;
		font-size: 2rem;
	}

	h2 {
		color: #555;
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	p {
		color: #666;
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.user-info {
		text-align: left;
	}

	.user-info p strong {
		color: #667eea;
	}

	.login {
		text-align: center;
	}

	button {
		background: #0078d4;
		color: white;
		border: none;
		padding: 12px 24px;
		border-radius: 6px;
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.2s;
		font-weight: 500;
	}

	button:hover {
		background: #006cbd;
	}

	.actions {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
		flex-direction: column;
	}

	.actions a {
		background: #667eea;
		color: white;
		padding: 12px 24px;
		border-radius: 6px;
		text-decoration: none;
		text-align: center;
		transition: background 0.2s;
		font-weight: 500;
	}

	.actions a:hover {
		background: #5568d3;
	}

	.actions button {
		background: #dc3545;
	}

	.actions button:hover {
		background: #c82333;
	}
</style>
