import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import prism from "lume/plugins/prism.ts";

const site = lume({
    src: "./src",
    dest: "./dist",
  });

// Plugins
site.use(sass({"format": "compressed"}));
site.use(prism());
site.use(minifyHTML({options: { minify_css: false }}));



export default site;
