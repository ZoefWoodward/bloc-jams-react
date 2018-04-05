import React from 'react';

const Landing = () => (
    
<section className="landing-background">
    
    <div className="wrapper"> 
            <img className="img" src="http://i67.tinypic.com/2n9hmqr.jpg" border="0" alt="futuristic woman"></img>
        <div className="landing-tagline">
            <h1 className="dont-search"> Don't Search.
            </h1>
            <p className="just-listen"> Just Listen. </p>
        </div>
    </div> 

    <section className="selling-points-container">
    
      <div className="point1">
        <a href="http://tinypic.com?ref=znwkeg"><img src="http://i68.tinypic.com/znwkeg.png" border="0" alt="Music Note Icon"></img></a>
            <h2 className="point-title1">Choose your music</h2>
                <p className="point-description1">Why should you have to listen to music that someone else chose?</p>
      </div>
    
      <div className="point2">
        <a href="http://tinypic.com?ref=2rnx7d1"><img src="http://i68.tinypic.com/2rnx7d1.png" border="0" alt="Streaming Icon"></img></a>
            <h2 className="point-title2">Unlimited, streaming, ad-free </h2>
                <p className="point-description2">No arbitrary limits. No distractions.</p>
      </div>
    
      <div className="point3">
        <a href="http://tinypic.com?ref=jpkmld"><img src="http://i68.tinypic.com/jpkmld.png" border="0" alt="Mobile Phone Icon"></img></a>
            <h2 className="point-title3">Mobile enabled</h2>
                <p className="point-description3">Listen to your music on the go. Available on all mobile platforms.</p>
      </div>
    
    </section>
    </section>
  
);

export default Landing;
