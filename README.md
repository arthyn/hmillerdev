# hmiller.dev
**Hunter Miller's Personal Website**

## Skeleton
I started with Dan Urbanowicz's [eleventy-netlify-boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate). It provided a great starting point with CSS and JS automatically injected into the head, the template engine that I wanted, and minification already set up. It included great instructions for getting setup with Netlify which was also a big plus.

## Added Features
- **Custom Theme** - I just extended what Dan had already started with my own custom CSS. I think this was a given 😆
- **Custom Fonts** - I found the Halyard Display and Text typefaces really pleasing and sufficiently techie on [Adobe Typekit](https://fonts.adobe.com/typekit). One thing that still bugs me to this day is that the font looks wavy near the baseline at certain sizes, but nothing is perfect.
- [**FontFace Observer**](https://github.com/bramstein/fontfaceobserver) - used to implement Zach Leatherman's [FOUT with a Class](https://www.zachleat.com/web/comprehensive-webfonts/#fout-class) font loading strategy.
- **JS Loader** - I used [Filament Group's](https://www.filamentgroup.com/) Javascript loader so that I didn't have to include the font-loading JS on every page load, only when fonts have not been loaded yet.
- **Font Load Detection** - both `detect-cached-font.js` and `inline.js` work in tandem to complete the font loading strategy. On first load `detect-cached-font.js` will check the cache see it's empty and load `inline.js` and the font face observer. Then `inline.js` will create a font face observer for each font weight + style combination (basically each @font-face declaration) which are promises. We then can wait for each promise to complete so we can apply the class which will apply our fonts and mark the cache that we've now loaded fonts. On second load `detect-cached-font.js` will see that fonts have loaded and just return without needing to load the font loading JS.
- **MailerLite Signup Forms** - since I'm trying to start writing more, having an audience to write to would be nice, so I started a newsletter. I use MailerLite which has been a good service so far. I just wish they didn't use jQuery for their signup forms.
