import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

function shuffle(array: string[]) {
	let currentIndex = array.length;

	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
}

const xp = {
	a: ['Milo', 'Elton', 'Hannes', 'Charlie B'],
	b: ['Maximilian', 'Charlie G', 'Lucas', 'Kevin', 'Ludvig'],
	c: ['Tova', 'Lova', 'Julia', 'Oscar', 'Tyra', 'Saga', 'Miranda', 'Iris', 'Kelly', 'Miranda']
};

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const players = data.getAll('players');

		let one: { xp: number; players: string[] } = {
			xp: 0,
			players: []
		};

		let two: { xp: number; players: string[] } = {
			xp: 0,
			players: []
		};

		let a: string[] = [];
		let b: string[] = [];
		let c: string[] = [];

		xp.a.forEach((player) => {
			if (players.includes(player)) {
				a.push(player);
			}
		});
		xp.b.forEach((player) => {
			if (players.includes(player)) {
				b.push(player);
			}
		});
		xp.c.forEach((player) => {
			if (players.includes(player)) {
				c.push(player);
			}
		});

		shuffle(a);
		shuffle(b);
		shuffle(c);

		a.forEach((p) => {
			if (one.xp > two.xp) {
				two.players.push(p);
				two.xp += 4;
			} else {
				one.players.push(p);
				one.xp += 4;
			}
		});

		b.forEach((p) => {
			if (one.xp > two.xp) {
				two.players.push(p);
				two.xp += 2;
			} else {
				one.players.push(p);
				one.xp += 2;
			}
		});

		c.forEach((p) => {
			if (one.xp > two.xp) {
				two.players.push(p);
				two.xp += 1;
			} else {
				one.players.push(p);
				one.xp += 1;
			}
		});

		return { players, teamOne: one.players, teamTwo: two.players };
	}
} satisfies Actions;

export const load: PageServerLoad = async () => {
	const players = [
		'Iris',
		'Charlie B',
		'Hannes',
		'Maximilian',
		'Tyra',
		'Oskar',
		'Charlie G',
		'Tova',
		'Elton',
		'Kelly',
		'Kevin',
		'Ludvig',
		'Miranda',
		'Lucas',
		'Milo',
		'Lova',
		'Saga',
		'Julia'
	];

	return {
		players
	};
};
