import { Text, OrbitControls } from '@react-three/drei'
import Model from './Model.js'
import { useEffect, useRef } from "react";
import { _getTarget } from 'gsap/Observer.js';


export default function Experience() {

        // const elRef0 = useRef()
        // const elRef1 = useRef()
        // const elRef2 = useRef()
        // const elRef3 = useRef()
        // const elRef4 = useRef()
        // const elArray = []

        // useEffect(() =>
        // {
        //     elArray.push(elRef0.current)
        //     elArray.push(elRef1.current)
        //     elArray.push(elRef2.current)
        //     elArray.push(elRef3.current)
        //     elArray.push(elRef4.current)
            


        //     // elArray.addEventListener("click", () =>{
        //     //     console.log(e)
        //     // })

        //     // elArray.forEach( (el, index) => {
        //     //     console.log(el, index)

        //     //     // el.addEventListener("click", (e) => {
        //     //     //     //console.log("clicked", e);
        //     //     // });
        //     // })

        // }, [])
        

        // const showCovenant = () =>
        // {
        //     // const cov = document.querySelectorAll(".covenant")

    
        //     // for (let i = 0; i < cov.length; i++){
        //     //     if (i === number){
        //     //         cov[number].classList.add("see")
        //     //     }
        //     //     else {
        //     //         cov[number].classList.remove("see")
        //     //     }
        //     // }
    
        // }

        // const showCovenant = () =>
        // {
        //     const cov = document.querySelectorAll(".covenant")

        //     console.log(elArray)
    

        // }

        //         const showCovenant = () =>
        // {
        //     const cov = document.querySelector(".obedience")

        //     cov.style.zIndex += 1;
    
        // }


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
                // name="obedience"
                // ref={elRef0}
                onPointerEnter = {() => { document.querySelector(".obedience").classList.toggle("active") }}
                onPointerLeave = {() => { document.querySelector(".obedience").classList.toggle("active") }}
            ></Text>
            <Text
                position={[0.1, 0.2, 0.4]}
                rotation={[0, Math.PI/2, 0]}
                color="#1c1c1c"
                fontSize={0.04}
                maxWidth={0.3}
                textAlign="center"
                // ref={elRef1}
                // name="sacrifice"
                onPointerEnter = {() => { document.querySelector(".sacrifice").classList.toggle("active") }}
                onPointerLeave = {() => { document.querySelector(".sacrifice").classList.toggle("active") }}
            >Law of Sacrifice</Text>
            <Text
                position={[0.1, -0.1, 0]}
                rotation={[0, Math.PI/2, 0]}
                color="#1c1c1c"
                fontSize={0.04}
                maxWidth={0.3}
                textAlign="center"
                // ref={elRef2}
                // name="gospel"
                onPointerEnter = {() => { document.querySelector(".gospel").classList.toggle("active") }}
                onPointerLeave = {() => { document.querySelector(".gospel").classList.toggle("active") }}
            >Law of the Gospel</Text>
            <Text
                position={[0.1, 0.2, -0.4]}
                rotation={[0, Math.PI/2, 0]}
                color="#1c1c1c"
                fontSize={0.04}
                maxWidth={0.3}
                textAlign="center"
                // ref={elRef3}
                // name="chastity"
                onPointerEnter = {() => { document.querySelector(".chastity").classList.toggle("active") }}
                onPointerLeave = {() => { document.querySelector(".chastity").classList.toggle("active") }}
            >Law of Chastity</Text>
            <Text
                position={[0.1, 0.5, -0.45]}
                rotation={[0, Math.PI/2, 0]}
                color="#1c1c1c"
                fontSize={0.04}
                maxWidth={0.3}
                textAlign="center"
                // ref={elRef4}
                // name="consecration"
                onPointerEnter = {() => { document.querySelector(".consecration").classList.toggle("active") }}
                onPointerLeave = {() => { document.querySelector(".consecration").classList.toggle("active") }}
            >Law of Consecration</Text>
        </group>


    </>
}