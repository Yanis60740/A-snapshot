<template>
    <div class="threeDViewer" ref="container3d">
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const container3d = ref(null)
let modelRoot = null

const props = defineProps({
  page: Number
})

if (props.page == 1) {
  modelRoot = '/assets/models/model1.glb'
} else if (props.page == 2) {
  modelRoot = '/assets/models/model2.glb'
} else if (props.page == 3) {
  modelRoot = '/assets/models/model3.glb'
} else if (props.page == 4) {
  modelRoot = '/assets/models/model4.glb'
} else if (props.page == 5) {
  modelRoot = '/assets/models/model5.glb'
}

let scene, camera, renderer, controls, model, animationId

onMounted(() => {
  scene = new THREE.Scene()

  const width = container3d.value.clientWidth
  const height = container3d.value.clientHeight

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.set(0, 0, 5)

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(width, height)
  container3d.value.appendChild(renderer.domElement)

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(1, 1, 2)
  scene.add(light)

  const ambient = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambient)

  // Contrôles orbitaux (clic gauche = rotation, clic droit = pan, molette = zoom)
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.enablePan = true
  controls.enableZoom = false
  controls.autoRotate = false // important : pas de rotation auto

  // Charge ton modèle GLB
  const loader = new GLTFLoader()
  loader.load(modelRoot, (gltf) => {
    model = gltf.scene
    scene.add(model)
    model.scale.set(2, 2, 2) // ou essaye 0.5 selon le modèle

    // model.position.set(0, 0, 100)
    const box = new THREE.Box3().setFromObject(model)
    const center = new THREE.Vector3()
    box.getCenter(center)

    // Recentrer le modèle à l'origine
    model.position.sub(center)
    model.rotation.y = Math.PI

    const size = new THREE.Vector3()
    box.getSize(size)

    const maxDim = Math.max(size.x, size.y, size.z)
    const fov = camera.fov * (Math.PI / 180)
    const distance = maxDim / (2 * Math.tan(fov / 2))

    camera.position.z = distance * 1.8// 1.5 = marge visuelle
    camera.lookAt(0, 0, 0)
    renderer.render(scene, camera)
  })

  function animate() {
    animationId = requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()

  window.addEventListener('resize', onWindowResize)
})

function onWindowResize() {
  if (!container3d.value) return
  const width = container3d.value.clientWidth
  const height = container3d.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize)
  if (animationId) cancelAnimationFrame(animationId)
  controls?.dispose()
  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss()
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }
})
</script>

<style scoped>
.threeDViewer {
    width: 500px;
    height: 500px;
    position: relative;
}
</style>
