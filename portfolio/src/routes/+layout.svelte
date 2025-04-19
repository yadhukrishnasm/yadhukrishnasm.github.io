<script lang="ts">
    import '../app.css';
    import Footer from './footer.svelte';
    import { page } from '$app/stores'; 
    import { onMount } from 'svelte';

    let { children } = $props();
    let isLoading = $state(true); // Loading state

    const isActive = (route: string) => {
        return $page.url.pathname === route;
    };

    // Wait for all assets (images, fonts) to load
    onMount(() => {
        const handleLoad = () => {
            isLoading = false; // Hide the loader once everything is loaded
        };

        // Check if the document is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Cleanup event listener
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    });
</script>

{#if isLoading}
    <!-- Loading Animation -->
    <div class="fixed inset-0 flex items-center justify-center bg-yellow-50  z-50">
        <p class="absolute bottom-10 right-10 text-7xl font-black font-mono">LOADING...</p>
    </div>
{:else}
    <!-- Main Content -->
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
{/if}
