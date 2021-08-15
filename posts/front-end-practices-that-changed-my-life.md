---
title: "Front-end Practices That Changed My Life"
description: Here's a long list of simple front-end development practices that will help you be more productive in your day-to-day.
summary: Here's a long list of practices that I've found helpful in front-end development. Many of them significantly changed the way I work for the better and made my day-to-day more productive.
shareimage: /img/craft.jpg
date: 2020-04-24
tags:
  - principles
  - HTML
  - CSS
  - JS
highlighting: true
---

Hey there! My name is Hunter Miller and I've been developing web software for about 6 years now. Along the way I've taken many paths to produce effective software, some that worked well and some that didn't. I've collected those that I found most influential so that maybe you can get a jump start. Although I've had some success using "larger" patterns I find the smaller ones more powerful and better for overall quality. 

*By no means is this an exhaustive list. Also please excuse some of the examples, I had to make most of them up. 😂*
 
![Neon sign saying craft](/img/craft.jpg)

## General

### You're Never Too Far Along to Learn/Relearn the Fundamentals
It's awesome to jump in, start building things, and get something working especially as a beginner. Without learning the fundamentals though, you will often find that you aren't quite sure precisely why something is happening, leading to lots of headaches when trying to fix bugs. The fundamentals help you narrow down what's happening so that you can piece it together. For HTML that means learn the basic tags and when it's appropriate to use them. For CSS that means knowing all the different properties that affect layout and how they interact together. For JS it means knowing what `this` is at all times 😂. 

### Prefer the Simplest Tech When Possible
When building web experiences, I try and use HTML first, CSS second, and finally JS if necessary. HTML + CSS can get you really far before you have to reach for JS. It's often simpler and more performant to not have to handle such interactions in JS. 

### Read Documentation and Source Code (Especially MDN for the web)
Documentation and source code are your gateways into learning how things really work. Every time you take the time to read the documentation/source code you gain new little bits that you've never noticed before. There's lots of functionality in the web that you probably don't know. And if you only ever read blogs, tutorials, and Stack Overflow you'll never see the full potential of the tools you are using. It's especially helpful for open source libraries where authors don't always have time to write documentation. This made me a better programmer.

### Accessibility Is Necessary
Without proper accessibility your site will be unusable by those who need to use screen readers, high-contrast text, keyboard navigation, etc. Taking the time to learn the accessibility features of the browser will set you up for success the next time you're trying to create a new experience. I found these people and organizations helped a lot when learning more about accessibility:
- [Heydon Pickering](https://heydonworks.com/)
- [Laura Kalbag](https://laurakalbag.com/)
- [A11y Project](https://a11yproject.com/checklist/)
- [Simply Accessible](http://simplyaccessible.com/article/listening-web-part-one-thinking-accessibility/)

### Learn How the Browser Loads Resources
This one's tricky because browser's aren't always opaque on how they prioritize loading different types of resources. But you can learn a lot about performance from these people and organizations:
- [CSS Wizardry by Harry Roberts](https://csswizardry.com/)
- [Varvy by Patrick Sexton](https://varvy.com/pagespeed/)
- [Tim Kadlec](https://timkadlec.com/)
- [Filament Group](https://www.filamentgroup.com/lab/)
- [web.dev](https://web.dev/fast/)

## CSS
### Atomic or Utility-first CSS
Atomic CSS is a way of structuring your CSS classes which mimics the properties and values available in CSS. At first this sounds pretty crazy. There are tons of properties in CSS and each has multiple or even infinite values, so how could this possibly work? Well, first off you don't actually produce a class for each and every value. For those properties with numerical values, we come up with a standard set to use so that will benefit us the most. 

For example, we might have a set of classes for various vertical margins. They might be `my-0 my-1 my-2 my-3`...where each number represents some "level" of margin. So maybe `my-1` equals `margin-top: .25rem; margin-bottom: .25rem;`, and each level after is just + .25rem. Now we have a very useful set of classes to apply pretty much whatever vertical margin we need, and we no longer have to write margins in CSS unless it's an extremely specific case. Not only that, but we've given everyone who uses this a standard set of values to choose from. A third benefit is that we know exactly what the class does, there's no guesswork or hidden values. Finally, we've now opened the possibility for any element or component to have their margin changed, if the situation arises, without making a specific override in CSS. This is probably the most powerful pattern in CSS that I've encountered, even more so than LESS/SASS/SCSS.

If you want to read more about it here are some great links, [In Defense of Utility-First CSS](https://frontstuff.io/in-defense-of-utility-first-css), [Tailwind CSS](https://tailwindcss.com/docs/utility-first/), [Tachyons CSS](http://tachyons.io/), and a whole slew of articles linked at [The Case for Atomic CSS](https://johnpolacek.github.io/the-case-for-atomic-css/).

### Consistently Ordering Properties
This is really small and has no actual effects on your CSS (unless it's duplicate properties for fallbacks of properties that aren't supported). However I find it really helpful when reading/writing CSS to stick with a consistent order. My preferred order is layout/positioning, sizing, spacing, typography, colors/visual effects, transition/animations, and then finally "miscellaneous". Within each category I try to stay ordered as well. It helps to spot bugs and speed things up.

### Single Class Specificity
I learned this the hard way after nesting way too much SASS and before I got deep into atomic CSS. I was working at a design agency building boutique level websites so everything was very creative and unsystematic or at least each component had lots of exceptions 😉. I quickly found that it was becoming difficult to override CSS I had previously written because everything varied in specificity. By flattening all of it to as close to one class level of specificity it became much easier to override properties on a class. This works hand-in-hand with atomic CSS because as long as your utility classes come last (or have important applied because let's face it if you put that class on their you wanted it) it'll override the component class. This leads to much less specificity wars.

### Performant Transitions and Animations
This one is very simple, but can be annoying in practice. There are only two properties in CSS that can be reliably performant, `transform` and `opacity`. Everything else is subject to more expensive operations that can cause jank. In general I try to use only these, but I still use `color`, `background-color`, and `border-color` often in low-impact situations, like links or buttons. Read more here about [high performance animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/).

## HTML
### Semantics, aka Learn the Basic Tags
There are so many HTML elements. It's hard to know them all and everything that they do, but they will help you build web experiences that are more accessible and maybe even help you write less CSS and JS. Proper HTML also helps your site get crawled by search engines, which helps your content get found. They are the basic bits of the web and using them properly helps you create websites that work.

### Responsive Images
Here's the best way to save bytes on your images. Responsive images allow you to serve just the right size to your users by giving you channels to describe images of different sizes and when those sizes will apply. There's a great doc written by MDN that explains it [here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

### \<input\> + \<label\> = interaction (\<dialog\>, \<details\>, and more)
There are a lot of interactions built into the default browser elements. We can leverage those to build interactive elements that do not require Javascript. And since they don't require JS, they're just a little more robust. Sometimes though, JS is required to really make a set of elements usable and accessible. In those cases we start with the HTML+CSS and layer on the additional functionality required with JS.

We can build custom toggles, file inputs, and many other types of elements using an `<input>` + `<label>` combination by simply using the `:checked` selector to update the state of the visible element.

Popovers and collapsible elements can also be built with the details element. A great presentation on this: [The Details on Details by Mu-An Chiou](https://github.com/muan/details-on-details) and a similar one on modals/dialogs by the same author [A Dialog on Dialogs](https://docs.google.com/presentation/d/1BOfauRVTJnGGBQUeNa75N5AzoHCX_sFHpmxcKEKMEB8/edit#slide=id.p)

## JS
### State and Special Attributes as Strings (or getting rid of boolean addiction)
When writing Javascript we have a tendency when starting out to write states as a set of boolean flags. We might simply start with one state, `isError`, and assign that a boolean value. And at first this might be fine if it's the only state we're tracking. Soon though we'll probably add more, maybe we need an `isInProgress` state. Now we have two flags to represent what should realistically only be one state for the whole component. If both of those states are `true`, then what state should we be in? We quickly get into situations where invalid states are possible. 

The simplest way to resolve this is to track state with a string. The string should be part of a limited set that represents all the states that our component can be in. This helps clean up all the `isX` properties that litter our components and we can simply check the state with a function that returns a boolean value. 

Here's a basic example of an ajax call to a server to load some data: 

```js
const loaderStates = {
	initial: 'initial',
	loading: 'loading',
	success: 'success',
	error: 'error'	
}

let state = loaderStates.initial;

function is(status) {
	return Array.isArray(status) 
		? status.indexOf(state) > -1 
		: state === status;
}


async function loadTodos() {
	state = loaderStates.loading;

	try {
		const todos = await fetch('/todos').then(response => response.json());
		state = loaderStates.success;
	} catch (error) {
		state = loaderStates.error;
		console.log(error);
	}
}
```

You can see we've created an object to hold our states called `loaderStates`. We also created a function which lets us check if the current state matches a state we want to know about, equivalent to what we had before `isError` vs `is(loaderStates.error)`. Now we can use this function to trigger things like spinners when loading or error messages when we're in an error state.

A much more advanced version of this pattern is called *state machines* which you can find out more about [here](https://www.youtube.com/watch?v=czi24DqUfSA) from David K Piano where he uses the library he wrote [xstate](https://github.com/davidkpiano/xstate).

Similarly, we tend to use these types of boolean flags to describe attributes like `CanUpdate`, `CanEdit`, etc. which is just as unmaintainable. In the same way as above, we can move to strings to give us a more succinct way to represent some set of attributes. This is also gives us the added benefit of being able to iterate through the set of strings with array functions, whereas before we might have had to have a huge if-else statement to check all the attributes.

```js
const admin = {  
	id: 1,
	name: 'Hunter Miller',
	canEdit: true,
	canPublish: true,
	canManageUsers: true,
	canApprove: true,
	canViewOtherUsersContent: true,
	canAccessBackend: true
}

```

vs.

```js
const admin = {
	id: 1,
	name: 'Hunter Miller',
	permissions: [
		'edit', 
		'publish', 
		'manage-users', 
		'approve', 
		'view-others-content', 
		'access-backend'
	]
}
```

### Making Maps
There's a common pattern in JS where we want to run some functionality or get some data based on a key. Instead of using a chain of if statements or a switch with cases, we can use an object to associate a particular key with whatever we need, and then just access what we need with `map[key]`.

Data we're working with: 

```js
const transaction = {
	id: 88,
	price: 33.93,
	loginId: 'hmillerdev',
	email: 'hunter@hmiller.dev',
	paymentId: 'e2b7291d-8838-4435-942a-ec6bec938673'
	paymentType: 'credit-card'
};
```

Using ifs:

```js
function processTransaction(transaction) {
	...
	if (transaction.paymentType === 'credit-card') {
		processCreditCard(transaction);
	} else if (transaction.paymentType === 'paypal') {
		processPaypal(transaction);		
	} else if (transaction.paymentType === 'bank') {
		processBank(transaction);		
	} else if (transaction.paymentType === 'bitcoin') {
		processBitcoin(transaction);		
	} else if (transaction.paymentType === 'seashells') {
		processSeashells(transaction);		
	}
	...
}
```

Now with a map:

```js
const processors = {
	'credit-card': processCreditCard,
	paypal: processPaypal,
	bank: processBank,
	bitcoin: processBitcoin,
	seashells: processSeashells
}

function processTransaction(transaction) {
	...
	const processPayment = processors[transaction.paymentType];
	processPayment(transaction);
	...
}
```

### Functionalize
This one is pretty near and dear to me. One of the first things I learned was to break my functions down as small as they can be, so that we can reuse that chunk of code later. This comes with the added benefit that now we've given that chunk of functionality a name. So when we read through the code, we can get a better sense of what's going on. It also lets us leverage one of the main features provided to us in JS, that let's us pass functions around to alter the functionality of other functions. 

One of the best examples, is the array function `map`. We call this function off of an array and pass it a function which will transform each item in the array returning a whole new array. 

```js
const itemPrices = [25.00, 10.00, 48.00];

function priceWithHalfOffDiscount(price) {
	return price * 0.5;
}

const discountedPrices = itemPrices.map(price => priceWithHalfOffDiscount(price));

```

So now `discountedPrices` equals `[12.50, 5.00, 24.00]`. 

Anytime we need to transform each item in an array and get that transformed array back, we can use map with whatever transforming function we need. We now have an immense set of functionality with just one function, because we can give it something to change what it does. 

This is the very tip of the iceberg to a style of programming called functional programming which you can learn about from Mattias at Fun Fun Function from his [functional programming playlist](https://www.youtube.com/watch?v=BMUiFMZr7vk) or you can learn from this fun little online book called the [Professor Frisby's Mostly Adequate Guide to Functional Programming](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/). I've found that this style of programming has vastly improved my code quality and resiliency and makes a lot of problems much easier to think about. However it can be very confusing when you first learn it because it is a bit of a brain change for most people.

### Don't Repeat Yourself (Too Much)
Related to the previous section, if we have two blocks of code that are very similar, it can be beneficial to combine them into a function and let the parameters dictate the differences. Sometimes this can get us into trouble if we're trying to force things that are too different together. It might force us to make a function that has way too many branching paths or long lists of parameters. I find that is less often the case though. We actually more often have a ton of things that are very similar and once we start de-duplicating one part of the code it can lead to a waterfall of changes that makes the code much cleaner and easier to read. A good rule of thumb is that if this helps the code handle things more consistently and improves the readability then it's a good time to remove the redundancy. This can be a double-edged sword, but mostly beneficial when not overused.

```js
function processOrderWithShipments(data) {
	if (!data) {
		return;
	}
	
	const order = new Order(data);
	const shipments = assignItemsToShipments(order.items);
	const paymentProcessor = new PaymentProcessor();

	if(!order.isValid()) {
		throw new Error("Order is invalid");
	}
	
	const receipt = paymentProcessor.pay(order.paymentMethod, order.Total);
	sendOrderConfirmationEmail(order, receipt);
	
	const shipments = assignItemsToShipments(order.items);
	alertFulfillment(shipments);
}

function processRecurringDigitalGoodsOrder(orderData, timePeriod) {
	if (!data) {
		return;
	}
	
	const order = new Order(data);
	const paymentProcessor = new PaymentProcessor();

	if(!order.isValid()) {
		throw new Error("Order is invalid");
	}
	
	const receipt = paymentProcessor.pay(order.paymentMethod, order.Total);
	sendOrderConfirmationEmail(order, receipt);
	
	setupSubscription(order.paymentMethod, order.items, timePeriod);
	sendGoods(order.goods);
}
```

```js
function processOrder(order) {
	const paymentProcessor = new PaymentProcessor();

	if(!order.isValid()) {
		throw new Error("Order is invalid");
	}
	
	const receipt = paymentProcessor.pay(order.paymentMethod, order.Total);
	sendOrderConfirmationEmail(order, receipt);
}

function processOrderWithShipments(data) {
	if (!data) {
		return;
	}
	
	const order = new Order(data);
	const shipments = assignItemsToShipments(order.items);
	
	try {
		processOrder(order);
		alertFulfillment(shipments);
	} catch (error) {
		console.log("😭😭😭😭", error);	
	}
}

function processRecurringDigitalGoodsOrder(orderData, timePeriod) {
	if (!orderData || !timePeriod) {
		return;
	}
	
	const order = new Order(orderData);

	try {
		processOrder(order);
		setupSubscription(order.paymentMethod, order.items, timePeriod);
		sendGoods(order.goods);
	} catch (error) {
		console.log("😭😭😭😭", error);	
	}
}
```


### Getting Rid of a Few Ifs
Often in our code we want to provide some default values or not call a function if something's `null`. We can get around using if statements by using boolean checks. For example if we want to default a value based on a parameter that may or may not be null we can do something like this: `const items = newItems || []`. Because of the way JS works, boolean checks like this return the value of the expression so `items` will be assigned `[]` if newItems is null or undefined. This is a tip I picked up from Addy Osmani though I can't seem to find the article he wrote about it. Sometimes this can result in code that's less readable and in those cases you should use an if statement.

### Separate API Calls into Their Own Module
If you have multiple calls to a shared endpoint or API, it can often be helpful to encapsulate all those AJAX calls into a module where each call is a function. Now, setup and the handling of the response can be the same across the application. Anytime something changes about that API all the changes can be made in one place and we don't have all that clogging up our specific component's logic.

```js
class todoAPI {
	getTodos() {
		return fetch('/todos').then(response => response.json())
	}
	
	editTodo(id) {
		return fetch('/todos', {
			method: 'POST',
			body: JSON.stringify({ id })
		}).then(response => response.json())
	}
	...
}

export const todoAPI = new todoAPI();
```

Later on when you need to get the todos:  

```js
import { todoAPI } from './todoAPI';

const todos = await todoAPI.getTodos();
```

This gives us the ability to pass around the API to whatever module or component needs it, and it's not stuck in some specific component. Yet another way to increase re-usability and reduce duplication.


## Conclusion
The web evolves constantly and so do my practices and philosophies around development, but the thoughts above have stuck around. These things are like old regulars that just keep coming back to the cafe even though the rest of the customers keep changing. A lot of what I've picked up above came from trial and error. I also read a ton of web dev Twitter, and am never scared to Google something to try out new methods. Like my good friend [Bennett Dungan](https://www.bennettdungan.com/) said, learning to code is a marathon. It takes time to build practices and methods that make you productive. Try some of these things and [let me know what you think on Twitter.]({{ page.url | generateShareLink(description) }})

<small>Cover photo by <a href="https://unsplash.com/@punttim?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tim Gouw</a> on <a href="/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></small>