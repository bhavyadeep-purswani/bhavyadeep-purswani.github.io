<script lang="ts">
	import AboutMe from './components/AboutMe.svelte';
	import ContactMeComponent from './components/ContactMeComponent.svelte';
	import ExperienceComponent from './components/experience_component.ts/ExperienceComponent.svelte';
	import IntroComponent from './components/IntroComponent.svelte';
	import ProjectsComponent from './components/ProjectsComponent.svelte';
	import SkillsComponent from './components/SkillsComponent.svelte';
</script>

<div class="flex flex-col gap-4 w-full !translate-y-0 page">
	<IntroComponent />
	<AboutMe />
	<SkillsComponent />
	<ExperienceComponent />
	<ContactMeComponent />
</div>
