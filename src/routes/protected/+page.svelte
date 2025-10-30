<script lang="ts">
	import type { PageData } from './$types'

	let { data }: { data: PageData } = $props()
</script>

<main>
	<div class="container">
		<h1>Protected Resource</h1>
		<p>This page is only accessible to authenticated users.</p>

		<div class="resource-card">
			<h2>User Information (from Supabase)</h2>
			
			<div class="info-grid">
				<div class="info-item">
					<span class="label">Email:</span>
					<span class="value">{data.user?.email || 'N/A'}</span>
				</div>

				<div class="info-item">
					<span class="label">User ID:</span>
					<span class="value">{data.user?.id || 'N/A'}</span>
				</div>

				<div class="info-item">
					<span class="label">Provider:</span>
					<span class="value">{data.user?.app_metadata?.provider || 'N/A'}</span>
				</div>

				<div class="info-item">
					<span class="label">Session Expires:</span>
					<span class="value">{data.authenticatedAt}</span>
				</div>
			</div>

			<details>
				<summary>Full User Metadata</summary>
				<pre>{JSON.stringify(data.userMetadata, null, 2)}</pre>
			</details>

			<details>
				<summary>Full User Object</summary>
				<pre>{JSON.stringify(data.user, null, 2)}</pre>
			</details>
		</div>

		<div class="actions">
			<a href="/">← Back to Home</a>
		</div>
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
		padding: 2rem 0;
	}

	.container {
		background: white;
		padding: 3rem;
		border-radius: 12px;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
		max-width: 800px;
		width: 90%;
	}

	h1 {
		color: #333;
		margin-bottom: 0.5rem;
		font-size: 2rem;
	}

	h2 {
		color: #555;
		margin-bottom: 1.5rem;
		font-size: 1.3rem;
	}

	p {
		color: #666;
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.resource-card {
		background: #f8f9fa;
		padding: 2rem;
		border-radius: 8px;
		margin-bottom: 2rem;
	}

	.info-grid {
		display: grid;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.info-item {
		display: grid;
		grid-template-columns: 150px 1fr;
		gap: 1rem;
		padding: 0.75rem;
		background: white;
		border-radius: 6px;
		border-left: 3px solid #667eea;
	}

	.label {
		font-weight: 600;
		color: #555;
	}

	.value {
		color: #333;
		word-break: break-all;
	}

	details {
		margin-top: 1rem;
		background: white;
		padding: 1rem;
		border-radius: 6px;
	}

	summary {
		cursor: pointer;
		font-weight: 600;
		color: #667eea;
		padding: 0.5rem;
	}

	summary:hover {
		color: #5568d3;
	}

	pre {
		background: #f1f3f5;
		padding: 1rem;
		border-radius: 4px;
		overflow-x: auto;
		margin-top: 1rem;
		font-size: 0.875rem;
		line-height: 1.5;
	}

	.actions {
		display: flex;
		gap: 1rem;
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
</style>
