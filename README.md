# parcel-dir-dependency

1. Checkout the pull request in (for example) `/path/to/parcel`
1. In **this** repo, run `yarn install`
1. Then run `/path/to/parcel/packages/core/parcel/src/bin.js watch src/index.html`

You can now edit or add any files to the `src` directory and see that the CSS file in `dist` updates with the filenames and modified times.
