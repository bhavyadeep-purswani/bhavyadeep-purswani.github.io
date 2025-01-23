<script lang="ts">
	import { fly } from 'svelte/transition';
	import GradientText from './GradientText.svelte';
	import { onMount } from 'svelte';
	let skills = [
		{ icon: '/icons/svelte.png', title: 'SvelteKit', visible: false },
		{ icon: '/icons/typescript.png', title: 'TypeScript', visible: false },
		{ icon: '/icons/flutter.png', title: 'Flutter', visible: false },
		{ icon: '/icons/dart.png', title: 'Dart', visible: false },
		{ icon: '/icons/mysql.png', title: 'MySQL', visible: false },
		{ icon: '/icons/postgres.png', title: 'PostgreSQL', visible: false },
		{ icon: '/icons/python.png', title: 'Python', visible: false },
		{ icon: '/icons/tailwind.png', title: 'Tailwind CSS', visible: false }
	];
	let skillComponents: HTMLElement[] = [];
	onMount(() => {
		let options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1
		};
		let callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
					entry.target.classList.remove('hide');
					observer.unobserve(entry.target);
				}
			});
		};
		let observer = new IntersectionObserver(callback, options);
		skillComponents.forEach((skillComponent, _, __) => {
			observer.observe(skillComponent);
		});
	});
</script>

<div class="bg-black w-full p-2 font-bold sticky top-0">
	<div class="p-3 sm:px-6 border border-base-content flex flex-row gap-2 items-center text-4xl">
		<GradientText>
			<p class="text-4xl">My Superpowers</p>
		</GradientText>
		🚀
	</div>
</div>
<div
	class="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 items-center justify-center p-5 sm:px-8 overflow-hidden"
>
	{#each skills as skill, i}
		<div
			class="card w-full sm:w-56 bg-base-300 -z-10"
			class:show={skill.visible}
			class:hide={!skill.visible}
			bind:this={skillComponents[i]}
			style="--delay: {i * 0.05}s"
		>
			<figure
				class="aspect-square w-full bg-base-200 p-8 flex flex-row justify-center items-center"
			>
				<img src={skill.icon} alt={skill.title} class="max-w-full max-h-full" />
			</figure>
			<div class="card-body p-2 w-full text-center">
				<GradientText>
					<p class="text-2xl">{skill.title}</p>
				</GradientText>
			</div>
		</div>
	{/each}
</div>

<style>
	.show {
		opacity: 1;
		filter: blur(0);
		transform: translateX(0);
		transition: all 1s;
	}

	@media (min-width: 640px) {
		.show {
			opacity: 1;
			filter: blur(0);
			transform: translateX(0);
			transition: all 1s;
			transition-delay: var(--delay);
		}
	}

	.hide {
		opacity: 0;
		filter: blur(5px);
		transform: translateX(100%);
	}
</style>
