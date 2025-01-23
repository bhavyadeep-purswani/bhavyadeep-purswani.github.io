<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import GradientText from '../GradientText.svelte';
	import gsap from 'gsap';
	import { journeySteps } from '$lib/data/journey_data';
	import { journeyType } from '$lib/enum/journey_type';
	import JourneyStepComponent from './components/JourneyStepComponent.svelte';
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
			<JourneyStepComponent {journeyStep} />
			{#if i != journeySteps.length - 1}
				<div class="w-full shrink-0 bg-transparent experience-item" />
			{/if}
		{/each}
		<div class="w-48 shrink-0 bg-transparent experience-item" />
	</div>
</div>

<style>
</style>
