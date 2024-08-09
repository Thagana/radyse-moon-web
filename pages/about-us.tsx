import React from 'react';

const AboutUs = () => {
  return (
    <div className='container'>
      <header className='header'>
        <h1>About Radyse Moon</h1>
      </header>
      <section className='content'>
        <div className='text'>
          <p>
            Radyse Moon is an AI-powered news aggregator designed to bring you the most relevant and up-to-date news from multiple sources, all in one place. We leverage cutting-edge technology to ensure that you never miss out on the news that matters to you.
          </p>
          <p>
            Our mission is to create a seamless news-reading experience by curating articles that align with your interests, and providing easy access to a community where you can discuss current events. Whether you’re looking for the latest headlines or in-depth articles, Radyse Moon is your go-to source for staying informed.
          </p>
          <p>
            We believe in the power of information and strive to make news accessible to everyone, anytime, anywhere. Join us on this journey as we explore the world through news and stay connected with the pulse of what's happening around us.
          </p>
        </div>
        <div className='images'>
          <img src="/assets/show-case-1.jpg" alt="News Aggregator" className='image' />
          <img src="/assets/show-case-3.jpg" alt="Community Discussions" className='image' />
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
