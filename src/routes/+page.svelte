<script lang="ts">
	import AboutMe from './components/AboutMe.svelte';
	import ExperienceComponent from './components/ExperienceComponent.svelte';
	import IntroComponent from './components/IntroComponent.svelte';
	import ProjectsComponent from './components/ProjectsComponent.svelte';
	import SkillsComponent from './components/SkillsComponent.svelte';
</script>

<div class="flex flex-col gap-4 w-full">
	<IntroComponent />
	<AboutMe />
	<SkillsComponent />
	<ExperienceComponent />
	<ProjectsComponent />
</div>
