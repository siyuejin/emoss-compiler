**IMPORTANT: If you are looking for a detailed, interactive tutorial, [click here](https://emoss-survey.herokuapp.com/). Your feedback helps EMOSS to improve!**

Live Editor and Online Compiler for EMOSS - the CSS preprocessor language built with BEM in mind.

[http://emoss-lang.com/](http://emoss-lang.com/) (Play with the dark mode!)

 **/editor.emoss** can be found in the root directory and will be compiled into **/css/editor.css**, serving as the core CSS file for this online editor.

EMOSS Intro
=====

EMOSS is a CSS **preprocessor language** that **enforces** the [BEM methodology](http://getbem.com/) , the most popular naming convention on writing CSS classes. 

With EMOSS, you can write highly maintainable and reusable CSS modules.


EMOSS Grammar
=====

```css
@block <block> {
  // rules 1
  @elem <element> {
  // rules 2
    @mod <modifier> {
    // rules 3
    }
  }
}
```
will be compiled into the following CSS code:

```
.<block> {
// rules 1
}
.<block>__<element> {
// rules 2
}
.<block>__<element>--<modifier> {
// rules 3
}
```

Modifier can also be applied to the block as in BEM, with EMOSS:

```css
@block <block> {
// rules 4
  @mod <modifier> {
  // rules 5
  }
}
```

will be compiled into the following CSS code:

```
.<block> {
// rules 4
}
.<block>--<modifier> {
// rules 5
}
```

Note that elements **do not inherit** rules that was defined within the scope of block. This is because the block is often a container and used as a stand-alone CSS class. Therefore, all elements that stand in the container(block) will automatically inherits the rules of the container without including those rules explicitly.

Also, modifiers **do not inherit** rules that was defined within the scope of element. This is
because the modifier only includes additional rules to change the status of the elements. Therefore, to update the status of an element, simply add the "&lt;block&gt;--&lt;modifier&gt;" or "&lt;block&gt;\_\_&lt;element&gt;--&lt;modifier&gt;" class to the target with basic class( i.e. "&lt;block&gt;" or "&lt;block&gt;\_\_&lt;element&gt;")

EMOSS supports peseudo-classes and pseudo-elements. Use & to indicate the host class, for example, & p, &:hover and &::after.

```css
@block <block> {
  // rules 1
  @elem <element> {
    // rules 2
    @mod <modifier> {
        // rules 3
        & button {
            // rules 6
        }
        & button:hover {
            // rules 7
        }
    }
  }
}
```
will be compiled into the following CSS code:

```
.<block> {
// rules 1
}
.<block>__<element> {
// rules 2
}
.<block>__<element>--<modifier> {
// rules 3
}
.<block>__<element>--<modifier> button {
// rules 6
}
.<block>__<element>--<modifier> button:hover {
// rules 7
}
```

*EMOSS also introduces two operators: @mixin, @free, which associate and dissociate an element to a block, or associate and dissociate a modifier to a block or an element.

*EMOSS supports variables.


---

*In development

**If you are interested in EMOSS, [take the online user survey](https://emoss-survey.herokuapp.com/) to let me know what you think!**


License
=====
MIT

Copyright (c) 2020 Siyue Jin










