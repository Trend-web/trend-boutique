const ImageLinks = [
    "https://drive.google.com/uc?export=download&id=1YRa3M262PjWjK8CQZqgohmTGkzmtEs9r",
    "https://drive.google.com/uc?export=download&id=1pQcEIFEpWDNWlYxB-CjtMosaLyoIJpIW",
    "https://drive.google.com/uc?export=download&id=1_TiZOi1QrgavGVEGg2hmmndZmqrBh4Fw",
    "https://drive.google.com/uc?export=download&id=1s98V5sDc61rLEvWNQtTyeH-dPv9fxidK",
    "https://drive.google.com/uc?export=download&id=1C90RLD4vx3vudc2PSWgKVu1lLjJvzaWF",
    "https://drive.google.com/uc?export=download&id=1ruUkl2_zGZwSTyAAc3mHYrnmoF_ahFNe",
    "https://drive.google.com/uc?export=download&id=1Vh4hKmIbAlZgigNr7b4bECtEArbT79ij",
    "https://drive.google.com/uc?export=download&id=1vtolPx-w5rHkfxJoxXNyyjeBASNKI53Q",
    "https://drive.google.com/uc?export=download&id=1V3oapJzGV6HhT-eFiIV8vnqRRg8W2N1M",
    "https://drive.google.com/uc?export=download&id=1LwPbt6x2r-ymk7nlFpMgD3yGIhcsAPwx"
  ];
  
  
  const products = [
      { id: 1, name: 'Anarkali Dress', price: 2999, image: 'https://via.placeholder.com/150?text=Anarkali+Dress' },
      { id: 2, name: 'Sherwani', price: 1999, image: 'https://via.placeholder.com/150?text=Sherwani' },
      { id: 3, name: 'Saari', price: 999, image: 'https://via.placeholder.com/150?text=Saari' },
      { id: 4, name: 'Lehenga Choli', price: 2599, image: 'https://via.placeholder.com/150?text=Lehenga+Choli' },
      { id: 5, name: 'Kurti', price: 1799, image: 'https://via.placeholder.com/150?text=Kurti' },
      { id: 6, name: 'Salwar Kameez', price: 2399, image: 'https://via.placeholder.com/150?text=Salwar+Kameez' },
      { id: 7, name: 'Patiala Suit', price: 1999, image: 'https://via.placeholder.com/150?text=Patiala+Suit' },
      { id: 8, name: 'Palazzo Suit', price: 2099, image: 'https://via.placeholder.com/150?text=Palazzo+Suit' },
      { id: 9, name: 'Churidar', price: 1599, image: 'https://via.placeholder.com/150?text=Churidar' },
      { id: 10, name: 'Ghagra Choli', price: 2899, image: 'https://via.placeholder.com/150?text=Ghagra+Choli' },
      { id: 11, name: 'Sharara Suit', price: 2699, image: 'https://via.placeholder.com/150?text=Sharara+Suit' },
      { id: 12, name: 'Pattu Pavadai', price: 1399, image: 'https://via.placeholder.com/150?text=Pattu+Pavadai' },
      { id: 13, name: 'Banarasi Saree', price: 2999, image: 'https://via.placeholder.com/150?text=Banarasi+Saree' },
      { id: 14, name: 'Chaniya Choli', price: 1899, image: 'https://via.placeholder.com/150?text=Chaniya+Choli' },
      { id: 15, name: 'Cotton Saree', price: 1699, image: 'https://via.placeholder.com/150?text=Cotton+Saree' },
      { id: 16, name: 'Kanjivaram Saree', price: 2499, image: 'https://via.placeholder.com/150?text=Kanjivaram+Saree' },
      { id: 17, name: 'Mekhela Chador', price: 2799, image: 'https://via.placeholder.com/150?text=Mekhela+Chador' },
      { id: 18, name: 'Paithani Saree', price: 2899, image: 'https://via.placeholder.com/150?text=Paithani+Saree' },
      { id: 19, name: 'Pochampally Saree', price: 1999, image: 'https://via.placeholder.com/150?text=Pochampally+Saree' },
      { id: 20, name: 'Phulkari Dupatta', price: 1599, image: 'https://via.placeholder.com/150?text=Phulkari+Dupatta' },
      { id: 21, name: 'Kurtis and Leggings', price: 2299, image: 'https://via.placeholder.com/150?text=Kurtis+and+Leggings' },
      { id: 22, name: 'Dhoti Pants', price: 1499, image: 'https://via.placeholder.com/150?text=Dhoti+Pants' },
      { id: 23, name: 'Chiffon Saree', price: 2099, image: 'https://via.placeholder.com/150?text=Chiffon+Saree' },
      { id: 24, name: 'Georgette Saree', price: 2199, image: 'https://via.placeholder.com/150?text=Georgette+Saree' }
    ];
  
    const updatedProducts = products.map((product, index) => {
      const imageIndex = index % ImageLinks.length;
      return { ...product, image: ImageLinks[imageIndex] };
    });
    
    console.log(updatedProducts);