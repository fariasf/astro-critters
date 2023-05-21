# [astro-critters-slim] 🦔

This **[Astro integration][astro-integration]** brings [critters][critters] to
your Astro projects SSG builds.

Critters inlines all of the css, a page is using, into the page. Note that it does that for **ALL** of the used css on the page, not just the critical / above-the-fold CSS.

## Installation

```sh
npx astro add astro-critters-slim
```

## Options

The integration does not come with any options itsefl. For configuration head over to the [critters dogs][critters-docs].

To use the defaults as per critters

```ts
import critters from "astro-critters";

export default {
	integrations: [
		// You want critters to run as late as possible
		critters()
	],
};
```

Some noteworthy options

```ts
import critters from "astro-critters";

export default {
	integrations: [
		critters({
			path: './path/to/your/dist', // path to your astro-build if somewhere special (default: './dist')
			pruneSource: true, // 🚨 Not supported and kind a broken in critters anyway (default: false)
		})
	],
};
```

[critters]: https://github.com/GoogleChromeLabs/critters
[critters-docs]: https://github.com/GoogleChromeLabs/critters#usage
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/

## Changelog

See [CHANGELOG.md](CHANGELOG.md)