import GlowCapture from "./components/GlowCapture.vue";
import GlowElement from "./components/GlowElement.vue";

const VueGlow = {
  install: (app, options) => {
    app.component("GlowCapture", GlowCapture);
    app.component("GlowElement", GlowElement);
  },
};

export default VueGlow;
