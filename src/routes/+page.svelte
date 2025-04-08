<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="p-5">
	<h1>Välkommen till Teamer</h1>
</div>

<div class="flex-col items-center space-x-2">
	{#each data.players as player}
		<div class="flex items-center space-x-2">
			<input type="checkbox" id={player} />
			<label for={player}>{player}</label>
		</div>
	{/each}
</div>
