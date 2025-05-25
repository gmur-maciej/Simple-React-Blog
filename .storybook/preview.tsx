import type { Preview } from '@storybook/react'
import { Provider } from "../src/components/ui/provider"

const preview: Preview = {
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;