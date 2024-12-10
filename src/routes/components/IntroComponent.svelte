<script lang="ts">
	import GradientText from './GradientText.svelte';
	import NameBackground from './NameBackground.svelte';
</script>

<div class="h-screen w-screen relative flex flex-col items-center justify-center overflow-hidden">
	<NameBackground />
	<div class="flex flex-col gap-2 items-center text-center px-4 sm:px-20">
		<p class="text-white text-xl">Heya! I am</p>
		<GradientText>
			BHAVYADEEP<br />PURSWANI
		</GradientText>
		<p class="text-gray-400 text-xl">Bringing amazing UI/UX to life!</p>
		<div class="flex flex-col sm:flex-row gap-2 w-full">
			<a
				target="_blank"
				href="https://github.com/bhavyadeep-purswani"
				class="btn btn-primary w-full sm:w-1/2 mt-4 flex flex-row gap-2"
			>
				<img src="/icons/github.png" class="w-4" alt="Github" />
				GitHub
			</a>
			<a
				target="_blank"
				href="http://linkedin.com/in/bhavyadeep-purswani-3193b914b/"
				class="btn btn-secondary w-full sm:w-1/2 sm:mt-4 flex flex-row gap-2 opacity-100 bg-opacity-100"
			>
				<img src="/icons/linkedin.png" class="w-4" alt="Github" />
				LinkedIn
			</a>
		</div>
	</div>
</div>
