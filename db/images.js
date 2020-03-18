// this file stores all the image url used in seeding the DB

const images = [
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/04djqtd6hws5.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/1200px-Hanamura_concept.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/33f85f6550f8218486d784beb19f952b.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/429302-EICHENWALDE-Overwatch-EICHENWALDE_Overwatch.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/600px-Hanamura_map.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/Map-2-Overwatch-Halloween-Terror.png',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/Overwatch-Map.png',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/Rialto-1024x576.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/ayutthaya.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/download.jpeg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/eich3.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/eich9c.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/hanamura-overwatch-overwatch-33997.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/images+(1).jpeg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/images.jpeg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/jessica-liu-hanamura1.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/jessica-liu-hanamura3.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/lucas-annunziata-interior-01.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/overwatch-junkertown-13.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/s7vgb5h2v5i21.png',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/screenshot_18-08-22_19-47-05-000.jpg',
  'https://s3-us-west-1.amazonaws.com/relax-ly.header-images/thiago-klafke-screenshot-16-12-19-13-28-47-000.jpg'
];

// randomly select an image
const getRandomImage = () => {
  const index = Math.floor(Math.random() * 22);
  return images[index];
};

module.exports.getRandomImage = getRandomImage;
