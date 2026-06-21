<script lang="ts">
	import '../app.css';
	import { GithubIcon, LinkedinIcon, Mail } from '@lucide/svelte';
	import { page } from '$app/stores';

	let { children } = $props();

	const isActive = (route: string) => $page.url.pathname === route;
</script>

<div class="mx-auto max-w-5xl px-6 py-10 font-body md:px-10">
	<div class="grid grid-cols-1 gap-10 md:grid-cols-[230px_1fr]">
		<!-- Sidebar -->
		<aside class="md:sticky md:top-10 md:self-start">
			<img
				src="/images/img.webp"
				alt="Yadhu Krishna"
				class="h-56 w-full border border-neutral-400 object-cover object-top"
			/>
			<h1 class="mt-4 text-xl font-bold leading-tight">Yadhu Krishna S M</h1>
			<p class="mt-1 text-sm text-neutral-600">Software Engineer at Nysa Clan</p>
			<p class="text-sm text-neutral-600">Kozhikode, Kerala</p>

			<nav class="mt-5 flex gap-4 border-t border-neutral-300 pt-4 text-sm">
				<a href="/" class:font-bold={isActive('/')}>home</a>
				<a href="/blog" class:font-bold={isActive('/blog')}>blog</a>
				<a href="/resume" class:font-bold={isActive('/resume')}>resume</a>
			</nav>

			<div class="mt-5 flex gap-4">
				<a href="mailto:yadhu944krishna@gmail.com" aria-label="Email" class="no-underline">
					<Mail size={18} />
				</a>
				<a href="https://www.linkedin.com/in/yadhu-krishna-657b8b20b/" aria-label="LinkedIn" class="no-underline">
					<LinkedinIcon size={18} />
				</a>
				<a href="https://github.com/yadhukrishnasm" aria-label="GitHub" class="no-underline">
					<GithubIcon size={18} />
				</a>
			</div>
		</aside>

		<!-- Content -->
		<main>
			{@render children()}
		</main>
	</div>
</div>
