<script lang="ts">
	let binaryLines = [];
	const numLines = 200; // Number of binary lines to display at once
	const lineLength = 175; // Length of each binary string
	let timeout: number | null = null;
	const techStackImages = [
		'/icons/aws.png',
		'/icons/docker.png',
		'/icons/flutter.png',
		'/icons/kubernetes.png',
		'/icons/mysql.png',
		'/icons/postgres.png',
		'/icons/python.png',
		'/icons/tailwind.png'
	];
	const techStackNames = [
		'/icons/aws.png',
		'/icons/docker.png',
		'/icons/flutter.png',
		'/icons/kubernetes.png',
		'/icons/mysql.png',
		'/icons/postgres.png',
		'/icons/python.png',
		'/icons/tailwind.png'
	];

	let icon1: { url: string; x: number; y: number } | null = null;
	let icon2: { url: string; x: number; y: number } | null = null;
	let icon3: { url: string; x: number; y: number } | null = null;

	let generateBinaryString = (length: number) => {
		let binaryString = '';
		for (let i = 0; i < length; i++) {
			binaryString += Math.random() > 0.5 ? '1' : '0';
		}
		return binaryString;
	};

	// Initialize the binary lines array with random binary strings
	for (let i = 0; i < numLines; i++) {
		binaryLines.push(generateBinaryString(lineLength));
	}

	// onMount(() => {
	// 	timeout = setTimeout(updateIcons, 2000);
	// });

	// let updateIcons = () => {
	// 	icon1 = null;
	// 	icon2 = null;
	// 	icon3 = null;

	// 	let [iconIndex1, iconIndex2, iconIndex3] = [
	// 		randomIntFromInterval(0, 8),
	// 		randomIntFromInterval(0, 8),
	// 		randomIntFromInterval(0, 8)
	// 	];
	// 	let clientHeight = window.innerHeight;
	// 	let clientWidth = window.innerWidth;
	// 	let [positionY1, positionY2, positionY3] = [
	// 		randomIntFromInterval(20, (clientHeight - 20) / 3),
	// 		randomIntFromInterval((clientHeight - 20) / 3, ((clientHeight - 20) * 2) / 3),
	// 		randomIntFromInterval(((clientHeight - 20) * 2) / 3, clientHeight - 20)
	// 	];
	// 	let [positionX1, positionX2, positionX3] = [
	// 		randomIntFromInterval(20, clientWidth - 20),
	// 		randomIntFromInterval(20, clientWidth - 20),
	// 		randomIntFromInterval(20, clientWidth - 20)
	// 	];
	// 	setTimeout(() => {
	// 		icon1 = {
	// 			url: techStackImages[iconIndex1],
	// 			x: positionX1,
	// 			y: positionY1
	// 		};
	// 		icon2 = {
	// 			url: techStackImages[iconIndex2],
	// 			x: positionX2,
	// 			y: positionY2
	// 		};
	// 		icon3 = {
	// 			url: techStackImages[iconIndex3],
	// 			x: positionX3,
	// 			y: positionY3
	// 		};
	// 	}, 2000);
	// 	timeout = setTimeout(updateIcons, 6000);
	// };

	// onDestroy(() => {
	// 	if (timeout) {
	// 		clearTimeout(timeout);
	// 	}
	// });

	// let randomIntFromInterval = (min: number, max: number) => {
	// 	return Math.floor(Math.random() * (max - min + 1) + min);
	// };
</script>

<div class="h-full w-full absolute overflow-hidden select-none -z-10">
	{#each binaryLines as line}
		<div class="marquee-wrapper">
			<div class="marquee text-gray-50/10 leading-8 tracking-widest">{line}</div>
			<div class="marquee text-gray-50/10 leading-8 tracking-widest flex flex-row items-center">
				{line}
			</div>
		</div>
	{/each}
</div>

<!-- {#if icon1}
		<img
			src={icon1.url}
			alt=""
			class="absolute h-6 opacity-60"
			style="left: {icon1.x}px; top: {icon1.y}px;"
		/>
	{/if}
	{#if icon2}
		<img
			src={icon2.url}
			alt=""
			class="absolute h-6 opacity-60"
			style="left: {icon2.x}px; top: {icon2.y}px;"
		/>
	{/if}
	{#if icon3}
		<img
			src={icon3.url}
			alt=""
			class="absolute h-6 opacity-60"
			style="left: {icon3.x}px; top: {icon3.y}px;"
		/>
	{/if} -->
<style lang="postcss">
	.marquee-wrapper {
		display: flex;
		width: 200%; /* Ensures no gaps in scrolling */
	}

	.marquee {
		width: 50%; /* Each marquee line takes half of the container */
		animation: scroll-left 10s linear infinite; /* Adjust speed with duration */
		white-space: nowrap;
		overflow: hidden;
	}

	@keyframes scroll-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	@keyframes scroll-right {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(100%);
		}
	}
</style>
