import { Canvas } from '@react-three/fiber';
import Experience from "../Experience.js";
import "../style.css"

const Covenants = () => {
    return <>
        <div className="arrow-block">
            <a href="/garden"><div className="arrow left"></div>Return to the Garden</a>
        </div>

        <Canvas
            className="webgl"
            camera={{
                fov: 40,
                near: 0.1,
                far: 10,
                position: [3, 1, 0]
            }}>
            <Experience />
        </Canvas>

        <div className="covenant-explanation">
            <div className="covenant obedience" id="cov">
                <h2>Law of Obedience</h2>
                <p>“We will prove them herewith. To see if they will do all things whatsoever the Lord their God shall command them." <span>The Doctrine and Covenants</span></p>
                <p>We covenant to obey the laws of God taught to us in the scriptures and by true, latter-day prophets.</p>
            </div>
            <div className="covenant sacrifice">
                <h2>Law of Sacrifice</h2>
                <p>Adam and Eve were asked to sacrifice animals in similitude of the Only Begotten of the Father, Jesus Christ, who would end sacrifice by blood.</p>
                <p>“We are still commanded to sacrifice, but not by shedding blood of animals. Our highest sense of sacrifice is achieved as we make ourselves more sacred or holy.” <span>President Nelson</span></p>
            </div>
            <div className="covenant gospel">
                <h2>Law of the Gospel</h2>
                <p>The law of the gospel includes the teachings of Jesus Christ as he was alive and as revealed by His apostles. This includes faith in Jesus Christ,
                    repentance, baptism by immersion by those who have authority, the laying on of hands for the gift of the Holy Ghost, priesthood ordination for men,
                    the Temple initiatory, the Temple endowment, Temple sealings, and enduring in faith in Christ.</p>
            </div>
            <div className="covenant chastity">
                <h2>Law of Chastity</h2>
                <p>“The Savior's way of life is good. His way includes chastity before marriage and total fidelity within marriage.
                    His way brings sustained comfort to our souls and perennial peace to our homes.” <span>President Nelson</span></p>
            </div>
            <div className="covenant consecration">
                <h2>Law of Consecration</h2>
                <p>“We covenant to live the law of consecration. This law is that we consecrate our time, talents, strength, property, and money for the upbuilding
                    of the Kingdom of God on this earth and the establishment of Zion. Until one abides by the laws of obedience, sacrifice, the gospel,
                    and chastity, he cannot abide the law of consecration, which is the law pertaining to the Celestial Kingdom.” <span>Ezra Taft Benson</span></p>
            </div>
        </div>

        <section className="importance">
            <p><span>Brigham Young</span>Your endowment is, to receive all those ordinances in the house of the Lord, which are necessary for you, after you have departed this life,
                to enable you to walk back to the presence of the Father, passing the angels who stand as sentinels.</p>
        </section>
    </>
};

export default Covenants;