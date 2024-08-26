export const navList = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/services",
      text: "Services",
    },
    {
      id: 4,
      path: "/rooms",
      text: "Rooms",
    },
    {
      id: 5,
      path: "/gallery",
      text: "gallery",
      // subItems: [
      //   {
      //     id: 51,
      //     path: "/Stay",
      //     text: "rooms",
      //   },
      //   {
      //     id: 52,
      //     path: "/view",
      //     text: "views",
      //   },
      // ],
      //   {
      //     id: 53,
      //     path: "/testimonial",
      //     text: "Testimonial",
      //   },
      // ],
    },
    {
      id: 6,
      path: "/contact",
      text: "Contact",
    },
  ];
  export const socialIcons = [
    {
      icon: <a href="https://www.facebook.com/profile.php?id=100091063376916" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>,
    },
    {
      icon: <a href="https://www.instagram.com/evergreen_meadows_glamps/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>,
    },
    
    {
      icon: <a href="https://www.youtube.com/@evergreenmeadowsglamps" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>,
    },
  ];
  
  
  export const carouselData = [
    {
      img: "https://iili.io/dRNJUAl.jpg ",
      title: "Evergreen Meadows Glamps",
      subtitle: "Immerse in nature's charm at this cozy refuge ",
  
    },
    {
      img: "https://iili.io/dRO8saa.jpg",
      title: "Evergreen Meadows Glamps",
      subtitle: " a peaceful haven that captures your heart instantly",
      // btn1: "Our Room",
      // btn2: "Book Room",
    },
  ];
 
  export const services = [
    {
      id: 1,
      icon: <i className="fa fa-hotel fa-2x text-primary"></i>,
      name: "Rooms",
      description: "With fresh, crisp air and stunning vistas at every turn"

    },
    {
      id: 2,
      icon: <i className="fa fa-utensils fa-2x text-primary"></i>,
      name: "Food & Dining",
      description: "Meals offered: You can choose from veg & non-veg meals | Cuisines available: Local, South Indian",
      menu: {
        breakfast: [
          "Pongal",
          "Idly",
          "Sambar",
          "Chutney"
        ],
        dinner: [
          "Chapathi",
          "Egg Fried Rice",
          "Chicken Curry",
          "Starter BBQ Chicken"
        ],
        mainCourse: [
          "Veg Fried Rice",
          "Chicken Fried Rice",
          "Chapathi (2nos)"
        ],
        gravyItems: [
          "Veg Gravy",
          "Egg Gravy",
          "Chicken Gravy"
        ],
        starters: [
          "Egg Omelette",
          "Egg Podimas",
          "Pepper Chicken",
          "Chilly Chicken",
          "BBQ Chicken"
        ],
        snacks: [
          "Veg Maggie",
          "Egg Maggie",
          "Bread Omelette"
        ],
        drinks: [
          "Milk",
          "Tea",
          "Coffee"
        ]
      }
    },
    {
      id: 3,
      icon: <i className="fa fa-spa fa-2x text-primary"></i>,
      name: "Glampfire  Experiences",
      description: " Enjoy an evening under the stars with our fire pit setups with the charm of nature"
    },
    {
      id: 4,
      icon: <i className="fa fa-spa fa-2x text-primary"></i>,
      name: "GlampAssist",
      menu: {
        LuggageAssistance: [
        " Our glamping site is monitored around the clock with CCTV cameras to ensure your safety and security at all times."
        ],
        Housekeeping: [
        "We have installed solar fencing around the perimeter of our site to provide an added layer of protection against unauthorized access and wildlife."
        ],
        DoorstepService:[
        "Fire extinguishers are strategically placed throughout the site for immediate access in case of a fire emergency, ensuring prompt action can be taken."
        ],
        
      },
      description: "Designed to enhance your glamping adventure, GlampAssist offers a range of premium supports",
    },
    {
      id: 5,
      icon: <i className="fa fa-spa fa-2x text-primary"></i>,
      name: "Parking",
      description: "Shared Access | Onsite Parking is available",
    },
    {
      id: 6,
      icon: <i className="fa fa-spa fa-2x text-primary"></i>,
      name: "Safety and Security",
      menu: {
        CCTV: [
        " Our glamping site is monitored around the clock with CCTV cameras to ensure your safety and security at all times."
        ],
        SolarFencing: [
        "We have installed solar fencing around the perimeter of our site to provide an added layer of protection against unauthorized access and wildlife."
        ],
        FireExtinguisher:[
        "Fire extinguishers are strategically placed throughout the site for immediate access in case of a fire emergency, ensuring prompt action can be taken."
        ],
        FirstAidKit:[
        "A fully stocked first aid kit is available on-site to provide immediate medical assistance for minor injuries and emergencies."
        ]
        
      },
      description: " Ensure a worry-free and secure glamping experience with our comprehensive Safety and Security services",
    },
  ];
  
  
  export const footerItem = [
    {
      id: 1,
      header: "Company",
      UnitItem: [
        {
          name: "About Us",
          path: "/about",
          
        },
        {
          name: "Contact Us",
          path: "/contact",
        },
        {
          name: "Privacy Policy",
          path: "/about",
        },
        {
          name: "Terms & Condition",
          path: "/about",
        },
        {
          name: "Support",
          path: "/about",
        },
      ],
    },
    {
      id: 2,
      header: "Services",
      UnitItem: [
        {
          name: "Food & Dining",
          path: "/service/2",
        },
        {
          name: "Parking",
          path: "/about",
        },
        {
          name: "Popular Amenities",
          path: "/about",
        },
        {
          name: "Basic Facilities",
          path: "/about",
        },
        {
          name: "Safety and Security",
          path: "/about",
        },
      ],
    },
  ];
  
  export const footerContact = [
    {
      icon: <i className="fa fa-map-marker-alt me-3"></i>,
      name: "A/1A Kodaikanal road, Poombarai, Village, Kodaikanal, Tamil Nadu 624103 ,Naidupuram View on maps. Landmarks. Poombarai Viewing Point.",
    },
    {
      icon: <i className="fa fa-phone-alt me-3"></i>,
      name: "+91 6369309620",
    },
    {
      icon: <i className="fa fa-envelope me-3"></i>,
      name: "evergreenmeadowsglamps@gmail.com",
    },
  ];
  
  export const contact = [
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "E-mail Us",
      email: "evergreenmeadowsglamps@gmail.com",
    },
  ];

  
  export const roomItems = [
    {
      img: "https://iili.io/dYFne7j.md.jpg",
      images: [
        "https://iili.io/dMiFExf.md.jpg",
        "https://iili.io/dMiFwJ9.md.jpg",
        "https://iili.io/dMiFuPp.md.jpg",
        "https://iili.io/dMiFTVR.md.jpg",
      ],
      price: "Rs.2800 /Person",
      name: "THE MAJESTIC CROWN",
      description: "Room : 1 King Bed | 4-6 Adults can stay",
      yellowbtn: "View Detail",
      darkbtn: "book now",
      roomType: "King Bed",
      amenities: "Air Conditioning, Free Wi-Fi, Breakfast Included"
    },
    {
      img: "https://iili.io/dYFf26b.jpg",
      images: [
        "https://iili.io/dYFf26b.md.jpg",
        "https://iili.io/dMiFeDb.md.jpg",
        "https://iili.io/dMiFlNs.md.jpg"
      ],
      price: "Rs.2000/Person",
      name: "VINTAGE POD",
      description: "Room : 1 bed | 4-5 Adults can stay",
      yellowbtn: "View Detail",
      darkbtn: "book now",
      roomType: "Single Bed",
      amenities: "Free Wi-Fi, Breakfast Included"
    },
    {
      img: "https://iili.io/dYFnOdb.md.jpg",
      images: [
        "https://iili.io/dMiFvxj.md.jpg",
        "https://iili.io/dMiFSiQ.md.jpg",
      ],
      price: "Rs.1500/Person",
      name: "THE FRAME",
      description: "Room : 1 bed | 2 Adults can stay",
      yellowbtn: "View Detail",
      darkbtn: "book now",
      roomType: "Double Bed",
      amenities: "Free Wi-Fi"
    },
  ];

  
export const gallery = [
  {
    imageUrl: "https://iili.io/dazGLlt.md.jpg",
    title:"Candle Light Dinner",
    alt: "Image 1 Description"
  },
  {
    imageUrl: "https://iili.io/dazGyx4.md.jpg",
    title:"Sunset",
    alt: "Image 2 Description"
  },
  {
    imageUrl: "https://iili.io/dazMHs2.md.jpg",
    title:"Mount view",
    alt: "Image 3 Description"
  },
  {
    imageUrl: "https://iili.io/dazMdfS.md.jpg",
    title:"Heartin Frame",
    alt: "Image 3 Description"
  },
  {
    imageUrl: "https://iili.io/dazMBbj.md.jpg",
    title:"SunRise",
    alt: "Image 3 Description"
  },
  {
    imageUrl: "https://iili.io/dazMnzx.md.jpg",
    title:"CampFire",
    alt: "Image 3 Description"
  },
  {
    imageUrl: "https://iili.io/dazM3g9.md.jpg",
    title:"Food",
    alt: "Image 3 Description"
  },
  {
    imageUrl: "https://iili.io/dazMKJe.md.jpg",
    title:"frame",
    alt: "Image 3 Description"
  },
  {
    imageUrl: "https://iili.io/dazMf5u.md.jpg",
    title:"Glamph",
    alt: "Image 3 Description"
  },
];

