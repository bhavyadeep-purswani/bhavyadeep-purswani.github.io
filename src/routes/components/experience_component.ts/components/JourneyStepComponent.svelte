<script lang="ts">
	import { DeviceType } from '$lib/enum/device_type';
	import { journeyType } from '$lib/enum/journey_type';
	import { whichDevice } from '../../../../app.store';
	export let journeyStep: {
		bgColor: string;
		type: journeyType;
		timePeriod: string;
		image: string;
		title: string;
		subtitle: string;
		description: string;
		projects: Map<string, string>;
	};
</script>

<div
	class="w-full shrink-0 h-[calc(100vh-116px)] rounded-xl {journeyStep.bgColor} experience-item p-2 sm:p-4 overflow-hidden"
>
	<div class="flex flex-col gap-2 sm:gap-6 items-start h-full">
		<div class="flex flex-row w-full justify-between gap-3 sm:gap-4 items-center">
			<div class="flex flex-row gap-2 items-center badge badge-secondary rounded py-3 sm:py-6">
				<img
					src={journeyType.getIcon(journeyStep.type)}
					alt={journeyType.getDisplayName(journeyStep.type)}
					class="h-4 sm:h-8"
				/>
				<p class="font-bold sm:text-lg">{journeyType.getDisplayName(journeyStep.type)}</p>
			</div>
			<p class="text-sm sm:text-base italic">{journeyStep.timePeriod}</p>
		</div>

		<div class="flex flex-row gap-4 h-full w-full">
			<div class="w-full sm:w-96 flex flex-col gap-2 sm:gap-6 items-start shrink-0">
				<div class="flex flex-row gap-2 items-center">
					<img src={journeyStep.image} class="h-8 sm:h-16" alt={journeyStep.title} />
					<div class="flex flex-col sm:gap-1 items-start">
						<p class="font-bold sm:text-xl">{journeyStep.title}</p>
						<p class="font-thin text-sm sm:text-base">({journeyStep.subtitle})</p>
					</div>
				</div>
				<div class="w-full rounded-lg bg-neutral p-3 text-neutral-content text-sm sm:text-base">
					{@html journeyStep.description}
				</div>
			</div>
			{#if $whichDevice != DeviceType.MOBILE}
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
			{/if}
		</div>
	</div>
</div>
