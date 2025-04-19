<script>
	import { GithubIcon, LinkedinIcon, Mail } from "@lucide/svelte";
</script>
<footer class="md:h-[11vh] w-full border-t md:grid grid-cols-3 overflow-hidden flex flex-col items-center py-3 space-y-3">

    <div class="flex flex-row col-span-2 gap-10 items-center px-10">
        <a href="https://yadhukrishna.me@gmail.com">
            <Mail size={35}  class="hover:scale-110 transition-all"/>
        </a>
        <a href="https://www.linkedin.com/in/yadhu-krishna-657b8b20b/">
            <LinkedinIcon size={35}  class="hover:scale-110 transition-all"/>
        </a>
        <a href="https://github.com/yadhukrishnasm">
            <GithubIcon size={35}  class="hover:scale-110 transition-all"/>
        </a>
    </div>
    
	<p class="flex md:h-20 items-center justify-end px-10 text-neutral-700 col-span-1">
		created with &nbsp; <a href="https://svelte.dev/" class="hover:underline">svelte kit </a> &nbsp;
		by &nbsp;
		<a href="https://github.com/yadhukrishnasm" class="font-klemerDisplay text-2xl">SM</a>
	</p>
</footer>
