import { useLocation } from 'react-router-dom'
import DifficultyBadge from '../../components/DifficultyBadge'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react'

const TutorialSingle = () => {

  const { state } = useLocation()
  const { tutorial } = state

  const [content, setContent] = useState("# Changelog\n\nAll notable changes will be documented in this file.\n\n## 8.0.0 - 2022-01-17\n\n<a name=\"change-plugins-to-remarkplugins\"></a>\n\n*   [`cd845c9`](https://github.com/remarkjs/react-markdown/commit/cd845c9)\n    Remove deprecated `plugins` option\\\n    (**migrate by renaming it to `remarkPlugins`**)\n*   [`36e4916`](https://github.com/remarkjs/react-markdown/commit/36e4916)\n    Update [`remark-rehype`](https://github.com/remarkjs/remark-rehype),\n    add support for passing it options\\\n    by [**@peolic**](https://github.com/peolic)\n    in [#669](https://github.com/remarkjs/react-markdown/pull/669)\\\n    (**migrate by removing `remark-footnotes` and updating `remark-gfm` if you\n    were using them, otherwise you shouldn’t notice this**)\n\n## 7.1.2 - 2022-01-02\n\n*   [`656a4fa`](https://github.com/remarkjs/react-markdown/commit/656a4fa)\n    Fix `ref` in types\\\n    by [**@ChristianMurphy**](https://github.com/ChristianMurphy)\n    in [#668](https://github.com/remarkjs/react-markdown/pull/668)\n\n## 7.1.1 - 2021-11-29\n\n*   [`4185f06`](https://github.com/remarkjs/react-markdown/commit/4185f06)\n    Add improved docs\\\n    by [**@wooorm**](https://github.com/wooorm)\n    in [#657](https://github.com/remarkjs/react-markdown/pull/657)\n\n## 7.1.0 - 2021-10-21\n\n*   [`7b8a829`](https://github.com/remarkjs/react-markdown/commit/7b8a829)\n    Add support for `SpecialComponents` to be any `ComponentType`\\\n    by [**@Methuselah96**](https://github.com/Methuselah96)\n    in [#640](https://github.com/remarkjs/react-markdown/pull/640)\n*   [`a7c26fc`](https://github.com/remarkjs/react-markdown/commit/a7c26fc)\n    Remove warning on whitespace in tables\n\n## 7.0.1 - 2021-08-26\n\n*   [`ec387c2`](https://github.com/remarkjs/react-markdown/commit/ec387c2)\n    Add improved type for `linkTarget` as string\n*   [`5af6bc7`](https://github.com/remarkjs/react-markdown/commit/5af6bc7)\n    Fix to correctly compile intrinsic types\n\n## 7.0.0 - 2021-08-13\n\nWelcome to version 7.\nThis a major release and therefore contains breaking changes.\n\n### Breaking changes\n\n*   [`01b11fe`](https://github.com/remarkjs/react-markdown/commit/01b11fe)\n    [`c613efd`](https://github.com/remarkjs/react-markdown/commit/c613efd)\n    [`a1e1c3f`](https://github.com/remarkjs/react-markdown/commit/a1e1c3f)\n    [`aeee9ac`](https://github.com/remarkjs/react-markdown/commit/aeee9ac)\n    Use ESM\n    (please [read this](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c))\n*   [`3dffd6a`](https://github.com/remarkjs/react-markdown/commit/3dffd6a)\n    Update dependencies\n    (upgrade all your plugins and this should go fine)\n\n### Internals\n\n*   [`8b5481c`](https://github.com/remarkjs/react-markdown/commit/8b5481c)\n    [`fb1b512`](https://github.com/remarkjs/react-markdown/commit/fb1b512)\n    [`144af79`](https://github.com/remarkjs/react-markdown/commit/144af79)\n    Replace `jest` with `uvu`\n*   [`8c572df`](https://github.com/remarkjs/react-markdown/commit/8c572df)\n    Replace `rollup` with `esbuild`\n*   [`8737eac`](https://github.com/remarkjs/react-markdown/commit/8737eac)\n    [`28d4c75`](https://github.com/remarkjs/react-markdown/commit/28d4c75)\n    [`b2dd046`](https://github.com/remarkjs/react-markdown/commit/b2dd046)\n    Refactor code-style\n\n## 6.0.3 - 2021-07-30\n\n*   [`13367ed`](https://github.com/remarkjs/react-markdown/commit/13367ed)\n    Fix types to include each element w/ its properties\n*   [`0a1931a`](https://github.com/remarkjs/react-markdown/commit/0a1931a)\n    Fix to add min version of `property-information`\n\n## 6.0.2 - 2021-05-06\n\n*   [`cefc02d`](https://github.com/remarkjs/react-markdown/commit/cefc02d)\n    Add string type for `className`s\n*   [`6355e45`](https://github.com/remarkjs/react-markdown/commit/6355e45)\n    Fix to pass `vfile` to plugins\n*   [`5cf6e1b`](https://github.com/remarkjs/react-markdown/commit/5cf6e1b)\n    Fix to add warning when non-strings are given as `children`\n\n## 6.0.1 - 2021-04-23\n\n*   [`2e956be`](https://github.com/remarkjs/react-markdown/commit/2e956be)\n    Fix whitespace in table elements\n*   [`d36048a`](https://github.com/remarkjs/react-markdown/commit/d36048a)\n    Add architecture section to readme\n\n## 6.0.0 - 2021-04-15\n\nWelcome to version 6.\nThis a major release and therefore contains breaking changes.\n\n### Change `renderers` to `components`\n\n`react-markdown` used to let you define components for *markdown* constructs\n(`link`, `delete`, `break`, etc).\nThis proved complex as users didn’t know about those names or markdown\npeculiarities (such as that there are fully formed links *and* link references).\n\nSee [**GH-549**](https://github.com/remarkjs/react-markdown/issues/549) for more\non why this changed.\nSee [**Appendix B: Components** in\n`readme.md`](https://github.com/remarkjs/react-markdown#appendix-b-components)\nfor more on components.\n\n<details>\n<summary>Show example of needed change</summary>\n\nBefore (**broken**):\n\n```jsx\n<Markdown\n  renderers={{\n    // Use a fancy hr\n    thematicBreak: ({node, ...props}) => <MyFancyRule {...props} />\n  }}\n>{`***`}</Markdown>\n```\n\nNow (**fixed**):\n\n```jsx\n<Markdown\n  components={{\n    // Use a fancy hr\n    hr: ({node, ...props}) => <MyFancyRule {...props} />\n  }}\n>{`***`}</Markdown>\n```\n\n</details>\n\n<details>\n<summary>Show conversion table</summary>\n\n| Type (`renderers`) | Tag names (`components`) |\n| - | - |\n| `blockquote` | `blockquote` |\n| `break` | `br` |\n| `code`, `inlineCode` | `code`, `pre`**​\\*​** |\n| `definition` | **†** |\n| `delete` | `del`**‡** |\n| `emphasis` | `em` |\n| `heading` | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`**§** |\n| `html`, `parsedHtml`, `virtualHtml` | **‖** |\n| `image`, `imageReference` | `img`**†** |\n| `link`, `linkReference` | `a`**†** |\n| `list` | `ol`, `ul`**¶** |\n| `listItem` | `li` |\n| `paragraph` | `p` |\n| `root` | **​\\*\\*​** |\n| `strong` | `strong` |\n| `table` | `table`**‡** |\n| `tableHead` | `thead`**‡** |\n| `tableBody` | `tbody`**‡** |\n| `tableRow` | `tr`**‡** |\n| `tableCell` | `td`, `th`**‡** |\n| `text` | |\n| `thematicBreak` | `hr` |\n\n*   **​\\*​** It’s possible to differentiate between code based on the `inline`\n    prop.\n    Block code is also wrapped in a `pre`\n*   **†** Resource (`[text](url)`) and reference (`[text][id]`) style links and\n    images (and their definitions) are now resolved and treated the same\n*   **‡** Available when using\n    [`remark-gfm`](https://github.com/remarkjs/remark-gfm)\n*   **§** It’s possible to differentiate between heading based on the `level`\n    prop\n*   **‖** When using `rehype-raw` (see below), components for those elements\n    can also be used (for example, `abbr` for\n    `<abbr title=\"HyperText Markup Language\">HTML</abbr>`)\n*   **¶** It’s possible to differentiate between lists based on the `ordered`\n    prop\n*   **​\\*\\*​** Wrap `ReactMarkdown` in a component instead\n\n</details>\n\n### Add `rehypePlugins`\n\nWe’ve added another plugin system:\n[**rehype**](https://github.com/rehypejs/rehype).\nIt’s similar to remark (what we’re using for markdown) but for HTML.\n\nThere are many rehype plugins.\nSome examples are\n[`@mapbox/rehype-prism`](https://github.com/mapbox/rehype-prism)\n(syntax highlighting with Prism),\n[`rehype-katex`](https://github.com/remarkjs/remark-math/tree/HEAD/packages/rehype-katex)\n(rendering math with KaTeX), or\n[`rehype-autolink-headings`](https://github.com/rehypejs/rehype-autolink-headings)\n(adding links to headings).\n\nSee [List of plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md)\nfor more plugins.\n\n<details>\n<summary>Show example of feature</summary>\n\n```jsx\nimport rehypeHighlight from 'rehype-highlight'\n\n<Markdown rehypePlugins={[rehypeHighlight]}>{`~~~js\nconsole.log(1)\n~~~`}</Markdown>\n```\n\n</details>\n\n### Remove buggy HTML in markdown parser\n\nIn a lot of cases, you should not use HTML in markdown: it’s most always unsafe.\nAnd it defeats much of the purpose of this project (not relying on\n`dangerouslySetInnerHTML`).\n\n`react-markdown` used to have an opt-in HTML parser with a bunch of bugs.\nAs we now support rehype plugins, we can defer that work to a rehype plugin.\nTo support HTML in markdown with `react-markdown`, use\n[`rehype-raw`](https://github.com/rehypejs/rehype-raw).\nThe `astPlugins` and `allowDangerousHtml` (previously called `escapeHtml`) props\nare no longer needed and were removed.\n\nWhen using `rehype-raw`, you should probably use\n[`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize)\ntoo.\n\n<details>\n<summary>Show example of needed change</summary>\n\nBefore (**broken**):\n\n```jsx\nimport MarkdownWithHtml from 'react-markdown/with-html'\n\n<MarkdownWithHtml>{`# Hello, <i>world</i>!`}</MarkdownWithHtml>\n```\n\nNow (**fixed**):\n\n```jsx\nimport Markdown from 'react-markdown'\nimport rehypeRaw from 'rehype-raw'\nimport rehypeSanitize from 'rehype-sanitize'\n\n<Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>{`# Hello, <i>world</i>!`}</Markdown>\n```\n\n</details>\n\n### Change `source` to `children`\n\nInstead of passing a `source` pass `children` instead:\n\n<details>\n<summary>Show example of needed change</summary>\n\nBefore (**broken**):\n\n```jsx\n<Markdown source=\"some\\nmarkdown\"></Markdown>\n```\n\nNow (**fixed**):\n\n```jsx\n<Markdown>{`some\nmarkdown`}</Markdown>\n```\n\nOr (**also fixed**):\n\n```jsx\n<Markdown children={`some\nmarkdown`} />\n```\n\n</details>\n\n### Replace `allowNode`, `allowedTypes`, and `disallowedTypes`\n\nSimilar to the `renderers` to `components` change, the filtering options\nalso changed from being based on markdown names towards being based on HTML\nnames: `allowNode` to `allowElement`, `allowedTypes` to `allowedElements`, and\n`disallowedTypes` to `disallowedElements`.\n\n<details>\n<summary>Show example of needed change</summary>\n\nBefore (**broken**):\n\n```jsx\n<Markdown\n  // Skip images\n  disallowedTypes={['image']}\n>{`![alt text](./image.url)`}</Markdown>\n```\n\nNow (**fixed**):\n\n```jsx\n<Markdown\n  // Skip images\n  disallowedElements={['img']}\n>{`![alt text](./image.url)`}</Markdown>\n```\n\n***\n\nBefore (**broken**):\n\n```jsx\n<Markdown\n  // Skip h1\n  allowNode={(node) => node.type !== 'heading' || node.depth !== 1}\n>{`# main heading`}</Markdown>\n```\n\nNow (**fixed**):\n\n```jsx\n<Markdown\n  // Skip h1\n  allowElement={(element) => element.tagName !== 'h1'}\n>{`# main heading`}</Markdown>\n```\n\n</details>\n\n### Change `includeNodeIndex` to `includeElementIndex`\n\nSimilar to the `renderers` to `components` change, this option to pass more info\nto components also changed from being based on markdown to being based on HTML.\n\n<details>\n<summary>Show example of needed change</summary>\n\nBefore (**broken**):\n\n```jsx\n<Markdown\n  includeNodeIndex={true}\n  renderers={{\n    paragraph({node, index, parentChildCount, ...props}) => <MyFancyParagraph {...props} />\n  }}\n>{`Some text`}</Markdown>\n```\n\nNow (**fixed**):\n\n```jsx\n<Markdown\n  includeElementIndex={true}\n  components={{\n    p({node, index, siblingsCount, ...props}) => <MyFancyParagraph {...props} />\n  }}\n>{`Some text`}</Markdown>\n```\n\n</details>\n\n### Change signature of `transformLinkUri`, `linkTarget`\n\nThe second parameter of these functions (to rewrite `href` on `a` or to define\n`target` on `a`) are now [hast](https://github.com/syntax-tree/hast) (HTML AST)\ninstead of [mdast](https://github.com/syntax-tree/mdast) (markdown AST).\n\n### Change signature of `transformImageUri`\n\nThe second parameter of this function was always `undefined` and the fourth was\nthe `alt` (`string`) on the image.\nThe second parameter is now that `alt`.\n\n### Remove support for React 15, IE11\n\nWe now use ES2015 (such as `Object.assign`) and removed certain hacks to work\nwith React 15 and older.\n\n## 5.0.3 - 2020-10-23\n\n*   [`bb0bdde`](https://github.com/remarkjs/react-markdown/commit/bb0bdde)\n    Unlock peer dependency on React to allow v17\n*   [`24e42bd`](https://github.com/remarkjs/react-markdown/commit/24e42bd)\n    Fix exception on missing element from `html-to-react`\n*   [`3d363e9`](https://github.com/remarkjs/react-markdown/commit/3d363e9)\n    Fix umd browser build\n\n## 5.0.2 - 2020-10-23\n\n*   [`4dadaba`](https://github.com/remarkjs/react-markdown/commit/4dadaba)\n    Fix to allow combining `allowedTypes`, `unwrapDisallowed` in types\n\n## 5.0.1 - 2020-10-21\n\n*   [`c3dc5ee`](https://github.com/remarkjs/react-markdown/commit/c3dc5ee)\n    Fix to not crash on empty text nodes\n\n## 5.0.0 - 2020-10-19\n\n### BREAKING\n\n#### Maintained by [unified](https://unifiedjs.com)\n\nThis project is now maintained by the unified collective, which also houses the\nunderlying tools used in `react-markdown`: hundreds of projects for working with\nmarkdown and markup related things (including MDX).\nWe have cleaned the project: updated dependencies, improved\ndocs/tests/coverage/types, cleaned the issue tracker, and fixed a couple of\nbugs, but otherwise *much should be the same*.\n\n#### Upgrade `remark-parse`\n\nThe parser used in `react-markdown` has been upgraded to the latest version.\nIt is now 100% CommonMark compliant: that means it works the same as in other\nplaces, such as Discourse, Reddit, Stack Overflow, and GitHub.\nNote that GitHub does extend CommonMark: to match how Markdown works on GitHub,\nuse the [`remark-gfm`](https://github.com/remarkjs/remark-gfm) plugin.\n\n*   [`remark-parse@9.0.0`](https://github.com/remarkjs/remark/releases/tag/remark-parse%409.0.0)\n*   [`remark-parse@8.0.0`](https://github.com/remarkjs/remark/releases/tag/remark-parse%408.0.0)\n*   [`remark-parse@7.0.0`](https://github.com/remarkjs/remark/releases/tag/remark-parse%407.0.0)\n*   [`remark-parse@6.0.0`](https://github.com/remarkjs/remark/releases/tag/remark-parse%406.0.0)\n\n#### New serializer property: `node`\n\nA new `node` prop is passed to all non-tag/non-fragment renderers.\nThis contains the raw [mdast](https://github.com/syntax-tree/mdast) AST node,\nwhich opens up a number of interesting possibilities.\nThe breaking change is for renderers which blindly spread their props to an\nunderlying component/tag.\nFor instance:\n\n```jsx\n<ReactMarkdown renderers={{link: props => <a {...props} />}} … />\n```\n\nShould now be written as:\n\n```jsx\n<ReactMarkdown renderers={{link: ({node, ...props}) => <a {...props} />}} … />\n```\n\n#### List/list item `tight` property replaced by `spread`\n\nPreviously, the `tight` property would hint as to whether or not list items\nshould be wrapped in paragraphs.\nThis logic has now been replaced by a new `spread` property, which behaves\nslightly differently.\n[Read more](https://github.com/remarkjs/remark/pull/364).\n\n## 4.3.1 - 2020-01-05\n\n### Fixes\n\n*   (Typings) Fix incorrect typescript definitions (Peng Guanwen)\n\n## 4.3.0 - 2020-01-02\n\n### Fixes\n\n*   (Typings) Add typings for `react-markdown/html-parser` (Peng Guanwen)\n\n## 4.2.2 - 2019-09-03\n\n### Fixes\n\n*   (Typings) Inline `RemarkParseOptions` for now (Espen Hovlandsdal)\n\n## 4.2.1 - 2019-09-01\n\n### Fixes\n\n*   (Typings) Fix incorrect import - `RemarkParseOptions` (Jakub Chrzanowski)\n\n## 4.2.0 - 2019-09-01\n\n### Added\n\n*   Add support for plugins that use AST transformations (Frankie Ali)\n\n### Fixes\n\n*   (Typings) Add `parserOptions` to type defintions (Ted Piotrowski)\n*   Allow renderer to be any React element type (Nathan Bierema)\n\n## 4.1.0 - 2019-06-24\n\n### Added\n\n*   Add prop `parserOptions` to specify options for remark-parse (Kelvin Chan)\n\n## 4.0.9 - 2019-06-22\n\n### Fixes\n\n*   (Typings) Make transformLinkUri & transformImageUri actually nullable\n    (Florentin Luca Rieger)\n\n## 4.0.8 - 2019-04-14\n\n### Fixes\n\n*   Fix HTML parsing of elements with a single child vs. multiple children\n    (Nicolas Venegas)\n\n## 4.0.7 - 2019-04-14\n\n### Fixes\n\n*   Fix matching of replaced non-void elements in HTML parser plugin (Nicolas\n    Venegas)\n*   Fix HTML parsing of multiple void elements (Nicolas Venegas)\n*   Fix void element children invariant violation (Nicolas Venegas)\n\n## 4.0.6 - 2019-01-04\n\n### Fixes\n\n*   Mitigate regex ddos by upgrading html-to-react (Christoph Werner)\n*   Update typings to allow arbitrary node types (Jesse Pinho)\n*   Readme: Add note about only parsing plugins working (Vincent Tunru)\n\n## 4.0.4 - 2018-11-30\n\n### Changed\n\n*   Upgrade dependencies (Espen Hovlandsdal)\n\n## 4.0.3 - 2018-10-11\n\n### Fixes\n\n*   Output paragraph element for last item in loose list (Jeremy Moseley)\n\n## 4.0.2 - 2018-10-05\n\n### Fixes\n\n*   Fix text rendering in React versions lower than or equal to 15 (Espen\n    Hovlandsdal)\n\n## 4.0.1 - 2018-10-03\n\n### Fixes\n\n*   \\[TypeScript] Fix TypeScript index signature for renderers (Linus Unnebäck)\n\n## 4.0.0 - 2018-10-03\n\n### BREAKING\n\n*   `text` is now a first-class node + renderer\n    — if you are using `allowedNodes`, it needs to be included in this list.\n    Since it is now a React component, it will be passed an object of props\n    instead of the old approach where a string was passed.\n    `children` will contain the actual text string.\n*   On React >= 16.2, if no `className` prop is provided, a fragment will be\n    used instead of a div.\n    To always render a div, pass `'div'` as the `root` renderer.\n*   On React >= 16.2, escaped HTML will no longer be rendered with div/span\n    containers\n*   The UMD bundle now exports the component as `window.ReactMarkdown` instead\n    of `window.reactMarkdown`\n\n### Added\n\n*   HTML parser plugin for full HTML compatibility (Espen Hovlandsdal)\n\n### Fixes\n\n*   URI transformer allows uppercase http/https URLs (Liam Kennedy)\n*   \\[TypeScript] Strongly type the keys of `renderers` (Linus Unnebäck)\n\n## 3.6.0 - 2018-09-05\n\n### Added\n\n*   Add support for passing index info to renderers (Beau Roberts)\n\n## 3.5.0 - 2018-09-03\n\n### Added\n\n*   Allow specifying `target` attribute for links (Marshall Smith)\n\n## 3.4.1 - 2018-07-25\n\n### Fixes\n\n*   Bump dependency for mdast-add-list-metadata as it was using ES6 features\n    (Espen Hovlandsdal)\n\n## 3.4.0 - 2018-07-25\n\n### Added\n\n*   Add more metadata props to list and listItem (André Staltz)\n    *   list: `depth`\n    *   listItem: `ordered`, `index`\n\n### Fixes\n\n*   Make `source` property optional in typescript definition (gRoberts84)\n\n## 3.3.4 - 2018-06-19\n\n### Fixes\n\n*   Fix bug where rendering empty link references (`[][]`) would fail (Dennis S)\n\n## 3.3.3 - 2018-06-14\n\n### Fixes\n\n*   Fix bug where unwrapping certain disallowed nodes would fail (Petr Gazarov)\n\n## 3.3.2 - 2018-05-07\n\n### Changes\n\n*   Add `rawSourcePos` property for passing structured source position info to\n    renderers (Espen Hovlandsdal)\n\n## 3.3.1 - 2018-05-07\n\n### Changes\n\n*   Pass properties of unknown nodes directly to renderer (Jesse Pinho)\n*   Update TypeScript definition and prop types (ClassicDarkChocolate)\n\n## 3.3.0 - 2018-03-06\n\n### Added\n\n*   Add support for fragment renderers (Benjamim Sonntag)\n\n## 3.2.2 - 2018-02-26\n\n### Fixes\n\n*   Fix language escaping in code blocks (Espen Hovlandsdal)\n\n## 3.2.1 - 2018-02-21\n\n### Fixes\n\n*   Pass the React key into an overridden text renderer (vanchagreen)\n\n## 3.2.0 - 2018-02-12\n\n### Added\n\n*   Allow overriding text renderer (Thibaud Courtoison)\n\n## 3.1.5 - 2018-02-03\n\n### Fixes\n\n*   Only use first language from code block (Espen Hovlandsdal)\n\n## 3.1.4 - 2017-12-30\n\n### Fixes\n\n*   Enable transformImageUri for image references (evoye)\n\n## 3.1.3 - 2017-12-16\n\n### Fixes\n\n*   Exclude babel config from npm package (Espen Hovlandsdal)\n\n## 3.1.2 - 2017-12-16\n\n### Fixes\n\n*   Fixed partial table exception (Alexander Wong)\n\n## 3.1.1 - 2017-12-11\n\n### Fixes\n\n*   Add readOnly property to checkboxes (Phil Rajchgot)\n\n## 3.1.0 - 2017-11-30\n\n### Added\n\n*   Support for checkbox lists (Espen Hovlandsdal)\n\n### Fixes\n\n*   Better typings (Igor Kamyshev)\n\n## 3.0.1 - 2017-11-21\n\n### Added\n\n*   *Experimental* support for plugins (Espen Hovlandsdal)\n\n### Changes\n\n*   Provide more arguments to `transformLinkUri`/`transformImageUri` (children,\n    title, alt) (mudrz)\n\n## 3.0.0 - 2017-11-20\n\n### Notes\n\n*   **FULL REWRITE**.\n    Changed parser from CommonMark to Markdown.\n    Big, breaking changes.\n    See *BREAKING* below.\n\n### Added\n\n*   Table support!\n    *   New types: `table`, `tableHead`, `tableBody`, `tableRow`, `tableCell`\n*   New type: `delete` (`~~foo~~`)\n*   New type: `imageReference`\n*   New type: `linkReference`\n*   New type: `definition`\n*   Hacky, but basic support for React-native rendering of attributeless HTML\n    nodes (`<kbd>`, `<sub>`, etc)\n\n### BREAKING\n\n*   Container props removed (`containerTagName`, `containerProps`), override\n    `root` renderer instead\n*   `softBreak` option removed.\n    New solution will be added at some point in the future.\n*   `escapeHtml` is now TRUE by default\n*   `HtmlInline`/`HtmlBlock` are now named `html` (use `isBlock` prop to check\\\n    if inline or block)\n*   Renderer names are camelcased and in certain cases, renamed.\n    For instance:\n    *   `Emph` => `emphasis`\n    *   `Item` => `listItem`\n    *   `Code` => `inlineCode`\n    *   `CodeBlock` => `code`\n    *   `linebreak`/`hardbreak` => `break`\n*   All renderers: `literal` prop is now called `value`\\* List renderer: `type`\n    prop is now a boolean named `ordered` (`Bullet` => `false`, `Ordered` =>\n    `true`)\n*   `walker` prop removed.\n    Code depending on this will have to be rewritten to use the `astPlugins`\n    prop, which functions differently.\n*   `allowNode` has new arguments (node, index, parent)\n    — node has different props, see renderer props\n*   `childBefore` and `childAfter` props removed.\n    Use `root` renderer instead.\n*   `parserOptions` removed (new parser, so the old options doesn’t make sense\n    anymore)\n\n## 2.5.1 - 2017-11-11\n\n### Changes\n\n*   Fix `<br/>` not having a node key (Alex Zaworski)\n\n## 2.5.0 - 2017-04-10\n\n### Changes\n\n*   Fix deprecations for React v15.5 (Renée Kooi)\n\n## 2.4.6 - 2017-03-14\n\n### Changes\n\n*   Fix too strict TypeScript definition (Rasmus Eneman)\n*   Update JSON-loader info in readme to match webpack 2 (Robin Wieruch)\n\n### Added\n\n*   Add ability to pass options to the CommonMark parser (Evan Hensleigh)\n\n## 2.4.4 - 2017-01-16\n\n### Changes\n\n*   Fixed TypeScript definitions (Kohei Asai)\n\n## 2.4.3 - 2017-01-12\n\n### Added\n\n*   Added TypeScript definitions (Ibragimov Ruslan)\n\n## 2.4.2 - 2016-07-09\n\n### Added\n\n*   Added UMD-build (`umd/react-markdown.js`) (Espen Hovlandsdal)\n\n## 2.4.1 - 2016-07-09\n\n### Changes\n\n*   Update `commonmark-react-renderer`, fixing a bug with missing nodes\n    (Espen Hovlandsdal)\n\n## 2.4.0 - 2016-07-09\n\n### Changes\n\n*   Plain DOM-node renderers are now given only their respective props.\n    Fixes warnings when using React >= 15.2 (Espen Hovlandsdal)\n\n### Added\n\n*   New `transformImageUri` option allows you to transform URIs for images\n    (Petri Lehtinen)\n\n## 2.3.0 - 2016-06-06\n\n## Added\n\n*   The `walker` instance is now passed to the `walker` callback function\n    (Riku Rouvila)\n\n## 2.2.0 - 2016-04-20\n\n*   Add `childBefore`/`childAfter` options (Thomas Lindstrøm)\n\n## 2.1.1 - 2016-03-25\n\n*   Add `containerProps` option (Thomas Lindstrøm)\n\n## 2.1.0 - 2016-03-12\n\n### Changes\n\n*   Join sibling text nodes into one text node (Espen Hovlandsdal)\n\n## 2.0.1 - 2016-02-21\n\n### Changed\n\n*   Update `commonmark-react-renderer` dependency to latest version to add keys\n    to all elements and simplify custom renderers\n\n## 2.0.0 - 2016-02-21\n\n### Changed\n\n*   **Breaking change**: The renderer now requires Node 0.14 or higher.\n    This is because the renderer uses stateless components internally.\n*   **Breaking change**: `allowNode` now receives different properties in the\n    options argument.\n    See `README.md` for more details.\n*   **Breaking change**: CommonMark has changed some type names.\n    `Html` is now `HtmlInline`, `Header` is now `Heading` and `HorizontalRule`\n    is now `ThematicBreak`.\n    This affects the `allowedTypes` and `disallowedTypes` options.\n*   **Breaking change**: A bug in the `allowedTypes`/`disallowedTypes` and\n    `allowNode` options made them only applicable to certain types.\n    In this version, all types are filtered, as expected.\n*   **Breaking change**: Link URIs are now filtered through an XSS-filter by\n    default, prefixing “dangerous” protocols such as `javascript:` with `x-`\n    (eg: `javascript:alert('foo')` turns into `x-javascript:alert('foo')`).\n    This can be overridden with the `transformLinkUri`-option.\n    Pass `null` to disable the feature or a custom function to replace the\n    built-in behaviour.\n\n### Added\n\n*   New `renderers` option allows you to customize which React component should\n    be used for rendering given types.\n    See `README.md` for more details.\n    (Espen Hovlandsdal / Guillaume Plique)\n*   New `unwrapDisallowed` option allows you to select if the contents of a\n    disallowed node should be “unwrapped” (placed into the disallowed node\n    position).\n    For instance, setting this option to true and disallowing a link would still\n    render the text of the link, instead of the whole link node and all it’s\n    children disappearing.\n    (Espen Hovlandsdal)\n*   New `transformLinkUri` option allows you to transform URIs in links.\n    By default, an XSS-filter is used, but you could also use this for use cases\n    like transforming absolute to relative URLs, or similar.\n    (Espen Hovlandsdal)\n\n## 1.2.4 - 2016-01-28\n\n### Changed\n\n*   Rolled back dependencies because of breaking changes\n\n## 1.2.3 - 2016-01-24\n\n### Changed\n\n*   Updated dependencies for both `commonmark` and `commonmark-react-parser` to\n    work around an embarrassing oversight on my part.\n\n## 1.2.2 - 2016-01-08\n\n### Changed\n\n*   Reverted change from 1.2.1 that uses the dist version.\n    Instead, documentation is added that specified the need for `json-loader` to\n    be enabled when using webpack.\n\n## 1.2.1 - 2015-12-29\n\n### Fixed\n\n*   Use pre-built (dist version) of commonmark renderer in order to work around\n    JSON-loader dependency.\n\n## 1.2.0 - 2015-12-16\n\n### Added\n\n*   Added new `allowNode`-property.\n    See README for details.\n\n## 1.1.4 - 2015-12-14\n\n### Fixed\n\n*   Set correct `libraryTarget` to make UMD builds work as expected\n\n## 1.1.3 - 2015-12-14\n\n### Fixed\n\n*   Update babel dependencies and run prepublish only as actual prepublish, not\n    install\n\n## 1.1.1 - 2015-11-28\n\n### Fixed\n\n*   Fixed issue with React external name in global environment (`react` vs `React`)\n\n## 1.1.0 - 2015-11-22\n\n### Changed\n\n*   Add ability to allow/disallow specific node types (`allowedTypes`/`disallowedTypes`)\n\n## 1.0.5 - 2015-10-22\n\n### Changed\n\n*   Moved React from dependency to peer dependency.")

  return (
    <div className="container mx-auto mt-10 text-left">
      <a href="#">
        <h2 className="my-1 text-4xl font-medium text-gray-900">
          {tutorial.title}
        </h2>
      </a>

      <div className="flex space-x-1 mt-2 mb-5">
        <span
            className="whitespace-nowrap uppercase font-[500] rounded-full px-4 py-1 text-xs bg-red-100"
          >
          {tutorial.chain}
        </span>
        <DifficultyBadge difficulty={tutorial.difficulty} />
      </div>

      <hr />

      <div class="grid grid-cols-3 gap-4 mt-5">
        <div class="col-span-2 ...">
          <ReactMarkdown children={content} remarkGfm={remarkGfm} />
        </div>
        <div class="...">
          <p>Table of Content</p>
        </div>
      </div>
    </div>
  )
}

export default TutorialSingle