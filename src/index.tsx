import React from 'react';
import ReactDOM from 'react-dom/client';
import { response } from './__mock__/response';
import { setting } from './__mock__/setting';
import { Container } from './Container';

export const dispatch = () => {
	const responseData = response;
	const targetElements = document.querySelectorAll('[data-js-target]');
	targetElements.forEach((element) => {
		const dataOnHtml = JSON.parse(
			(element as HTMLElement).dataset.jsTarget?.replaceAll("'", '"') ?? '{}'
		);
		const matchedDataOnResponse = responseData[dataOnHtml.id];
		const matchedDataOnSetting = setting[dataOnHtml.id];
		const data = {
			...dataOnHtml,
			...matchedDataOnResponse,
			...matchedDataOnSetting
		};

		ReactDOM.createRoot(element as HTMLElement).render(
			<React.StrictMode>
				<Container data={data} />
			</React.StrictMode>
		);
	});
};
