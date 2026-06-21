<svelte:head>
	<title>Yadhu Krishna S M — Maker &amp; Frontend Engineer</title>
	<meta
		name="description"
		content="Yadhu Krishna S M — a maker and frontend engineer at Nysa Clan, embracing the beauty of the uncomplicated. Portfolio, projects, and resume."
	/>
	<meta property="og:title" content="Yadhu Krishna S M — Maker &amp; Frontend Engineer" />
	<meta
		property="og:description"
		content="Embracing the beauty of the uncomplicated. Maker and frontend engineer at Nysa Clan."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/images/img.webp" />
</svelte:head>

<div class="space-y-12">
	<!-- Hook -->
	<section>
		<p class="text-2xl leading-snug sm:text-3xl">Embracing the beauty of the uncomplicated.</p>
		<p class="mt-4 leading-relaxed text-neutral-700">
			I'm a maker first, a frontend engineer for now &mdash; software is just where I happen to be
			building right now.
		</p>
		<p class="mt-4 leading-relaxed text-neutral-700">
			I currently work at <a href="https://nysaclan.com/">Nysa Clan</a>, and I'm doing an MCA
			alongside it as a distance student. Most of what I build is for other people &mdash; clients,
			a job, a project that needed doing &mdash; and the things I actually want to build for myself
			are still sitting in the queue.
		</p>
		<p class="mt-4 leading-relaxed text-neutral-700">
			I've been writing TypeScript and JavaScript for about two years now &mdash; mostly React and
			React Native, with some Next.js, SvelteKit, and Remix along the way. Nothing I'd call a
			specialty, just whatever the project needed.
		</p>
		<p class="mt-4 leading-relaxed text-neutral-700">
			I'm mostly frontend. I haven't written a ton of backend code, but I write some when it's
			needed and know my way around it. If I get to choose, I reach for Go &mdash; I'm slowly
			picking it up these days.
		</p>
	</section>

	<!-- Projects as a plain list, in order -->
	<section class="space-y-6">
		<h2 class="border-b border-neutral-400 pb-1 text-lg font-bold text-neutral-800">Things I've built</h2>

		<div class="space-y-6">
			<div>
				<div class="flex flex-wrap items-baseline gap-2">
					<h3 class="font-bold">Trace Your Data</h3>
					<span class="text-sm text-neutral-500">2026 &mdash; prototype</span>
				</div>
				<p class="mt-1 leading-relaxed text-neutral-700">
					A graph view of a frontend codebase &mdash; not just the component tree, but every
					connection in the project: the kind of thing you'd see if you ctrl-clicked through
					every link in a React app and laid the whole trail out at once.
				</p>
				<a href="https://trace-your-data.vercel.app/" class="text-sm">trace-your-data.vercel.app</a>
			</div>

			<div>
				<div class="flex flex-wrap items-baseline gap-2">
					<h3 class="font-bold">Service Bill</h3>
					<span class="text-sm text-neutral-500">2026 &mdash; ongoing</span>
				</div>
				<p class="mt-1 leading-relaxed text-neutral-700">
					A service billing app built specifically for authorized service centers &mdash;
					built around how they actually bill and track repairs. About to start a test run.
				</p>
			</div>

			<div>
				<div class="flex flex-wrap items-baseline gap-2">
					<h3 class="font-bold">Namaste Service</h3>
					<span class="text-sm text-neutral-500">2026 &mdash; ongoing</span>
				</div>
				<p class="mt-1 leading-relaxed text-neutral-700">
					A system built to bring transparency to after-sales product servicing, connecting
					every party involved in the process. It includes a customer app for registering
					products, raising service requests, and tracking updates; a service-center panel for
					managing requests by pincode, with basic HR and accounting; a technician app for
					handling jobs and updating status with file uploads; a dealer app for raising service
					requests and demo calls; and a central admin panel for onboarding and managing service
					centers. I work across the frontend for all of it.
				</p>
			</div>

			<div>
				<div class="flex flex-wrap items-baseline gap-2">
					<h3 class="font-bold">SalesGo</h3>
					<span class="text-sm text-neutral-500">2025</span>
				</div>
				<p class="mt-1 leading-relaxed text-neutral-700">
					An admin panel plus a React Native mobile app with geofencing for delivery staff,
					inventory and pricing tracking, and bill generation.
				</p>
			</div>

			<div>
				<div class="flex flex-wrap items-baseline gap-2">
					<h3 class="font-bold">Chithram</h3>
					<span class="text-sm text-neutral-500">2024</span>
				</div>
				<p class="mt-1 leading-relaxed text-neutral-700">
					A small experiment with SvelteKit and GSAP, just to try out some animation and
					transitions.
				</p>
			</div>

			<div>
				<div class="flex flex-wrap items-baseline gap-2">
					<h3 class="font-bold">P2P Chat</h3>
					<span class="text-sm text-neutral-500">2024</span>
				</div>
				<p class="mt-1 leading-relaxed text-neutral-700">
					Built solo for a hackathon &mdash; a peer-to-peer chat app over WebRTC with end-to-end
					encryption, with a small AI add-on that tries to pick up on emotional cues and suggest
					support.
				</p>
				<a href="https://github.com/yadhukrishnasm/p2pchat" class="text-sm">github</a>
			</div>
		</div>
	</section>

	<!-- Things waiting in the queue -->
	<section class="space-y-6">
		<h2 class="border-b border-neutral-400 pb-1 text-lg font-bold text-neutral-800">Things I want to build</h2>

		<div>
			<h3 class="font-bold">3D editor for dental clinics</h3>
			<p class="mt-1 leading-relaxed text-neutral-700">
				A web-based editor for modeling tooth caps and similar work, so smaller dental clinics
				can do this on any machine without expensive specialized software, and just send clients
				a link to see what the final result will look like.
			</p>
		</div>
	</section>

	<!-- Experience as a compact timeline, not bullet blocks -->
	<section class="space-y-4">
		<h2 class="border-b border-neutral-400 pb-1 text-lg font-bold text-neutral-800">Where I've worked</h2>
		<div class="space-y-3">
			<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
				<span class="w-32 flex-shrink-0 text-sm text-neutral-500">now &mdash; ~10 mo</span>
				<p>
					<span class="font-semibold">Software Engineer, Nysa Clan</span> &mdash; started as an
					intern, then joined full-time. Small team, working directly with clients. Shipped a
					Shopify fulfillment app and worked a little on GIS-related projects (QGIS, geospatial
					data) &mdash; just a little, not an area I'd say I know well.
				</p>
			</div>
			<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
				<span class="w-32 flex-shrink-0 text-sm text-neutral-500">2024 &ndash; 2025</span>
				<p><span class="font-semibold">Freelance Developer</span> &mdash; websites and small web apps for local businesses, one client at a time.</p>
			</div>
			<div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
				<span class="w-32 flex-shrink-0 text-sm text-neutral-500">2024</span>
				<p><span class="font-semibold">B.Sc Computer Science</span>, Calicut University &mdash; lots of C++, data structures, and "why doesn't this segfault" moments.</p>
			</div>
		</div>
		<p class="text-sm text-neutral-600">
			Also took part in a few hackathons along the way &mdash; Hackify, Magnathon, an IEDC
			hackathon.
		</p>
	</section>
</div>
