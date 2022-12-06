<script lang="ts">
	import LogoGithub from 'carbon-icons-svelte/lib/LogoGithub.svelte';
	import LogoLinkedin from 'carbon-icons-svelte/lib/LogoLinkedin.svelte';
	import LogoFacebook from 'carbon-icons-svelte/lib/LogoFacebook.svelte';
	export let positioning: string = '';
</script>

<aside class={positioning}>
	<a href="https://github.com/alexponoran" aria-label="Github icon">
		<LogoGithub size={32} />
	</a>
	<a href="https://linkedin.com/in/alexandru-ponoran-0057b91ba/" aria-label="Linkedin icon">
		<LogoLinkedin size={32} />
	</a>
	<a href="https://www.facebook.com/alexandru.ponoran/" aria-label="Facebook icon">
		<LogoFacebook size={32} />
	</a>
</aside>
