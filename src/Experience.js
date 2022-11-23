import { Text, OrbitControls } from '@react-three/drei'
import Model from './Model.js'
import { useEffect, useRef } from "react";
import { _getTarget } from 'gsap/Observer.js';


export default function Experience() {
   return <>
   
   
        <OrbitControls
            minAzimuthAngle={0.2}
            maxAzimuthAngle={2.8}
            maxDistance={3}
            minDistance={3}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableDamping={true} />

        <directionalLight
            intensity={0.7}
            position={[1, 1, 0]}
            lookAt={[0, 0, 0]} />

        <group>
            <Model/>
            <Text
                position={[0.1, 0.5, 0.45]}
                rotation={[0, Math.PI/2, 0]}
                color="#1c1c1c"
                fontSize={0.04}
                maxWidth={0.3}
                textAlign="center"
                text="Law of Obedience"
                onClick = {() => { document.querySelector(".obedience").classList.add("active") }}
                onPointerLeave = {() => { document.querySelector(".obedience").classList.remove("active") }}
            ></Text>
            <Text
                position={[0.1, 0.2, 0.4]}
                rotation={[0, Math.PI/2, 0]}
                color="#1c1c1c"
                fontSize={0.04}
                maxWidth={0.3}
                textAlign="center"
                onClick = {() => { document.querySelector(".sacrifice").classList.add("active") }}
                onPointerLeave = {() => { document.querySelector(".sacrifice").classList.remove("active") }}
            >Law of Sacrifice</Text>
            <Text
                position={[0.1, -0.1, 0]}
                rotation={[0, Math.PI/2, 0]}
                color="#1c1c1c"
                fontSize={0.04}
                maxWidth={0.3}
                onClick = {() => { document.querySelector(".gospel").classList.add("active") }}
                onPointerLeave = {() => { document.querySelector(".gospel").classList.remove("active") }}
            >Law of the Gospel</Text>
            <Text
                position={[0.1, 0.2, -0.4]}
                rotation={[0, Math.PI/2, 0]}
                color="#1c1c1c"
                fontSize={0.04}
                maxWidth={0.3}
                textAlign="center"
                onClick = {() => { document.querySelector(".chastity").classList.add("active") }}
                onPointerLeave = {() => { document.querySelector(".chastity").classList.remove("active") }}
            >Law of Chastity</Text>
            <Text
                position={[0.1, 0.5, -0.45]}
                rotation={[0, Math.PI/2, 0]}
                color="#1c1c1c"
                fontSize={0.04}
                maxWidth={0.3}
                textAlign="center"
                onClick = {() => { document.querySelector(".consecration").classList.add("active") }}
                onPointerLeave = {() => { document.querySelector(".consecration").classList.remove("active") }}
            >Law of Consecration</Text>
        </group>


    </>
}