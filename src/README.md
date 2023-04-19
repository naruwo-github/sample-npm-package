## Features of this

### index.html(On client side)

- An HTML file with multiple DOM elements as rendering targets for React components
- The trigger for rendering is the `data-js-target` attribute
- Values of the `data-js-target` attribute
  - A unique identifier `id` for each DOM element
  - Other values dynamically calculated within the AP server (if SSR is used for HTML)

### src/\*(On this package)

`index.tsx`

- A process to bind DOM elements, React components, static configuration information, dynamic configuration information, and API response information to render the UI

`__mock__/response.ts`

- Pseudo data
- API response mock
- Contains information associated with the identifier `id`

`config/setting.ts`

- Pseudo data
- Files defining static information uniquely associated with the identifier `id`

`component/*`

- Files defining React components uniquely associated with the identifier `id`
