import type { Restaurant } from "@/types/dashboard";

export const restaurants: Restaurant[] = [
  {
    id: "McDonalds",
    name: "McDonalds",
    emoji: "🍔",
    rating: 4.8,
    distanceKm: 1.2,
    deliveryTime: "25-35 min",
    tags: ["burgers", "american", "fast-food"],
    description: "Classic smashed burgers and crispy fries, made fresh to order.",
    imageurl: "/images/restaurants/mekdonalds.avif",
    menu: [
      {
        id: "bh-1",
        name: "Double Cheeseburger",
        description: "Beef patty, cheddar, sauce",
        price: 8.5,
        rating: 4.9,
        emoji: "🍔",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-2",
        name: "Bacon BBQ Burger",
        description: "Smoked bacon, onion rings, BBQ sauce",
        price: 9.2,
        rating: 4.7,
        emoji: "🥓",
        imageurl: "/images/food/obrok.avif"
      },
      {
        id: "bh-3",
        name: "Crispy Chicken Burger",
        description: "Buttermilk fried chicken, slaw",
        price: 7.8,
        rating: 4.6,
        emoji: "🍗",
        imageurl: "/images/food/pomfrit.avif"
      },
      {
        id: "bh-4",
        name: "Loaded Fries",
        description: "Cheese sauce, bacon bits, chives",
        price: 4.5,
        rating: 4.5,
        emoji: "🍟",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-5",
        name: "Double Cheeseburger",
        description: "Beef patty, cheddar, sauce",
        price: 8.5,
        rating: 4.9,
        emoji: "🍔",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-6",
        name: "Bacon BBQ Burger",
        description: "Smoked bacon, onion rings, BBQ sauce",
        price: 9.2,
        rating: 4.7,
        emoji: "🥓",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-7",
        name: "Crispy Chicken Burger",
        description: "Buttermilk fried chicken, slaw",
        price: 7.8,
        rating: 4.6,
        emoji: "🍗",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-8",
        name: "Loaded Fries",
        description: "Cheese sauce, bacon bits, chives",
        price: 4.5,
        rating: 4.5,
        emoji: "🍟",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-9",
        name: "Double Cheeseburger",
        description: "Beef patty, cheddar, sauce",
        price: 8.5,
        rating: 4.9,
        emoji: "🍔",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-10",
        name: "Bacon BBQ Burger",
        description: "Smoked bacon, onion rings, BBQ sauce",
        price: 9.2,
        rating: 4.7,
        emoji: "🥓",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-11",
        name: "Crispy Chicken Burger",
        description: "Buttermilk fried chicken, slaw",
        price: 7.8,
        rating: 4.6,
        emoji: "🍗",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-12",
        name: "Loaded Fries",
        description: "Cheese sauce, bacon bits, chives",
        price: 4.5,
        rating: 4.5,
        emoji: "🍟",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-13",
        name: "Double Cheeseburger",
        description: "Beef patty, cheddar, sauce",
        price: 8.5,
        rating: 4.9,
        emoji: "🍔",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-14",
        name: "Bacon BBQ Burger",
        description: "Smoked bacon, onion rings, BBQ sauce",
        price: 9.2,
        rating: 4.7,
        emoji: "🥓",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-15",
        name: "Crispy Chicken Burger",
        description: "Buttermilk fried chicken, slaw",
        price: 7.8,
        rating: 4.6,
        emoji: "🍗",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-16",
        name: "Loaded Fries",
        description: "Cheese sauce, bacon bits, chives",
        price: 4.5,
        rating: 4.5,
        emoji: "🍟",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-17",
        name: "Double Cheeseburger",
        description: "Beef patty, cheddar, sauce",
        price: 8.5,
        rating: 4.9,
        emoji: "🍔",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-18",
        name: "Bacon BBQ Burger",
        description: "Smoked bacon, onion rings, BBQ sauce",
        price: 9.2,
        rating: 4.7,
        emoji: "🥓",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-19",
        name: "Crispy Chicken Burger",
        description: "Buttermilk fried chicken, slaw",
        price: 7.8,
        rating: 4.6,
        emoji: "🍗",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bh-20",
        name: "Loaded Fries",
        description: "Cheese sauce, bacon bits, chives",
        price: 4.5,
        rating: 4.5,
        emoji: "🍟",
        imageurl: "/images/food/cheeseburger.avif"
      },
    ],
  },
  {
    id: "nonnas-kitchen",
    name: "Nonna's Kitchen",
    emoji: "🍝",
    rating: 4.7,
    distanceKm: 2.4,
    deliveryTime: "30-40 min",
    tags: ["italian", "pasta"],
    description:
      "Handmade pasta and wood-fired classics from a family recipe book.",
    imageurl: "/images/restaurants/mekdonalds.avif",
    menu: [
      {
        id: "nk-1",
        name: "Spaghetti Carbonara",
        description: "Egg, pecorino, guanciale",
        price: 9.9,
        rating: 4.9,
        emoji: "🍝",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "nk-2",
        name: "Margherita Pizza",
        description: "San Marzano tomato, mozzarella, basil",
        price: 8.0,
        rating: 4.8,
        emoji: "🍕",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "nk-3",
        name: "Lasagna",
        description: "Beef ragù, béchamel, parmesan",
        price: 10.5,
        rating: 4.7,
        emoji: "🧀",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "nk-4",
        name: "Tiramisu",
        description: "Espresso-soaked ladyfingers, mascarpone",
        price: 5.5,
        rating: 4.9,
        emoji: "🍰",
        imageurl: "/images/food/cheeseburger.avif"
      },
    ],
  },
  {
    id: "belgrade-grill",
    name: "Belgrade Grill",
    emoji: "🍖",
    rating: 4.9,
    distanceKm: 0.8,
    deliveryTime: "20-30 min",
    tags: ["serbian", "barbecue", "chicken"],
    description:
      "Charcoal-grilled ćevapi and pljeskavica, straight off the fire.",
    imageurl: "/images/restaurants/mekdonalds.avif",
    menu: [
      {
        id: "bg-1",
        name: "Ćevapi Plate",
        description: "Grilled minced meat, onion, flatbread",
        price: 7.0,
        rating: 4.9,
        emoji: "🍖",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bg-2",
        name: "Pljeskavica",
        description: "Serbian burger patty, kajmak, ajvar",
        price: 7.5,
        rating: 4.8,
        emoji: "🍔",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bg-3",
        name: "Grilled Chicken Skewers",
        description: "Marinated chicken, peppers, onion",
        price: 6.8,
        rating: 4.6,
        emoji: "🍗",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "bg-4",
        name: "Ajvar & Bread",
        description: "Roasted pepper spread, fresh bread",
        price: 2.5,
        rating: 4.7,
        emoji: "🍞",
        imageurl: "/images/food/cheeseburger.avif"
      },
    ],
  },
  {
    id: "sakura-bowl",
    name: "Sakura Bowl",
    emoji: "🍜",
    rating: 4.6,
    distanceKm: 3.1,
    deliveryTime: "35-45 min",
    tags: ["asian", "healthy"],
    description: "Fresh ramen, sushi rolls, and rice bowls made to order.",
    imageurl: "/images/restaurants/mekdonalds.avif",
    menu: [
      {
        id: "sb-1",
        name: "Chicken Ramen",
        description: "Miso broth, soft egg, scallion",
        price: 9.5,
        rating: 4.8,
        emoji: "🍜",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "sb-2",
        name: "California Roll",
        description: "Crab, avocado, cucumber",
        price: 7.2,
        rating: 4.6,
        emoji: "🍣",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "sb-3",
        name: "Teriyaki Bowl",
        description: "Grilled chicken, steamed rice, veg",
        price: 8.9,
        rating: 4.7,
        emoji: "🍚",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "sb-4",
        name: "Miso Soup",
        description: "Tofu, wakame, scallion",
        price: 3.0,
        rating: 4.4,
        emoji: "🥣",
        imageurl: "/images/food/cheeseburger.avif"
      },
    ],
  },
  {
    id: "green-fork",
    name: "Green Fork",
    emoji: "🥗",
    rating: 4.5,
    distanceKm: 1.7,
    deliveryTime: "20-30 min",
    tags: ["vegan", "healthy"],
    description:
      "Plant-based bowls, salads, and smoothies for a lighter bite.",
    imageurl: "/images/restaurants/mekdonalds.avif",
    menu: [
      {
        id: "gf-1",
        name: "Buddha Bowl",
        description: "Quinoa, chickpeas, tahini dressing",
        price: 7.9,
        rating: 4.7,
        emoji: "🥗",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "gf-2",
        name: "Avocado Toast",
        description: "Sourdough, avocado, chili flakes",
        price: 6.5,
        rating: 4.5,
        emoji: "🥑",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "gf-3",
        name: "Vegan Burger",
        description: "Plant patty, vegan cheese, pickles",
        price: 8.2,
        rating: 4.4,
        emoji: "🍔",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "gf-4",
        name: "Green Smoothie",
        description: "Spinach, banana, mango, oat milk",
        price: 4.0,
        rating: 4.6,
        emoji: "🥤",
        imageurl: "/images/food/cheeseburger.avif"
      },
    ],
  },
  {
    id: "sunrise-cafe",
    name: "Sunrise Café",
    emoji: "🥞",
    rating: 4.8,
    distanceKm: 1.0,
    deliveryTime: "15-25 min",
    tags: ["breakfast", "pancakes", "desserts"],
    description: "All-day breakfast, fluffy pancakes, and fresh pastries.",
    imageurl: "/images/restaurants/mekdonalds.avif",
    menu: [
      {
        id: "sc-1",
        name: "Stack of Pancakes",
        description: "Maple syrup, butter, berries",
        price: 6.5,
        rating: 4.9,
        emoji: "🥞",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "sc-2",
        name: "Avocado Eggs Benedict",
        description: "Poached eggs, hollandaise, avocado",
        price: 7.8,
        rating: 4.7,
        emoji: "🍳",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "sc-3",
        name: "Belgian Waffle",
        description: "Whipped cream, chocolate drizzle",
        price: 6.9,
        rating: 4.8,
        emoji: "🧇",
        imageurl: "/images/food/cheeseburger.avif"
      },
      {
        id: "sc-4",
        name: "Cinnamon Roll",
        description: "Warm glaze, toasted pecans",
        price: 3.5,
        rating: 4.6,
        emoji: "🍩",
        imageurl: "/images/food/cheeseburger.avif"
      },
    ],
  },
];