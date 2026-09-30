const products = [
    // =========================
    // ELECTRONICS
    // =========================
    {
        product_id: "P001",
        product_name: "Wireless Headphones",
        category: "Electronics",
        brand: "NexaTech",
        price: 199.00,
        discount: 10,
        rating: 4.6,
        stock: 25,
        image: "assets/images/wireless-headphones.jpg",
        description: "Wireless over-ear headphones with immersive sound and all-day comfort."
    },
    {
        product_id: "P002",
        product_name: "Mechanical Keyboard",
        category: "Electronics",
        brand: "NexaTech",
        price: 249.00,
        discount: 5,
        rating: 4.8,
        stock: 18,
        image: "assets/images/mechanical-keyboard.jpg",
        description: "Responsive mechanical keyboard designed for productivity and gaming."
    },
    {
        product_id: "P003",
        product_name: "Gaming Mouse",
        category: "Electronics",
        brand: "NexaTech",
        price: 129.00,
        discount: 15,
        rating: 4.5,
        stock: 32,
        image: "assets/images/gaming-mouse.jpg",
        description: "Precision gaming mouse with adjustable sensitivity and programmable controls."
    },
    {
        product_id: "P004",
        product_name: "HD Webcam",
        category: "Electronics",
        brand: "NexaTech",
        price: 159.00,
        discount: 0,
        rating: 4.3,
        stock: 20,
        image: "assets/images/hd-webcam.jpg",
        description: "Full HD webcam for video meetings, online classes and content creation."
    },
    {
        product_id: "P005",
        product_name: "Portable Speaker",
        category: "Electronics",
        brand: "NexaSound",
        price: 149.00,
        discount: 10,
        rating: 4.7,
        stock: 28,
        image: "assets/images/portable-speaker.jpg",
        description: "Compact wireless speaker with powerful sound and portable design."
    },
    {
        product_id: "P006",
        product_name: "USB-C Hub",
        category: "Electronics",
        brand: "NexaTech",
        price: 89.00,
        discount: 0,
        rating: 4.4,
        stock: 40,
        image: "assets/images/usb-c-hub.jpg",
        description: "Multi-port USB-C hub for connecting essential peripherals and accessories."
    },
    {
        product_id: "P007",
        product_name: "Power Bank",
        category: "Electronics",
        brand: "NexaPower",
        price: 119.00,
        discount: 10,
        rating: 4.6,
        stock: 35,
        image: "assets/images/power-bank.jpg",
        description: "High-capacity portable power bank for charging devices while travelling."
    },
    {
        product_id: "P008",
        product_name: "Laptop Stand",
        category: "Electronics",
        brand: "NexaTech",
        price: 99.00,
        discount: 5,
        rating: 4.5,
        stock: 24,
        image: "assets/images/laptop-stand.jpg",
        description: "Adjustable laptop stand designed for comfortable and ergonomic viewing."
    },

    // =========================
    // LIFESTYLE
    // =========================
    {
        product_id: "P009",
        product_name: "Urban Backpack",
        category: "Lifestyle",
        brand: "NexaLife",
        price: 139.00,
        discount: 10,
        rating: 4.5,
        stock: 22,
        image: "assets/images/urban-backpack.jpg",
        description: "Versatile everyday backpack with dedicated compartments for work and travel."
    },
    {
        product_id: "P010",
        product_name: "Insulated Water Bottle",
        category: "Lifestyle",
        brand: "NexaLife",
        price: 69.00,
        discount: 0,
        rating: 4.7,
        stock: 45,
        image: "assets/images/water-bottle.jpg",
        description: "Reusable insulated bottle designed to keep drinks at the ideal temperature."
    },
    {
        product_id: "P011",
        product_name: "Travel Duffel Bag",
        category: "Lifestyle",
        brand: "NexaTravel",
        price: 179.00,
        discount: 15,
        rating: 4.6,
        stock: 16,
        image: "assets/images/travel-duffel.jpg",
        description: "Spacious duffel bag suitable for weekend trips, gym sessions and short travel."
    },
    {
        product_id: "P012",
        product_name: "Premium Notebook",
        category: "Lifestyle",
        brand: "NexaLife",
        price: 39.00,
        discount: 0,
        rating: 4.4,
        stock: 60,
        image: "assets/images/premium-notebook.jpg",
        description: "Minimalist premium notebook for planning, journaling and everyday notes."
    },
    {
        product_id: "P013",
        product_name: "LED Desk Lamp",
        category: "Lifestyle",
        brand: "NexaHome",
        price: 109.00,
        discount: 10,
        rating: 4.5,
        stock: 27,
        image: "assets/images/led-desk-lamp.jpg",
        description: "Adjustable LED desk lamp with multiple brightness settings."
    },
    {
        product_id: "P014",
        product_name: "Smart Water Bottle",
        category: "Lifestyle",
        brand: "NexaLife",
        price: 129.00,
        discount: 5,
        rating: 4.2,
        stock: 19,
        image: "assets/images/smart-water-bottle.jpg",
        description: "Smart hydration bottle with temperature display and modern design."
    },
    {
        product_id: "P015",
        product_name: "Travel Pouch",
        category: "Lifestyle",
        brand: "NexaTravel",
        price: 49.00,
        discount: 0,
        rating: 4.3,
        stock: 38,
        image: "assets/images/travel-pouch.jpg",
        description: "Compact travel organiser for cables, documents and small accessories."
    },
    {
        product_id: "P016",
        product_name: "Compact Umbrella",
        category: "Lifestyle",
        brand: "NexaLife",
        price: 59.00,
        discount: 10,
        rating: 4.4,
        stock: 42,
        image: "assets/images/compact-umbrella.jpg",
        description: "Lightweight compact umbrella designed for convenient everyday carry."
    },

    // =========================
    // OFFICE
    // =========================
    {
        product_id: "P017",
        product_name: "Wireless Office Mouse",
        category: "Office",
        brand: "NexaWork",
        price: 79.00,
        discount: 5,
        rating: 4.5,
        stock: 36,
        image: "assets/images/office-mouse.jpg",
        description: "Quiet wireless mouse designed for comfortable everyday office use."
    },
    {
        product_id: "P018",
        product_name: "Office Keyboard",
        category: "Office",
        brand: "NexaWork",
        price: 109.00,
        discount: 0,
        rating: 4.4,
        stock: 30,
        image: "assets/images/office-keyboard.jpg",
        description: "Full-size keyboard with comfortable keys for everyday productivity."
    },
    {
        product_id: "P019",
        product_name: "Laptop Sleeve",
        category: "Office",
        brand: "NexaWork",
        price: 69.00,
        discount: 10,
        rating: 4.6,
        stock: 34,
        image: "assets/images/laptop-sleeve.jpg",
        description: "Protective laptop sleeve with soft interior padding and minimalist styling."
    },
    {
        product_id: "P020",
        product_name: "Desk Organiser",
        category: "Office",
        brand: "NexaWork",
        price: 49.00,
        discount: 0,
        rating: 4.3,
        stock: 41,
        image: "assets/images/desk-organiser.jpg",
        description: "Compact organiser for keeping stationery and workspace essentials tidy."
    },
    {
        product_id: "P021",
        product_name: "Monitor Stand",
        category: "Office",
        brand: "NexaWork",
        price: 119.00,
        discount: 10,
        rating: 4.7,
        stock: 21,
        image: "assets/images/monitor-stand.jpg",
        description: "Elevated monitor stand designed to improve desk organisation and ergonomics."
    },
    {
        product_id: "P022",
        product_name: "Ergonomic Mouse Pad",
        category: "Office",
        brand: "NexaWork",
        price: 45.00,
        discount: 5,
        rating: 4.4,
        stock: 50,
        image: "assets/images/ergonomic-mouse-pad.jpg",
        description: "Comfortable mouse pad with wrist support for extended computer use."
    },
    {
        product_id: "P023",
        product_name: "Cable Organiser",
        category: "Office",
        brand: "NexaWork",
        price: 29.00,
        discount: 0,
        rating: 4.2,
        stock: 65,
        image: "assets/images/cable-organiser.jpg",
        description: "Simple cable management solution for maintaining a clean workspace."
    },
    {
        product_id: "P024",
        product_name: "Digital Desk Clock",
        category: "Office",
        brand: "NexaWork",
        price: 89.00,
        discount: 10,
        rating: 4.5,
        stock: 26,
        image: "assets/images/digital-desk-clock.jpg",
        description: "Modern digital desk clock with a clean display for home and office."
    }
];