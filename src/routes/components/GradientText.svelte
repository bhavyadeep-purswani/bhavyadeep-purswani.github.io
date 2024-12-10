<p
	class="text-5xl sm:text-8xl lg:text-9xl font-bold text-transparent bg animate-gradient-background bg-clip-text"
>
	<slot />
</p>

<style lang="postcss">
	.bg {
		@apply bg-gradient-to-r from-purple-500/100 via-pink-500/100 to-yellow-500/100;
	}

	@keyframes gradient-move {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.animate-gradient-background {
		animation: gradient-move 4s ease infinite;
		background-size: 200% 200%;
	}
</style>
