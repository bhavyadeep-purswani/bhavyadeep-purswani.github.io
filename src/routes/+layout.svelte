<script lang="ts">
	import '../app.css';
	import { deviceWidth } from '../app.store';
</script>

<svelte:window bind:innerWidth={$deviceWidth} />
<slot />
