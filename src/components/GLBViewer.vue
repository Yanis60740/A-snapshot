<!-- src/components/GLBScrollViewer.vue -->
<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'

const canvas = ref(null)
const virtualScroll = inject('virtualScroll')

onMounted(() => {
  let mixer
  let animationDuration = 0
  let currentScroll = 0

  const minScroll = 0 // ← seuil minimal à ne pas dépasser

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(0, 2, 2)
  scene.add(light)

  const loader = new GLTFLoader()
  loader.load('/assets/models/BOTWAnim.glb', (gltf) => {
    const model = gltf.scene
    scene.add(model)
    model.scale.set(7, 7, 1.5)
    model.position.set(0, -8, 100)

    if (gltf.animations.length > 0) {
      mixer = new THREE.AnimationMixer(model)
      const action = mixer.clipAction(gltf.animations[0])
      action.play()
      animationDuration = gltf.animations[0].duration
    }

    animate()
  })

  function animate() {
    requestAnimationFrame(animate)

    let rawScroll = virtualScroll?.value || 0

    // ⛔ Ne pas descendre sous minScroll
    if (rawScroll < minScroll) {
      rawScroll = minScroll
      if (virtualScroll) virtualScroll.value = minScroll
    }

    // Smooth scroll
    currentScroll = gsap.utils.interpolate(currentScroll, rawScroll, 0.1)

    // L’animation progresse selon le scroll
    if (mixer && animationDuration > 0) {
      const scrollPercent = (currentScroll - minScroll) / 5000 // adaptateur de vitesse
      const clampedPercent = Math.max(scrollPercent, 0) // évite négatif
      const time = clampedPercent * animationDuration
      mixer.setTime(time)
    }

    camera.position.z = 5 - currentScroll * 0.1
    renderer.render(scene, camera)
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
})
</script>


<style scoped>
canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: block;
}
</style>
