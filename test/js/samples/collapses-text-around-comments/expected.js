/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	text
} from "svelte/internal";

function add_css() {
	var style = element("style");
	style.id = "svelte-1a7i8ec-style";
	style.textContent = "p.svelte-1a7i8ec{color:red}";
	append(document.head, style);
}

function create_fragment(ctx) {
	let p;
	let t;

	return {
		c() {
			p = element("p");
			t = text(/*foo*/ ctx[0]);
			attr(p, "class", "svelte-1a7i8ec");
		},
		m(target, anchor) {
			insert(target, p, anchor);
			append(p, t);
		},
		p(ctx, dirty) {
			if (dirty[0] & /*foo*/ 1) set_data(t, /*foo*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { foo = 42 } = $$props;

	$$self.$set = $$props => {
		if ("foo" in $$props) $$invalidate(0, foo = $$props.foo);
	};

	return [foo];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1a7i8ec-style")) add_css();
		init(this, options, instance, create_fragment, safe_not_equal, { foo: 0 });
	}
}

export default Component;