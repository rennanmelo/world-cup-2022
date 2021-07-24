import React from "react";
import { Fade } from "react-awesome-reveal";

const Description = () => {
  return (
    <div className="description">
      <Fade delay={500}>
        <div className="description__content">
          <h2 className="description__title">Highlights</h2>
          <div className="description__text">
            The 2022 FIFA World Cup is scheduled to be the 22nd running of the
            FIFA World Cup competition, the quadrennial international men's
            football championship contested by the national teams of the member
            associations of FIFA. It is scheduled to take place in Qatar from 21
            November to 18 December 2022. This will be the first World Cup ever
            to be held in the Arab world. This will be the second World Cup held
            entirely in Asia after the 2002 tournament in South Korea and Japan.
            In addition, the tournament will be the last to involve 32 teams,
            with an increase to 48 teams scheduled for the 2026 tournament in
            the United States, Mexico, and Canada. The reigning World Cup
            champions are France. Due to Qatar's intense summer heat, this World
            Cup will be held from late-November to mid-December, making it the
            first tournament not to be held in May, June, or July; it is to be
            played in a reduced timeframe of around 28 days.
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Description;
