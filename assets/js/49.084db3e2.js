(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{215:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"recycler-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recycler-table","aria-hidden":"true"}},[t._v("#")]),t._v(" Recycler Table "),s("Badge",{attrs:{text:"3.0.0"}})],1),t._v(" "),s("MavenBadge",{attrs:{artifact:"recycler-table"}}),t._v(" "),s("p",[t._v("Artifact that provides "),s("router-link",{attrs:{to:"/docs/v3/recycler/"}},[t._v("MarkwonAdapter.Entry")]),t._v(" to render "),s("code",[t._v("TableBlock")]),t._v(" inside\nAndroid-native "),s("code",[t._v("TableLayout")]),t._v(" widget.")],1),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/recycler-table-screenshot.png"),alt:"screenshot",width:"45%"}}),t._v(" "),s("br"),t._v(" "),t._m(0),t._v(" "),s("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("In case when required view is the root of layout specific builder methods can be used:")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("hr"),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._m(14),t._v(" "),s("p",[t._v("To stretch table columns to fit the width of screen or to make table scrollable when content exceeds screen width\nthis layout can be used:")]),t._v(" "),t._m(15)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("small",[a("em",[a("sup",[this._v("*")]),this._v(" It's possible to wrap `TableLayout` inside a `HorizontalScrollView` to include all table content")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Register instance of "),a("code",[this._v("TableEntry")]),this._v(" with "),a("code",[this._v("MarkwonAdapter")]),this._v(" to render TableBlocks:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" MarkwonAdapter adapter "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" MarkwonAdapter"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("adapter_default_entry"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("include")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TableBlock"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TableEntry"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("builder "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" builder\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("tableLayout")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("adapter_table_block"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("table_layout"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("textLayoutIsRoot")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("R"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view_table_entry_cell"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("TableEntry")]),this._v(" requires at least 2 arguments:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("tableLayout")]),t._v(" - layout with "),s("code",[t._v("TableLayout")]),t._v(" inside")]),t._v(" "),s("li",[s("code",[t._v("textLayout")]),t._v(" - layout with "),s("code",[t._v("TextView")]),t._v(" inside (represents independent table cell)")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("tableLayoutIsRoot(int)")])]),this._v(" "),a("li",[a("code",[this._v("textLayoutIsRoot(int)")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("If your layouts have different structure (for example wrap a "),a("code",[this._v("TableView")]),this._v(" inside a "),a("code",[this._v("HorizontalScrollView")]),this._v(")\nthen you should use methods that accept ID of required view inside layout:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("tableLayout(int, int)")])]),this._v(" "),a("li",[a("code",[this._v("textLayout(int, int)")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("To display "),s("code",[t._v("TableBlock")]),t._v(" as a "),s("code",[t._v("TableLayout")]),t._v(" specific "),s("code",[t._v("MarkwonPlugin")]),t._v(" must be used: "),s("code",[t._v("TableEntryPlugin")]),t._v(".")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Do not use "),s("code",[t._v("TablePlugin")]),t._v(" if you wish to display markdown tables via "),s("code",[t._v("TableEntry")]),t._v(". Use "),s("strong",[t._v("TableEntryPlugin")]),t._v(" instead")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("TableEntryPlugin")]),this._v(" can reuse existing "),a("code",[this._v("TablePlugin")]),this._v(" to make appearance of tables the same in both contexts:\nwhen rendering "),a("em",[this._v("natively")]),this._v(" in a TextView and when rendering in RecyclerView with TableEntry.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("code",[t._v("TableEntryPlugin.create(Context)")]),t._v(" - creates plugin with default "),s("code",[t._v("TableTheme")])]),t._v(" "),s("li",[s("code",[t._v("TableEntryPlugin.create(TableTheme)")]),t._v(" - creates plugin with provided "),s("code",[t._v("TableTheme")])]),t._v(" "),s("li",[s("code",[t._v("TableEntryPlugin.create(TablePlugin.ThemeConfigure)")]),t._v(" - creates plugin with theme configured by "),s("code",[t._v("ThemeConfigure")])]),t._v(" "),s("li",[s("code",[t._v("TableEntryPlugin.create(TablePlugin)")]),t._v(" - creates plugin with "),s("code",[t._v("TableTheme")]),t._v(" used in provided "),s("code",[t._v("TablePlugin")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TableEntryPlugin"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// other plugins")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Markwon markwon "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Markwon"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("usePlugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TableEntryPlugin"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("builder "),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" builder\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("tableBorderWidth")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("tableHeaderRowBackgroundColor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Color"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RED"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// other plugins")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"table-with-scrollable-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-with-scrollable-content","aria-hidden":"true"}},[this._v("#")]),this._v(" Table with scrollable content")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("HorizontalScrollView")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("android")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://schemas.android.com/apk/res/android"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_width")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("match_parent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_height")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrap_content"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("clipChildren")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("clipToPadding")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("paddingLeft")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("16dip"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("paddingTop")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8dip"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("paddingRight")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("16dip"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("paddingBottom")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("8dip"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("scrollbar")]),s("span",{attrs:{class:"token style-attr language-css"}},[s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token attr-name"}},[t._v("Style")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{attrs:{class:"token attr-value"}},[t._v("outsideInset")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("TableLayout")]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@+id/table_layout"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_width")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrap_content"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("layout_height")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrap_content"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n        "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("android:")]),t._v("stretchColumns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("*"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("HorizontalScrollView")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);