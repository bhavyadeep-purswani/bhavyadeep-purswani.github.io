<script lang="ts">
	import '../app.css';
	import { deviceWidth } from '../app.store';
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z8JGT3N36E"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-Z8JGT3N36E');
	</script>
</svelte:head>
<svelte:window bind:innerWidth={$deviceWidth} />
<slot />
