# Vue Glow

Add a mouse-tracing glow effect to Vue components.

I also have developed plugin for Nuxt 3: https://github.com/aksharahegde/nuxt-glow


## Installation

Install the package using your favorite package manager:

```shell
pnpm i @aksharahegde/vue-glow
```

## Usage

1. Add the `@aksharahegde/vue-glow` plugin to your `src/main.js`

```js
import VueGlow from '@aksharahegde/vue-glow'
Vue.use(VueGlow)
```

2. Add the tailwind plugin to unlock the `glow:` variant and `glow` color

`tailwind.config.js`
```js
module.exports = {
  ...
  plugins: [
    require("@aksharahegde/vue-glow/tailwind")
  ]
}
```

As with all colors in Tailwind, you may add opacity by appending a percentage after the color, such as `bg-glow/20` for 20% opacity.

3. Wrap any number of `<GlowElement>` components in a `<GlowCapture>` which will be used to track the mouse location.

```html
<template>
  <GlowCapture>
    <span>This won't glow</span>
    <GlowElement color="purple">
      <p class="text-black glow:text-glow/50 glow:bg-red-100">
        This will glow purple when the mouse is passed over
      </p>
    </GlowElement>
  </GlowCapture>
</template>
```

Children of `<GlowElement>` can style themselves how to look when glowing. You might choose to leave some children unchanged, or highlight them with the `glow:` variant style.

The value of `color` will be available as a CSS variable `--glow-color`, as well as the Tailwind `glow` color.
You can pass any valid CSS color, including `hsl()` values etc.
Of course, you might choose to use any other color; you can leave out the `color` prop entirely.


## Attribution
- Module is inspired by [React Glow](https://github.com/codaworks/react-glow) by [Codaworks](https://github.com/codaworks)
- Playground card is version of https://codepen.io/_rahul/pen/MWrozMX by [rahul](https://codepen.io/_rahul)
