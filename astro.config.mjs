import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Nursing Documentation',
			sidebar: [
				{
					label: '1. Nursing and the Healthcare Environment',
					items: [
					],
				},
				{
					label: '2. Caring Thoughout the Lifespan',
					items: [
					],
				},
				{
					label: '3. Clinical Judgment in Nursing Practice',
					items: [
					],
				},
				{
					label: '4. Professional Standards in Nursing Practice',
					items: [
					],
				},
				{
					label: '5. Foundations for Nursing Practice',
					items: [
						{ label: 'Lung Auscultation', link: '/foundations/5-foundations-nursing-practice/30-health-assessment-physical-exam/lung-auscultation/'},
						{ label: 'Glasgow Coma Scale (EVM)', link: '/foundations/5-foundations-nursing-practice/30-health-assessment-physical-exam/level-of-consciousness/'},
						],
				},
				{
					label: '6. Psychosocial Basis for Nursing Practice',
					items: [
					],
				},
				{
					label: '7. Physiological Basis for Nursing Practice',
					items: [
					],
				},
			],
		}),
	],
});

