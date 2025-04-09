const carsData = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      color: 'Red',
      fuelType: 'Gasoline',
      price: 10000,
      horsepower: 132,
      transmission: 'Automatic',
      image: 'https://www.shutterstock.com/image-illustration/tula-russia-february-28-2021-260nw-1932915491.jpg',
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      color: 'Blue',
      fuelType: 'Diesel',
      price: 12000,
      horsepower: 158,
      transmission: 'Manual',
      image: 'https://di-uploads-pod16.dealerinspire.com/pattypeckhonda/uploads/2020/02/A-2020-Honda-Civic-Sport-in-Aegean-Blue-Metallic.png',
    },
    {
      id: 3,
      make: 'Tesla',
      model: 'Model 3',
      color: 'White',
      fuelType: 'Electric',
      price: 35000,
      horsepower: 283,
      transmission: 'Automatic',
      image: 'https://preview.thenewsmarket.com/Previews/NCAP/StillAssets/1920x1080/684698_v3.jpg',
    },
    {
      id: 4,
      make: 'Ford',
      model: 'Mustang',
      color: 'Yellow',
      fuelType: 'Gasoline',
      price: 26000,
      horsepower: 450,
      transmission: 'Manual',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7f_PaS0frCZkl5OAUykCMgg1G-AQ3b7iYOA&s',
    },
    {
      id: 5,
      make: 'Chevrolet',
      model: 'Camaro',
      color: 'Black',
      fuelType: 'Gasoline',
      price: 25000,
      horsepower: 455,
      transmission: 'Automatic',
      image: 'https://hips.hearstapps.com/hmg-prod/images/2024-chevrolet-camaro-ss-collectors-edition-1-647e1933c6c20.jpg?crop=0.827xw:0.853xh;0.0946xw,0.129xh&resize=2048:*',
    },
    {
      id: 6,
      make: 'BMW',
      model: '3 Series',
      color: 'Silver',
      fuelType: 'Diesel',
      price: 30000,
      horsepower: 255,
      transmission: 'Automatic',
      image: 'https://imgd.aeplcdn.com/370x208/n/gdkfpra_1422223.jpg?q=80',
    },
    {
      id: 7,
      make: 'Audi',
      model: 'A4',
      color: 'Gray',
      fuelType: 'Gasoline',
      price: 32000,
      horsepower: 248,
      transmission: 'Automatic',
      image: 'https://img2.carmax.com/assets/26884722/hero.jpg?width=400&height=300',
    },
    {
      id: 8,
      make: 'Mercedes-Benz',
      model: 'C-Class',
      color: 'White',
      fuelType: 'Diesel',
      price: 35000,
      horsepower: 255,
      transmission: 'Automatic',
      image: 'https://images.carandbike.com/car-images/colors/mercedes-benz/c-class/mercedes-benz-c-class-manufaktur-opalite-white-bright.jpg?v=1652343850',
    },
    {
      id: 9,
      make: 'Volkswagen',
      model: 'Golf',
      color: 'Blue',
      fuelType: 'Gasoline',
      price: 20000,
      horsepower: 147,
      transmission: 'Manual',
      image: 'https://i.ytimg.com/vi/v7sO3Uc3hWo/maxresdefault.jpg',
    },
    {
      id: 10,
      make: 'Hyundai',
      model: 'Elantra',
      color: 'Red',
      fuelType: 'Gasoline',
      price: 19000,
      horsepower: 147,
      transmission: 'Automatic',
      image: 'https://imgd.aeplcdn.com/370x208/n/o4vfmsa_1472639.jpg?q=80',
    },
    {
      id: 11,
      make: 'Nissan',
      model: 'Altima',
      color: 'Black',
      fuelType: 'Gasoline',
      price: 24000,
      horsepower: 188,
      transmission: 'CVT',
      image: 'https://www.dealerfireblog.com/mattcastruccinissan/wp-content/uploads/sites/188/2018/03/2018-Nissan-Altima-Super-Black_o.jpg',
    },
    {
      id: 12,
      make: 'Kia',
      model: 'Optima',
      color: 'White',
      fuelType: 'Gasoline',
      price: 23000,
      horsepower: 185,
      transmission: 'Automatic',
      image: 'https://www.mattblattkia.com/blogs/3074/wp-content/uploads/2017/10/2018-Kia-Optima_o.jpg',
    },
    {
      id: 13,
      make: 'Subaru',
      model: 'Impreza',
      color: 'Silver',
      fuelType: 'Gasoline',
      price: 21000,
      horsepower: 152,
      transmission: 'Manual',
      image: 'https://di-uploads-pod9.dealerinspire.com/capitolsubaru/uploads/2022/01/2022-subaru-impreza-ice-silver-metallic-1024x449.jpg',
    },
    {
      id: 14,
      make: 'Mazda',
      model: 'Mazda3',
      color: 'Gray',
      fuelType: 'Gasoline',
      price: 22000,
      horsepower: 186,
      transmission: 'Automatic',
      image: 'https://imgcdn.zigwheels.com.au/large/gallery/color/5/43/mazda-3-hatch-color-224279.jpg',
    },
    {
      id: 15,
      make: 'Lexus',
      model: 'IS',
      color: 'Blue',
      fuelType: 'Gasoline',
      price: 38000,
      horsepower: 241,
      transmission: 'Automatic',
      image: 'https://imgd.aeplcdn.com/664x374/n/gobtisa_1467752.jpg?q=80',
    },
    {
      id: 16,
      make: 'Jaguar',
      model: 'XE',
      color: 'Red',
      fuelType: 'Diesel',
      price: 40000,
      horsepower: 247,
      transmission: 'Automatic',
      image: 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/43356/jaguar-xe-front-right-three-quarter-7.jpeg?q=80&q=80',
    }
]
export default carsData;
   
  