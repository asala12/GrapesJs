<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import { onMounted, ref } from "vue";
import userDataSelector from "./assets/Blocks/Selector.json";
import userDataText from "./assets/Blocks/Text.json";
import userDataImage from "./assets/Blocks/Image.json";
import userDataLink from "./assets/Blocks/Link.json";
import "./components/source/index";

const canvas = ref(null);
let Data = [];
let editor;
onMounted(() => {
  editor = grapesjs.init({
    container: canvas.value,
    fromElement: true,
    allowScripts: 1,
    storageManager: {
      type: "local",
      autosave: true,
      autoload: true,
    },
    canvas: {
      styles: [],
      scripts: [],
    },
    plugins: ['grapesjs-blocks-bootstrap5'],
    pluginsOpts: {
      
      'grapesjs-blocks-bootstrap5': {
        blocks: {},
        blockCategories: {},
        labels: {},
        gridDevicesPanel: true,
        formPredefinedActions: [

        ]
      }
    },
    canvas: {
      styles: [
        'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
      ],
      scripts: [
        'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'
      ],
    }
  });
});
function LoadBlocks(event) {
  editor.BlockManager.add(userDataSelector.id, userDataSelector);
  editor.BlockManager.add(userDataText.id, userDataText);
  editor.BlockManager.add(userDataImage.id, userDataImage);
  editor.BlockManager.add(userDataLink.id, userDataLink);
}
function UnLoadBlocks(event) {
  editor.BlockManager.clear();
}
function GetComponants(event) {
  Data = JSON.parse(JSON.stringify(editor.getComponents()));
  console.log(Data);
}
function ClearComponants(event) {
  editor.Components.clear();
}
function LoadComponants(event) {
  Data.forEach((element) => {
    console.log(element);
    editor.addComponents(element);
  });
}
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <br /> -->
  <div id="blocks">
    <button @click="LoadBlocks">Load Blocks</button>
    <button @click="UnLoadBlocks">Unload Blocks</button>
    <button @click="GetComponants">Get Componants</button>
    <button @click="ClearComponants">Clear Componants</button>
    <button @click="LoadComponants">Load Componants</button>
  </div>
  <div ref="canvas"></div>

  <!-- <RouterView /> -->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
