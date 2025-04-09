<script lang="ts">
	import '../app.css';
	let { children } = $props();

	const isActive = (route: string) => {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname;
            return path === route;
        }
	};
</script>

<div class=" h-[89vh] md:grid md:grid-cols-6">
	<nav class="font-dm-serif col-span-1 space-x-10 border-r px-5 pt-10 text-xl">
		<span><a href="/" class={`hover:underline ${isActive('/') && 'underline'}`}>Intro</a></span>
	</nav>

	<div class="col-span-5 overflow-y-auto py-10 px-20	">
		{@render children()}
	</div>
</div>

<footer class="h-[11vh] w-full border">
	<p class="flex h-20 items-center justify-end px-10 text-neutral-700">
		created with &nbsp; <a href="https://svelte.dev/" class="hover:underline">svelte kit </a> &nbsp;
		by &nbsp;
		<a href="https://github.com/yadhukrishnasm" class="font-klemerDisplay text-2xl">SM</a>
	</p>
</footer>
