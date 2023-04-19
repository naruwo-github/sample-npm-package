import React from 'react';
import ReactDOM from 'react-dom/client';
import { response } from './__mock__/response';
import { setting } from './__mock__/setting';
import { Container } from './component/Container';
export const dispatch = () => {
    const responseData = response;
    const targetElements = document.querySelectorAll('[data-js-target]');
    targetElements.forEach((element) => {
        const dataOnHtml = JSON.parse(element.dataset.jsTarget?.replaceAll("'", '"') ?? '{}');
        const matchedDataOnResponse = responseData[dataOnHtml.id];
        const matchedDataOnSetting = setting[dataOnHtml.id];
        const data = {
            ...dataOnHtml,
            ...matchedDataOnResponse,
            ...matchedDataOnSetting
        };
        ReactDOM.createRoot(element).render(React.createElement(React.StrictMode, null,
            React.createElement(Container, { data: data })));
    });
};
