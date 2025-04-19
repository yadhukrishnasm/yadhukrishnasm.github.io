<script lang="ts">
    import '../app.css';
    import Footer from './footer.svelte';
    import { page } from '$app/stores'; 
    let { children } = $props();

    const isActive = (route: string) => {
        return $page.url.pathname === route;
    };
</script>

<div class="md:h-[89vh] md:grid md:grid-cols-6">
    <nav class="font-dm-serif col-span-1 space-x-10 border-r px-7 md:pt-10 pt-5 text-xl md:flex flex-col gap-3">
        <span><a href="/" class={`hover:underline ${isActive('/') && 'underline'}`}>Intro</a></span>
        <span><a href="/history" class={`hover:underline ${isActive('/history') && 'underline'}`}>History</a></span>
        <span><a href="/works" class={`hover:underline ${isActive('/works') && 'underline'}`}>Works</a></span>
    </nav>

    <div class="col-span-5 overflow-y-auto py-10 px-10 md:px-20 ">
        {@render children()}
    </div>
</div>

<Footer />
