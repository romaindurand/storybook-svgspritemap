# storybook-svgspritemap
test for generating svg spritemaps from storybook webpack config

## bug demo
- install dependencies
`yarn install`

- launch storybook and run webpack compilation
`yarn storybook --debug-webpack`

- look for generated spritemap
`find . | grep spritemap.svg`
