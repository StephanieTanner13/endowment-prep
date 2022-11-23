import "../style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

function play(){
    const music = document.getElementById('player');

    console.log(music);

}
const Creation = () => {
    useEffect(() => {
        // Day 00 highlight
        const tlH = gsap.timeline({
            scrollTrigger: {
                trigger: ".day00",
                scrub: true,
                start: "-10%",
                end: "20%",
            },
        });

        tlH.to(
            ".highlight",
            { color: "rgba(255,255,255, 1", stagger: 1 },
        );

        tlH.to(
            ".day01-background img",
            { opacity: 1 },
        )

        tlH.to(
            ".day00-text-container",
            { opacity: 0 }
        )

        tlH.to(
            ".day01-text",
            { opacity: 1 }
        )

        //Day01
        const tlParallax = gsap.timeline({
            scrollTrigger: {
                trigger: ".day00",
                start: "-25%",
                end: "50%",
                scrub: true,
            },
        });

        tlParallax.fromTo(".top", { y: 100 }, { y: -200 });
        tlParallax.fromTo(".middle", { y: 300 }, { y: -250 }, "<");
        tlParallax.fromTo(".bottom", { y: -40 }, { y: -300 }, "<");

        //Day02
        const worldImage = document.querySelector(".day02-world-image");

        const tlRotate = gsap.timeline({
            scrollTrigger: {
                trigger: ".day02",
                start: "-25%",
                end: "50%",
                scrub: true,
            },
        });

        tlRotate.to(worldImage, { rotation: 180})

        //Day03
        const tlHi = gsap.timeline({
            scrollTrigger: {
                trigger: ".day03",
                scrub: true,
                start: "-20%",
                end: "10%",
            },
        });

        tlHi.to(
            ".highlight03",
            { color: "rgba(255,255,255, 1", stagger: 1 },
        );

        const tlPin03 = gsap.timeline({
            scrollTrigger: {
                trigger: ".day03",
                start: "0%",
                end: "100%",
                pin: true,
                pinSpacing: false,
            },
        });

        //Day 04
        const tlSplit = gsap.timeline({
            scrollTrigger: {
                trigger: ".day04",
                start: "-15%",
                end: "0%",
                scrub: true,
            },
        });
        tlSplit.fromTo(".sun", { x: "40%" }, { x: "-100%" });
        tlSplit.fromTo(".moon", { x: "-40%" }, { x: "220%" }, "<");

        //Day 05
        const tlParallaxWhale = gsap.timeline({
            scrollTrigger: {
                trigger: ".day05",
                start: "-40%",
                end: "20%",
                scrub: true,
            },
        });

        tlParallaxWhale.fromTo(".whale", { y: 100 }, { y: 0 });

        //Day 6
        const tlPin06 = gsap.timeline({
            scrollTrigger: {
                trigger: ".day06",
                start: "0%",
                end: "100%",
                pin: true,
                pinSpacing: false,
            },
        });

        //Day 07ish
        const tlPin = gsap.timeline({
            scrollTrigger: {
                trigger: ".day07ish",
                start: "0%",
                end: "100%",
                pin: true,
                pinSpacing: false,
            },
        });

        const tlHighlight = gsap.timeline({
            scrollTrigger: {
                trigger: ".day07ish",
                scrub: true,
                start: "-20%",
                end: "25%",
            },
        });

        tlHighlight.to(
            ".highlight07",
            { color: "rgba(255,255,255, 1", stagger: 1 },
        );

        const tlHRemove = gsap.timeline({
            scrollTrigger: {
                trigger: ".day07ish",
                scrub: true,
                start: "0%",
                end: "45%",
            },
        });

        tlHRemove.to(".highlight07", { color: "rgba(255,255,255, 0.4", stagger: 1 });

    }, [])

    return <>
        {/* <!--Day 0 and 1--> */}
        <section className="day00">
            {/* <!--First page Image--> */}
            <div className="day01-background">
                <img src="./images/matter-top.png" className="top" />
                <img src="./images/matter-middle.png" className="middle" />
                <img src="./images/matter-back.png" className="bottom" />
            </div>
            <p className="day00-text-container">
                <span className="highlight">In the beginning...</span>
                <span className="highlight">Darkness</span>
                <span className="highlight">Matter Unorganized</span>
                <span className="highlight">And I, God, said: Let there be light.</span>
            </p>
            <p className="day01-text">And God saw the light that it was good</p>
        </section>
        {/* <!--Day 2--> */}
        <section className="day02">
            <div className="day02-text-container">
                <p>And I, God, said: Let there be a firmament in the midst of the
                    water, and it was so.</p>
                <p>And God called the firmament Heaven.</p>
            </div>
            {/* <!--Background Image day 02--> */}
            <img className="day02-world-image" src="./images/day021.png" />
        </section>
        {/* <!--Day 3--> */}
        <section className="day03">
            <div className="day03-text-container">
                <p className="highlight03">And I, God, said:
                    Let the waters under the heaven be gathered together unto one
                    place, and let the dry land appear.</p>
                <p className="highlight03">Let the earth bring forth grass,
                    the herb yielding seed, and the fruit tree yielding fruit.</p>
            </div>
        </section>
        {/* <!--Day 4--> */}
        <section className="day04">
            <div className="day04-text-container">
                <p>And God said, let there be lights in the firmament of the heaven,
                    to divide the day from the night, and let
                    them be for seasons, and for days, and for years.</p>
                <p>And I God made two great lights; the greater light
                    to rule the day, and the lesser light to rule the night</p>
            </div>
            {/* <!--day 4 Image (Moon and Sun)--> */}
            <div className="day04-images">
                <img src="./images/day021.png" className="sun" />
                <img src="./images/moon.png" className="moon" />
            </div>
        </section>
        {/* <!--Day 5--> */}
        <section className="day05">

            <div className="day05-images">
                <img src="./images/full-whale.png" className="whale" />
            </div>
            <div className="day05-text-container">
                <p>And, I, God said: Let the waters
                    bring forth abundantly the moving
                    creature that hath life, and fowl which
                    may fly above the earth.</p>
            </div>
        </section>

        {/* <!--Day 6--> */}
        <section className="day06">
            <img src="./images/elephant.png" className="day06-images" />
            <div className="day06-text-container">
                <p>Let the Earth bring forth
                    the living creature after
                    his kind, cattle, and creeping things,
                    and beasts of the earth after their kind.</p>
            </div>
        </section>

        <section className="day07ish">
            <div className="day07ish-text-container">
                <p>
                    <span className="highlight07">And I, God, said unto mine Only Begotten,
                        which was with me from the beginning:</span>
                    <span className="highlight07"> Let us make man and woman in our image.</span>
                    <span className="highlight07"> Let them have dominion, be fruitful,
                        and multiply and replenish the earth.</span>
                    <span className="highlight07"> And on the seventh day, God ended
                        His work which he had made; and he rested.</span>
                    <span className="highlight07"> And the Lord God planted a garden
                        Eastward in Eden; and there he put
                        the man and woman whom he had formed.</span>
                </p>
            </div>
        </section>

        <section className="enter">
            <a href="/garden">Enter the Garden</a>
        </section>
    </>
};

export default Creation;