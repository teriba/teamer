<script lang="ts">
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();
	let selectedPlayers: string[] = (form?.players as string[]) || [];
</script>

<div class="p-5">
	<h1>Välkommen till Lagblandaren</h1>
</div>

<div class="flex-col items-center space-x-2">
	<form method="POST">
		{#each data.players as player}
			<div class="flex items-center space-x-2">
				<input
					type="checkbox"
					value={player}
					name="players"
					bind:group={selectedPlayers}
					id={`player-${player}`}
				/>
				<label for={`player-${player}`}>{player}</label>
			</div>
		{/each}
		<button class="m-5 flex w-52 justify-center justify-self-center rounded-2xl bg-green-500 p-4"
			>Skapa lag</button
		>
	</form>
	<div>
		{#if form}
			<h2 class="font-bold">Lag 1</h2>
			<ul>
				{#each form.teamOne as team}
					<li>{team}</li>
				{/each}
			</ul>

			<hr class="my-5" />
			<h2 class="font-bold">Lag 2</h2>
			<ul>
				{#each form.teamTwo as team}
					<li>{team}</li>
				{/each}
			</ul>
		{:else}
			<p>Inga lag skapade än.</p>
		{/if}
	</div>
</div>
