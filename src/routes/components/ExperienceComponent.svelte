<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import GradientText from './GradientText.svelte';
	import gsap from 'gsap';
	import { journeySteps } from '$lib/data/journey_data';
	import { journeyType } from '$lib/enum/journey_type';
	let ScrollTrigger: any;
	let timeline: gsap.core.Timeline;

	onMount(async () => {
		ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger;
		ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill());
		gsap.registerPlugin(ScrollTrigger);
		timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.experience-container',
				scrub: 1,
				start: 'top 82px',
				end: 'bottom 82px',
				pin: '.page',
				pinSpacing: false
			}
		});
		let items = document.querySelectorAll('.experience-item');
		items.forEach((item, index, __) => {
			if (index === 0) return;
			timeline.to(item, {
				x: -(48 * index + item.getBoundingClientRect().width * index)
			});
		});
	});

	onDestroy(() => {
		// Cleanup GSAP timeline
		if (timeline) timeline.kill();
	});
</script>

<div class="bg-black w-full p-2 font-bold sticky top-0">
	<div class="p-3 sm:px-6 border border-base-content flex flex-row gap-2 items-center text-4xl">
		<GradientText>
			<p class="text-4xl">Journey So Far</p>
		</GradientText>
		🌟
	</div>
</div>
<div
	class="w-full flex flex-col place-items-center p-5 sm:px-8 overflow-hidden experience-container"
>
	<div class="flex flex-row gap-12 -z-10 w-full">
		{#each journeySteps as journeyStep, i}
			<div
				class="w-full shrink-0 h-[calc(100vh-116px)] rounded-xl {journeyStep.bgColor} experience-item p-4"
			>
				<div class="flex flex-col gap-6 items-start h-full">
					<div class="flex flex-row w-full justify-between gap-4 items-center">
						<div class="flex flex-row gap-2 items-center badge badge-secondary rounded py-6">
							<img
								src={journeyType.getIcon(journeyStep.type)}
								alt={journeyType.getDisplayName(journeyStep.type)}
								class="size-8"
							/>
							<p class="font-bold text-lg">{journeyType.getDisplayName(journeyStep.type)}</p>
						</div>
						<p class="italic">{journeyStep.timePeriod}</p>
					</div>

					<div class="flex flex-row gap-4 h-full w-full">
						<div class="w-96 flex flex-col gap-6 items-start shrink-0">
							<div class="flex flex-row gap-2 items-center">
								<img src={journeyStep.image} class="h-16" alt={journeyStep.title} />
								<div class="flex flex-col gap-1 items-start">
									<p class="font-bold text-xl">{journeyStep.title}</p>
									<p class="font-thin text-base">({journeyStep.subtitle})</p>
								</div>
							</div>
							<div class="w-full rounded-lg bg-neutral p-3 text-neutral-content">
								{@html journeyStep.description}
							</div>
						</div>
						<div class="divider divider-horizontal" />
						<div class="flex flex-col gap-6 items-start">
							<p class="text-2xl text-accent-content">Projects</p>
							<div class="flex flex-col gap-4 items-start">
								{#each [...journeyStep.projects.entries()] as [key, value]}
									<div class="flex flex-col gap-2">
										<p class="text-netural-content text-xl">{key}</p>
										<p class="text-primary">{@html value}</p>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
			{#if i != journeySteps.length - 1}
				<div class="w-full shrink-0 bg-transparent experience-item" />
			{/if}
		{/each}
		<div class="w-48 shrink-0 bg-transparent experience-item" />
	</div>
</div>

<style>
</style>
