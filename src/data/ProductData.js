const products = [
  {
    id: 1,
    name: 'Anarkali Dress',
    price: 2999,
    image: 'https://drive.google.com/uc?export=download&id=1YRa3M262PjWjK8CQZqgohmTGkzmtEs9r',
    description: 'Anarkali dresses, named after a Mughal courtesan, are regal gowns. Fitted at the top, they flow dramatically from the waist down. Often part of a three-piece set with a scarf and trousers, Anarkalis are adorned with embroidery and jewels. These elegant dresses are a staple at Indian weddings and formal events.'
  },
  {
    id: 2,
    name: 'Sherwani',
    price: 1999,
    image: 'https://drive.google.com/uc?export=download&id=1pQcEIFEpWDNWlYxB-CjtMosaLyoIJpIW',
    description: 'A Sherwani is a traditional North Indian garment for men, typically worn during weddings and formal occasions. It is a long coat-like jacket with intricate embroidery and embellishments, often paired with churidar trousers or dhoti pants.'
  },
  {
    id: 3,
    name: 'Saari',
    price: 999,
    image: 'https://drive.google.com/uc?export=download&id=1_TiZOi1QrgavGVEGg2hmmndZmqrBh4Fw',
    description: 'A Saari is a classic Indian garment that drapes elegantly around the body. Made from various fabrics like silk, cotton, or chiffon, it is adorned with intricate patterns and designs, making it perfect for both everyday wear and special occasions.'
  },
  {
    id: 4,
    name: 'Lehenga Choli',
    price: 2599,
    image: 'https://drive.google.com/uc?export=download&id=1s98V5sDc61rLEvWNQtTyeH-dPv9fxidK',
    description: 'Lehenga Choli is a traditional Indian outfit consisting of a long skirt (lehenga), a fitted blouse (choli), and a dupatta. Known for its vibrant colors and intricate embroidery, it is a popular choice for weddings and festive events.'
  },
  {
    id: 5,
    name: 'Kurti',
    price: 1799,
    image: 'https://drive.google.com/uc?export=download&id=1C90RLD4vx3vudc2PSWgKVu1lLjJvzaWF',
    description: 'A Kurti is a versatile and comfortable top worn by women in India. It comes in various lengths and styles, often featuring beautiful prints and embroidery. Kurtis can be paired with leggings, jeans, or skirts for a stylish look.'
  },
  {
    id: 6,
    name: 'Salwar Kameez',
    price: 2399,
    image: 'https://drive.google.com/uc?export=download&id=1ruUkl2_zGZwSTyAAc3mHYrnmoF_ahFNe',
    description: 'Salwar Kameez is a traditional outfit from South Asia, consisting of a tunic (kameez) and trousers (salwar). Known for its comfort and elegance, it is often adorned with embroidery and worn with a matching dupatta.'
  },
  {
    id: 7,
    name: 'Patiala Suit',
    price: 1999,
    image: 'https://drive.google.com/uc?export=download&id=1Vh4hKmIbAlZgigNr7b4bECtEArbT79ij',
    description: 'The Patiala Suit is a popular traditional outfit from Punjab, India. It features a short kameez and baggy salwar pants with pleats, offering a blend of comfort and style. It is often paired with a colorful dupatta.'
  },
  {
    id: 8,
    name: 'Palazzo Suit',
    price: 2099,
    image: 'https://drive.google.com/uc?export=download&id=1vtolPx-w5rHkfxJoxXNyyjeBASNKI53Q',
    description: 'A Palazzo Suit is a modern and stylish outfit featuring a long kurti paired with wide-legged palazzo pants. Known for its comfort and chic look, it is suitable for casual outings as well as formal events.'
  },
  {
    id: 9,
    name: 'Churidar',
    price: 1599,
    image: 'https://drive.google.com/uc?export=download&id=1V3oapJzGV6HhT-eFiIV8vnqRRg8W2N1M',
    description: 'Churidar is a type of tightly fitting trousers worn by both men and women in India. Paired with various tops like kurtas and tunics, churidars are known for their snug fit and the way they gather at the ankles.'
  },
  {
    id: 10,
    name: 'Ghagra Choli',
    price: 2899,
    image: 'https://drive.google.com/uc?export=download&id=1LwPbt6x2r-ymk7nlFpMgD3yGIhcsAPwx',
    description: 'Ghagra Choli is a traditional Indian outfit comprising a long, flared skirt (ghagra) and a cropped blouse (choli). Often embellished with embroidery and mirror work, it is a popular choice for festivals and weddings.'
  },
  {
    id: 11,
    name: 'Sharara Suit',
    price: 2699,
    image: 'https://drive.google.com/uc?export=download&id=1YRa3M262PjWjK8CQZqgohmTGkzmtEs9r',
    description: 'Sharara Suit is an elegant outfit featuring a long kurti and wide-legged, flared pants called sharara. Known for its comfort and grandeur, it is often adorned with intricate embroidery and paired with a dupatta.'
  },
  {
    id: 12,
    name: 'Pattu Pavadai',
    price: 1399,
    image: 'https://drive.google.com/uc?export=download&id=1pQcEIFEpWDNWlYxB-CjtMosaLyoIJpIW',
    description: 'Pattu Pavadai is a traditional South Indian outfit for young girls, consisting of a silk skirt and blouse. It is often worn during festivals and weddings, known for its vibrant colors and rich fabric.'
  },
  {
    id: 13,
    name: 'Banarasi Saree',
    price: 2999,
    image: 'https://drive.google.com/uc?export=download&id=1_TiZOi1QrgavGVEGg2hmmndZmqrBh4Fw',
    description: 'Banarasi Sarees are exquisite silk sarees from Varanasi, India. Renowned for their rich texture and intricate zari work, they are often worn at weddings and special occasions, symbolizing opulence and tradition.'
  },
  {
    id: 14,
    name: 'Chaniya Choli',
    price: 1899,
    image: 'https://drive.google.com/uc?export=download&id=1s98V5sDc61rLEvWNQtTyeH-dPv9fxidK',
    description: 'Chaniya Choli is a traditional Gujarati outfit consisting of a flared skirt (chaniya) and a blouse (choli). Often worn during Navratri and other festive occasions, it is known for its vibrant colors and intricate designs.'
  },
  {
    id: 15,
    name: 'Cotton Saree',
    price: 1699,
    image: 'https://drive.google.com/uc?export=download&id=1C90RLD4vx3vudc2PSWgKVu1lLjJvzaWF',
    description: 'Cotton Sarees are known for their comfort and breathability, making them perfect for everyday wear in hot climates. Available in a variety of prints and patterns, they are a staple in Indian wardrobes.'
  },
  {
    id: 16,
    name: 'Kanjivaram Saree',
    price: 2499,
    image: 'https://drive.google.com/uc?export=download&id=1ruUkl2_zGZwSTyAAc3mHYrnmoF_ahFNe',
    description: 'Kanjivaram Sarees are luxurious silk sarees from Tamil Nadu, India. Known for their rich texture and vibrant colors, they feature elaborate zari work and are often worn during weddings and other grand occasions.'
  },
  {
    id: 17,
    name: 'Mekhela Chador',
    price: 2799,
    image: 'https://drive.google.com/uc?export=download&id=1Vh4hKmIbAlZgigNr7b4bECtEArbT79ij',
    description: 'Mekhela Chador is a traditional Assamese outfit for women, consisting of a two-piece garment. The Mekhela is a cylindrical skirt, and the Chador is a draped cloth, known for its elegance and beautiful handwoven patterns.'
  },
  {
    id: 18,
    name: 'Paithani Saree',
    price: 2899,
    image: 'https://drive.google.com/uc?export=download&id=1vtolPx-w5rHkfxJoxXNyyjeBASNKI53Q',
    description: 'Paithani Sarees are traditional silk sarees from Maharashtra, India. Renowned for their rich colors and intricate peacock motifs, they are a symbol of elegance and are often passed down through generations.'
  },
  {
    id: 19,
    name: 'Pochampally Saree',
    price: 1999,
    image: 'https://drive.google.com/uc?export=download&id=1V3oapJzGV6HhT-eFiIV8vnqRRg8W2N1M',
    description: 'Pochampally Sarees are handwoven sarees from Telangana, India, known for their unique ikat patterns and vibrant colors. They are a popular choice for both formal and casual occasions, blending tradition with modern style.'
  },
  {
    id: 20,
    name: 'Phulkari Dupatta',
    price: 1599,
    image: 'https://drive.google.com/uc?export=download&id=1LwPbt6x2r-ymk7nlFpMgD3yGIhcsAPwx',
    description: 'Phulkari Dupattas are traditional embroidered shawls from Punjab, India. Featuring bright colors and floral patterns, they add a touch of elegance and vibrancy to any outfit, often worn during festivals and weddings.'
  },
  {
    id: 21,
    name: 'Kurtis and Leggings',
    price: 2299,
    image: 'https://drive.google.com/uc?export=download&id=1YRa3M262PjWjK8CQZqgohmTGkzmtEs9r',
    description: 'Kurtis and Leggings are a popular combination for a comfortable and stylish look. Kurtis are versatile tops available in various styles, while leggings provide a snug and flexible fit'
  },
  {
    id: 22,
    name: 'Dhoti Pants',
    price: 1499,
    image: 'https://drive.google.com/uc?export=download&id=1pQcEIFEpWDNWlYxB-CjtMosaLyoIJpIW',
    description: 'Dhoti Pants are traditional Indian trousers that are draped and pleated, offering both comfort and a unique style. They are often paired with kurtas or tunics, perfect for festive occasions and casual wear.'
  },
  {
    id: 23,
    name: 'Chiffon Saree',
    price: 2099,
    image: 'https://drive.google.com/uc?export=download&id=1_TiZOi1QrgavGVEGg2hmmndZmqrBh4Fw',
    description: 'Chiffon Sarees are lightweight and flowy, making them a popular choice for both casual and formal wear. They come in a variety of prints and colors, offering elegance and comfort in one beautiful package.'
  },
  {
    id: 24,
    name: 'Georgette Saree',
    price: 2199,
    image: 'https://drive.google.com/uc?export=download&id=1s98V5sDc61rLEvWNQtTyeH-dPv9fxidK',
    description: 'Georgette Sarees are known for their lightweight and slightly crinkled texture. They drape beautifully, offering a graceful and elegant look. Available in various designs and colors, they are perfect for any occasion.'
  }
];

module.exports = {ProductData: products};