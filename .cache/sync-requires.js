// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/jemjemzms/Projects/react-gatsby-blog/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jemjemzms/Projects/react-gatsby-blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/jemjemzms/Projects/react-gatsby-blog/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/jemjemzms/Projects/react-gatsby-blog/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/jemjemzms/Projects/react-gatsby-blog/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jemjemzms/Projects/react-gatsby-blog/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/jemjemzms/Projects/react-gatsby-blog/src/pages/page-2.js")),
  "component---src-pages-services-js": preferDefault(require("/Users/jemjemzms/Projects/react-gatsby-blog/src/pages/services.js"))
}

