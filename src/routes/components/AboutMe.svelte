<script lang="ts">
	import GradientText from './GradientText.svelte';
</script>

<div class="bg-black w-full p-2 font-bold sticky top-0">
	<div class="p-3 sm:px-6 border border-base-content flex flex-row gap-2 items-center text-4xl">
		<GradientText>
			<p class="text-4xl">Who Am I?</p>
		</GradientText>
		👨‍💻
	</div>
</div>
<div
	class="w-full flex flex-col gap-6 items-center sm:flex-row sm:gap-12 sm:items-stretch p-4 sm:px-7"
>
	<div class="mockup-code w-full -z-10">
		<pre data-prefix="$" class="text-gray-400"><code>who-are-you</code></pre>
		<div class="px-6 pt-1">
			<code
				>I am a Frontend developer with 4+ years of experience in web and app development. Adept at
				building seamless user experiences and guiding teams toward successful project delivery with
				a hands-on leadership approach. Deeply passionate about technology and committed to lifelong
				learning to stay ahead in the ever-evolving tech landscape.
			</code>
		</div>
		<pre data-prefix="$" class="text-gray-400 pt-4"><code>education</code></pre>
		<div class="px-6 pt-1">
			<table class="table-auto text-sm w-full border-collapse border border-gray-500 max-w-[500px]">
				<!-- <thead>
					<tr>
						<th class="border border-gray-500 px-2 py-1 text-start text-white">Skill</th>
						<th class="border border-gray-500 px-2 py-1 text-start text-white">Experience</th>
					</tr>
				</thead> -->
				<tbody class="align-top">
					<tr>
						<td class="border border-gray-500 px-2 py-1">
							<b>12th Grade</b> - 2016<br />
							<span class="text-white">DPS, Varanasi</span>
						</td>
						<td class="border border-gray-500 px-2 py-1">90.4%</td>
					</tr>
					<tr>
						<td class="border border-gray-500 px-2 py-1">
							<b>B.E. (Computer Science & Egg.)</b> - 2020<br />
							<span class="text-white">BNM Institute of Technology</span>
						</td>
						<td class="border border-gray-500 px-2 py-1">8.6 (CGPA)</td>
					</tr>
				</tbody>
			</table>
		</div>
		<pre data-prefix="$" class="text-gray-400 pt-4"><code>list-hobbies</code></pre>
		<div class="px-6 pt-1">
			<code>Tech Enthusiast, Anime Fan, and occasional creator of cool gadgets. </code>
		</div>
		<pre data-prefix="$" class="text-gray-400 pt-4"><code>how-to-contact</code></pre>
		<div class="px-6 pt-1 break-words">
			<code
				><b>Email: </b>bhavyadeep.purswani98@gmail.com<br /><b
					>LinkedIn:
				</b>https://www.linkedin.com/in/bhavyadeep-purswani-3193b914b/</code
			>
		</div>
	</div>
	<img src="/images/me.png" class="w-96" alt="me" />
</div>
