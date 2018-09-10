webpackJsonp([0xf0978e2b5559],{353:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Welcome to the complete introduction to React v4. This is the fourth revision of this course and the most comprehensive one yet. While the previous three courses were all modifications of the same app, this one is brand new, re-written from the ground up. The previous versions of this coruse all have value and if one of them touches on a piece of technology that you want to use, you should definitely check that out (particularly <a href="https://btholt.github.io/complete-intro-to-react/">v3</a>.)</p>\n<p>This course is unique as compared to other React introductions because this course attempts to teach you not only React but the ecosystem around React. When I was learning React myself, I found myself frustrated that it seemed like every tutorial started on step 14 and left out the steps 1-13 of how to set up a React project. React is nearly never used by itself so it\'s useful to know the tools you\'re using. I believe you as a developer should know how your tools works and what purpose they\'re serving. Many times have I taught courses similar to this one to hear people using tools and complaining about them because they don\'t actually know why they\'re using them, just that they\'re necessary. As such, in this course we show you how to build projects without any using tools at all and introduce the various tools, one at a time so you understand the actual problem being solved by the tool. Hopefully given the knowledge of the problem solved by the tool you\'ll embrace the tools despite their complexities due to the ease and power they offer you.</p>\n<p>What differs v4 from the previous iterations is that it\'s intended to be more modular. The first half of the course focuses nearly exclusively on React and little else (just the bare tools to get a project going.) The second half of the course is a series of independent modules. If you want to learn one module and not the others, that\'s fine! They are all independent of each other.</p>\n<p>Through out the course you\'ll see something like this:</p>\n<h2 id="-long-series-of-numbers-and-letters"><a href="#-long-series-of-numbers-and-letters" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🌳 <code class="language-text">&lt;long series of numbers and letters&gt;</code></h2>\n<p>This is a point where I have stopped and committed this to a repo. If you fall behind, get stuck, or just want to skip ahead, just use git and check out that commit! You can also go explore the those commits on GitHub too to see what they look like. The <a href="https://github.com/btholt/complete-intro-to-react-v4">repo is here</a>.</p>\n<p>If you don\'t know how to use git so well, let me recommend to you my co-worker and close friend\'s course, <a href="https://frontendmasters.com/courses/git-in-depth/">Git In-depth</a>. Git is definitely a tool worth investing time into; while it may seem boring and take a lot of time and energy to learn, some day it was save you days if not weeks worth of work.</p>\n<p>In the mean time while you take this course and you don\'t know git so well, I\'d suggest using <a href="https://www.sourcetreeapp.com/">Sourcetree</a> from Atlassian. This tool will allow you to add your repo to it and move back and forth in commit history by using the right-click > "Checkout …". If you need to, you can stash changes (which saves them off into a side stash) that can be accessed later if you\'re trying to keep your changes.</p>\n<h2 id="who-am-i"><a href="#who-am-i" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Who Am I?</h2>\n<p><img src="https://btholt.github.io/complete-intro-to-react-v4/static/brian-cb2dee4ec3ac88218f2a680c2885f6fc-08cb4.jpg" alt="Brian drinking a beer"></p>\n<p>My name is Brian Holt. I\'m presently (as of writing) a cloud developer advocate at Microsoft. That means I talk to people why I think Azure is a pretty cool place to deploy your code. I write a lot of code demos and help with some open source libraries. I\'ve taught a lot of lessons on <a href="https://frontendmasters.com/teachers/brian-holt/">Frontend Masters</a> and used to be on the frontend development podcast <a href="http://frontendhappyhour.com/">Front End Happy Hour</a>. Previous to that, I was a senior or staff JavaScript and Node engineer at LinkedIn, Netflix, Reddit, Needle, KSL.com, and NuSkin. I\'m also stoke to be a board member of the amazing organization <a href="https://vetswhocode.io/">Vets Who Code</a>.</p>\n<p>My biggest passions in life are people and experiences. I hope by going through this course that it can improve your life in some meaningful way and that you in turn can improve someone else\'s life. My beautiful wife and I live in Seattle, Washington in the United States of America with our cute little Havanese dog Luna. I\'d almost always rather be traveling and have been fortunate to see over forty countries in the past six years.</p>\n<p>Please catch up with me on social media, would love to chat:</p>\n<ul>\n<li><a href="https://twitter.com/holtbt">Twitter</a></li>\n<li><a href="https://www.instagram.com/briantholt/">Instagram</a></li>\n<li><a href="https://github.com/btholt">GitHub</a></li>\n<li><a href="https://www.linkedin.com/in/btholt/">LinkedIn</a></li>\n</ul>\n<h2 id="why-was-this-course-created"><a href="#why-was-this-course-created" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why was this course created?</h2>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/complete-intro-to-react-v4/static/FrontendMastersLogo-f72cae0c73fecbb6beecea606d8fabd3-a040c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 25.497630331753555%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAm0lEQVQY02NgGAhw0VCb+YCuRgQIr1RX5jihrymKV4OdnZ2cvb29LBBLODg4SAD5KkAsAuIDafGV+tpNh3U1VPfoqO8C4o6DuhqRQL4a0AI3IK17SFfD7KiepgyygSAD5IEGaAFpIyBtDKQtgBjEt203MXQAGlILxFVAQ6YAcRcQLwTiyUA8EYibD+ioNxLt5XMG2sxAF0gRoxYAu0Q0UPEUUdYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Frontend Masters Logo"\n        title=""\n        src="/complete-intro-to-react-v4/static/FrontendMastersLogo-f72cae0c73fecbb6beecea606d8fabd3-ad675.png"\n        srcset="/complete-intro-to-react-v4/static/FrontendMastersLogo-f72cae0c73fecbb6beecea606d8fabd3-07382.png 200w,\n/complete-intro-to-react-v4/static/FrontendMastersLogo-f72cae0c73fecbb6beecea606d8fabd3-8d35a.png 400w,\n/complete-intro-to-react-v4/static/FrontendMastersLogo-f72cae0c73fecbb6beecea606d8fabd3-ad675.png 800w,\n/complete-intro-to-react-v4/static/FrontendMastersLogo-f72cae0c73fecbb6beecea606d8fabd3-a040c.png 1055w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>I love to teach. It\'s a challenging task that forces you to peel back all the knowledge you\'ve gained so you can approach someone who lacks the same experience and terminology you have. It forces you to take amorphous concepts floating in your brain and crystalize them into solid concepts that you can describe. It forces you to acknowledge your gaps in knowledge because you\'ll begin to question things you know others will question. For me to ever master a concept, I have to teach it to someone else.</p>\n<p>Unfortunately life gets in the way. These courses take dozens of hours to prepare and to get right. While I\'d love to just create content all day, I have a (awesome) day job at Microsoft that demands and deserves my full attention. However I\'m grateful to the team at <a href="https://frontendmasters.com/">Frontend Masters</a> for giving me deadlines and incentive to create these courses and then allowing and encouraging me to open source the materials. Not everyone has the money to pay for these courses which is why these materials are and will be forever open source for you to reference and share. I think the video content is pretty good too and so I\'d encourage you to <a href="https://frontendmasters.com/workshops/complete-intro-react-v4/">take a look at the videos on Frontend Masters</a> too if that\'s in the cards for you.</p>\n<p>And hey, if you could take a second and <a href="https://github.com/btholt/complete-intro-to-react-v4">star the repo on GitHub</a> I\'d be super appreciative. It helps me reach more people.</p>',frontmatter:{path:"/intro",title:"Introduction",order:1}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:1,path:"/intro",title:"Introduction"}}},{node:{frontmatter:{order:2,path:"/pure-react",title:"Pure React"}}},{node:{frontmatter:{order:3,path:"/eslint-prettier",title:"npm, ESLint & Prettier"}}},{node:{frontmatter:{order:4,path:"/parcel",title:"Parcel"}}},{node:{frontmatter:{order:5,path:"/jsx",title:"JSX"}}},{node:{frontmatter:{order:6,path:"/react-state-and-lifecycles",title:"State and Lifecycle Methods with React"}}},{node:{frontmatter:{order:7,path:"/reach-router",title:"Reach Router"}}},{node:{frontmatter:{order:8,path:"/async-and-events-in-react",title:"Handling Events and Async UIs with React"}}},{node:{frontmatter:{order:9,path:"/forms",title:"Forms with React"}}},{node:{frontmatter:{order:10,path:"/context",title:"Context"}}},{node:{frontmatter:{order:11,path:"/portals",title:"Portals"}}},{node:{frontmatter:{order:12,path:"/conclusion",title:"Conclusion"}}},{node:{frontmatter:{order:13,path:"/testing",title:"Testing"}}},{node:{frontmatter:{order:14,path:"/emotion",title:"Emotion"}}},{node:{frontmatter:{order:15,path:"/code-splitting",title:"Code Splitting"}}},{node:{frontmatter:{order:16,path:"/redux",title:"Redux"}}},{node:{frontmatter:{order:17,path:"/server-side-rendering",title:"Server Side Rendering"}}},{node:{frontmatter:{order:18,path:"/preact",title:"Preact"}}},{node:{frontmatter:{order:19,path:"/code-organization",title:"Code Organization"}}},{node:{frontmatter:{order:20,path:"/typescript",title:"TypeScript"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---intro-efa39ddc75cb07112740.js.map