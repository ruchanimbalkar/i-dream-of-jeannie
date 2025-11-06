import Image from "../components/Image.jsx";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="about-card">
        <div>
          <h2>Fantasy Sitcom</h2>

          <figure class="offset-image">
            <Image
              srcText="https://i2.pickpik.com/photos/482/780/991/barbara-eden-actress-retro-tv-preview.jpg"
              altText="Barbara Eden"
            />
            <figcaption> Barbara Eden in her Jeannie outfit.</figcaption>
          </figure>

          <p>
            I Dream of Jeannie is an American fantasy sitcom television series
            created by Sidney Sheldon and starring Barbara Eden as a beautiful
            but guileless 2,000-year-old genie and Larry Hagman as an astronaut
            with whom she falls in love and eventually marries. Produced by
            Screen Gems, the show originally aired for 139 episodes over five
            seasons, from September 18, 1965, to May 26, 1970, on NBC. Courtsey:
            <a
              href="https://en.wikipedia.org/wiki/I_Dream_of_Jeannie"
              target="_blank"
            >
              Wikipedia
            </a>
          </p>
        </div>

        <div>
          <h2>Where to Watch?</h2>
          <p>
            You can watch a few episodes and short clips of I dream of Jeannie
            on YouTube for free.
            <a
              href="https://www.youtube.com/channel/UCW17klvo2VzdVdHRE5ywPsA"
              target="_blank"
            >
              I dream of Jeannie on YouTube
            </a>
          </p>

          <p>
            You can watch the first two seasons of I dream of Jeannie on Roku
            for free.
            <a
              href="https://therokuchannel.roku.com/details/599e2be2494755c4be511dd7d9f4fb9a/i-dream-of-jeannie"
              target="_blank"
            >
              I dream of Jeannie on Roku
            </a>
          </p>
          <h2>Did you know they made an I dream of jeannie doll?</h2>

          <Image
            srcText="https://i.ebayimg.com/images/g/xrQAAOSw0OVltxHE/s-l1600.webp"
            altText="I dream of Jeannie Doll"
          />
        </div>
      </div>
    </>
  );
}
