import type { PageServerLoad } from './$types';

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
