<script lang="ts">
	import GradientText from './GradientText.svelte';
	let userInput = '';
</script>

<div class="bg-black w-full p-2 font-bold sticky top-0">
	<div class="p-3 sm:px-6 border border-base-content flex flex-row gap-2 items-center text-4xl">
		<GradientText>
			<p class="text-4xl">Contact Me</p>
		</GradientText>
		📨
	</div>
</div>
<div
	class="h-[calc(100vh-66px-16px)] flex flex-col items-center justify-center w-full px-5 sm:px-8"
>
	<div class="flex flex-col gap-4 w-full sm:w-96 p-4 rounded border">
		<div class="chat chat-start">
			<div class="chat-bubble">
				Hi there! 👋
				<br />
				I'm <b>Bhavyadeep</b>, a frontend developer who loves crafting engaging web experiences. Got
				a question, project idea, or just want to say hi? Drop me a message below!
			</div>
		</div>
		<form class="flex flex-row gap-2 items-center" target="_blank" on:submit|preventDefault>
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full"
				bind:value={userInput}
			/>
			<button
				on:click={() =>
					window.open(
						`mailto:bhavyadeep.purswani98@gmail.com?subject=Hey!&body=${userInput}`,
						'_blank'
					)}
				class="size-12 btn btn-primary btn-circle flex flex-col items-center justify-center"
			>
				<img src="icons/send_icon.png" class="size-6" alt="Send" />
			</button>
		</form>
	</div>
	<div class="divider w-full sm:w-96 place-self-center">OR</div>
	<p>
		Mail me at: <a class="font-bold" href="mailto:bhavyadeep.purswani98@gmail.com"
			>bhavyadeep.purswani98@gmail.com</a
		>
	</p>
</div>
