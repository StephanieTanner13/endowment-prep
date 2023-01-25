import "../style.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

const Garden = () => {

    useEffect(() => {

        //Garden of Eden Carousel
        const storylineList = document.querySelectorAll(".bullet");
        const gallery = document.querySelector(".events-content");
        const slides = document.querySelectorAll(".story-gallery-container");
        const lines = document.querySelectorAll(".line");

        let currentStorylineNumber;

        function storylineFunction(){

            storylineList.forEach((storyline, index) => {

                let coord;
                coord = slides[index].getBoundingClientRect().left;

                    storyline.addEventListener("click", (e) => {
    
                        let storylineName = e.target.getAttribute("storyline");
                        var integer = parseInt(storylineName);
        
                        //Check if we are on the same part of the story
                        if (currentStorylineNumber === storylineName) return;
        
                        //Gallery
                        gsap.to(gallery, { x: -coord, duration: 1, ease: "back.out(1)" });
        
                        currentStorylineNumber === storylineName;
        
                        let i;
        
                        for (i = 0; i < storylineList.length; i++) {
                            if (i < integer) {
                                storylineList[i].classList.add("filled");
                                lines[i].classList.add("filled");
                            }
                            else if (i === integer) {
                                storylineList[i].classList.remove("filled");
                                storylineList[i].classList.add("outline");
                                if (i < storylineList.length - 1){
                                    lines[i].classList.remove("filled");
                                }
                            }
                            else {
                                storylineList[i].classList.remove("filled");
                                storylineList[i].classList.remove("outline");
                                if (i < storylineList.length - 1){
                                    lines[i].classList.remove("filled");
                                }
                                
                            }
                        }
                    });

            });
        }

        // window.onresize = function(){ location.reload(); }

        storylineFunction();


        //Expulsion
        const tlPinExpulsion = gsap.timeline({
            scrollTrigger: {
                trigger: ".expulsion",
                start: "0%",
                end: "100%",
                pin: true,
                pinSpacing: false,
            },
        });

        const tlHighlightE = gsap.timeline({
            scrollTrigger: {
                trigger: ".expulsion",
                scrub: true,
                start: "-20%",
                end: "25%",
            },
        });

        tlHighlightE.to(
            ".highlightExpulsion",
            { color: "rgba(255,255,255, 1", stagger: 1 },
        );

        const tlHRemoveEx = gsap.timeline({
            scrollTrigger: {
                trigger: ".expulsion",
                scrub: true,
                start: "0%",
                end: "50%",
            },
        });

        tlHRemoveEx.to(".highlightExpulsion", { color: "rgba(255,255,255, 0.4", stagger: 1 });


    }, [])


    return <>
        <div className="garden">
            <div className="arrow-block">
                <a href="/"><div className="arrow left"></div>Return to the Creation</a>
            </div>
            <section className="horizontal-timeline">
                <div className="timeline">
                    <div className="storyline-bullets-container">
                        <div className="storylines-bullets">
                            <div className="bullet outline bullet1" storyline="0"></div>
                            <div className="line"></div>
                            <div className="bullet" storyline="1"></div>
                            <div className="line"></div>
                            <div className="bullet" storyline="2"></div>
                            <div className="line"></div>
                            <div className="bullet" storyline="3"></div>
                            <div className="line"></div>
                            <div className="bullet" storyline="4"></div>
                            <div className="line"></div>
                            <div className="bullet" storyline="5"></div>
                            <div className="line"></div>
                            <div className="bullet" storyline="6"></div>
                        </div>
                    </div>

                    <div className="events-content">
                        <div className="story-gallery-container storyline0">
                            <div className="storyline">
                                <img src="./images/garden/tree.png" />
                                <div className="text-content">
                                    <p>
                                        And God placed the tree of life in the midst of the garden, and the tree of knowledge of
                                        good and evil.
                                    </p>
                                    <p>
                                        And God said: Of every tree in the garden thou mayest freely eat: But of the tree of the
                                        knowledge of good and evil, thou shalt not eat of it: for in the day that thou eatest
                                        thereof thou shalt surely die.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="story-gallery-container storyline1">
                            <div className="storyline">
                                <img src="./images/garden/snake.png" />
                                <div className="text-content">
                                    <p>
                                        And Satan sought to beguile Eve, for he knew not the mind of God, wherefore he sought to
                                        destroy the world.
                                    </p>
                                    <p>
                                        And he said unto the woman: Yea, hath God said — Ye shall not eat of every tree of the
                                        garden?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="story-gallery-container storyline2">
                            <div className="storyline">
                                <img src="./images/garden/fruit2.png" />
                                <div className="text-content">
                                    <p>
                                        And the woman said: we may eat of the fruit of the trees of the garden, but of the tree of
                                        knowledge of good and evil He hath said Ye shall not eat, lest ye die.
                                    </p>
                                    <p>
                                        And the serpent said unto the woman: Ye shall not surely die, but ye shall be as gods,
                                        knowing good and evil.
                                    </p>
                                    <p>
                                        And she took of the fruit thereof, and did eat, and also gave unto Adam and he did eat.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="story-gallery-container storyline3">
                            <div className="storyline">
                                <img src="./images/garden/leaf.png" />
                                <div className="text-content">
                                    <p>
                                        And the eyes of them both were opened, and they knew that they were naked; and they sewed
                                        fig leaves together, and made themselves aprons.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="story-gallery-container storyline4">
                            <div className="storyline">
                                <img src="./images/garden/bush.png" />
                                <div className="text-content">
                                    <p>
                                        And they heard God call and hid themselves and God called, saying, Where art thou?
                                    </p>
                                    <p>
                                        And Adam said I was afraid, because I was naked; and I hid myself.
                                    </p>
                                    <p>
                                        And God said who told thee that thou was naked? Hast thou eaten of the tree, whereof I
                                        commanded thee that thou shouldest not eat?
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="story-gallery-container storyline5">
                            <div className="storyline">
                                <img src="./images/garden/adam.png" />
                                <div className="text-content">
                                    <p>
                                        And Adam said, The woman whom thou gavest to be with me, she gave me of the tree, and I did
                                        eat.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="story-gallery-container storyline6">
                            <div className="storyline">
                                <img src="./images/garden/eve.png" />
                                <div className="text-content">
                                    <p>
                                        And God asked Eve, and she said: The serpent beguiled me, and I did eat.
                                    </p>
                                    <p>
                                        And God said: lest they put forth their hand and partake also of the tree of life and live
                                        forever in their sins, let us send them out from the garden of Eden.
                                    </p>
                                    <p>
                                        And unto Adam and Eve did the Lord God make coats of skins, and clothed them.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!--END OF GARDEN--> */}
            <section className="expulsion">
                <div className="expulsion-text-container">
                    <p><span className="highlightExpulsion">Upon expulsion from Eden,</span><span className="highlightExpulsion"> God promised to send a Savior,</span>
                        <span className="highlightExpulsion"> to save everyone from the effects of the fall of
                            Adam and Eve</span><span className="highlightExpulsion"> and to enable us,
                                on conditions of faith in Christ, repentance, and obedience,
                                to return into God's presence.</span></p>
                    <p><span className="highlightExpulsion"> The commandments that Adam and Eve received by covenant
                        are the same that we receive by covenant in latter-day temples.</span></p>
                </div>
            </section>
            <section className="enter">
                <a href="/covenants">View the Covenants</a>
            </section>
        </div>
    </>
};

export default Garden;