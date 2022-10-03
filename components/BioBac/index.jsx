import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function BioBac () {
  const mountRef = useRef(null)

  useEffect(() => {
    const currentMount = mountRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      25,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 400
    camera.position.x = -45
    camera.position.y = 30
    scene.add(camera)
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
    renderer.setClearColor(0xffffff, 1)
    currentMount.appendChild(renderer.domElement)
    const gltfLoader = new GLTFLoader()
    gltfLoader.load('/models/BioBac/SuperBioBac.gltf', gltf => {
      scene.add(gltf.scene)
    })
    //Lights
    const light1 = new THREE.DirectionalLight(0xffffff, 2.5)
    light1.position.set(6, 6, 55)
    scene.add(light1)
    const al = new THREE.AmbientLight(0xffffff, 3)
    scene.add(al)
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    const animation = () => {
      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animation)
    }
    animation()
    return () => {
      currentMount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className='w-full h-[300px]'></div>
}

export { BioBac }
