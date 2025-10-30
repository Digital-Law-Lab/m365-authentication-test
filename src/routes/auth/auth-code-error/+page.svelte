<main>
	<div class="container">
		<h1>Authentication Error</h1>
		<p>There was an error during the authentication process.</p>
		<p>Please try again or contact support if the issue persists.</p>
		<a href="/">Return to Home</a>
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
		text-align: center;
	}

	h1 {
		color: #dc3545;
		margin-bottom: 1rem;
		font-size: 2rem;
	}

	p {
		color: #666;
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	a {
		display: inline-block;
		background: #667eea;
		color: white;
		padding: 12px 24px;
		border-radius: 6px;
		text-decoration: none;
		margin-top: 1rem;
		transition: background 0.2s;
		font-weight: 500;
	}

	a:hover {
		background: #5568d3;
	}
</style>
