import {
  VeganResto,
  BakeResto,
  GoodFood,
  HealthyFood,
  NeatResto,
  SmartResto,
  GreenNoddle,
  HerbalPancake,
  FruitSalad,
  SpacyFreshCrab1,
  SpacyFreshCrab2,
  SpacyFreshCrab3,
  Meat1,
  Pizza1,
  Person1,
  Person2,
  Person3,
  Cancel,
  Success,
  Coin
} from "@/assets/images";

export const menuItems = [
  {
    id: 1,
    name: "Green Noddle",
    description: "Noodle Home",
    price: 15,
    image: GreenNoddle,
    type: "soup"
  },
  {
    id: 1,
    name: "Herbal Pancake",
    description: "Warung Herbal",
    price: 15,
    image: HerbalPancake,
    type: "soup"
  },
  {
    id: 1,
    name: "Fruit Salad",
    description: "Wijie Resto",
    price: 15,
    image: FruitSalad,
    type: "salad"
  },
  {
    id: 1,
    name: "Spacy Fresh Crab 1",
    description: "Waroenk kita",
    price: 15,
    image: SpacyFreshCrab1,
    type: "fish"
  },
  {
    id: 1,
    name: "Spacy Fresh Crab 2",
    description: "Waroenk kita",
    price: 15,
    image: SpacyFreshCrab2,
    type: "fish"
  },
  {
    id: 1,
    name: "Spacy Fresh Crab 3",
    description: "Waroenk kita",
    price: 15,
    image: SpacyFreshCrab3,
    type: "fish"
  },
  {
    id: 1,
    name: "Meat",
    description: "Meat Home",
    price: 15,
    image: Meat1,
    type: "meat"
  },
  {
    id: 1,
    name: "Pizza",
    description: "Pizza Home",
    price: 15,
    image: Pizza1,
    type: "pizza"
  }
];

export const filters = {
  restaurant: [1, 2, 3, 5, 7, 10, 20, 50],
  menuItems: [...new Set(menuItems.map((item) => item.type))]
};

export const persons = [
  {
    id: 1,
    name: "Anamwp",
    image: Person1
  },
  {
    id: 2,
    name: "John Doe",
    image: Person2
  },
  {
    id: 3,
    name: "Jane Doe",
    image: Person3
  }
];

export const opinions = [
  "This Is great, So delicious! You Must Here, With Your family .",
  "This Is great, So delicious! You Must Here, With Your family .",
  "This Is great, So delicious! You Must Here, With Your family .",
  "This Is great, So delicious! You Must Here, With Your family .",
  "This Is great, So delicious! You Must Here, With Your family .",
  "This Is great, So delicious! You Must Here, With Your family ."
];

export const restaurants = [
  {
    id: 1,
    name: "Vegan Resto",
    description:
      "Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole",
    image: VeganResto,
    time: "12",
    distance: "12",
    rating: 4.8,
    isPopular: true,
    popularMenu: menuItems.sort(() => Math.random() - 0.5).slice(0, 4),
    testimontials: Array.from(
      { length: Math.min(persons.length, opinions.length) },
      () => ({
        person: persons[Math.floor(Math.random() * persons.length)],
        opinion: opinions[Math.floor(Math.random() * opinions.length)],
        date: "12 Avril 2021",
        rating: 5
      })
    )
  },
  {
    id: 2,
    name: "Healthy Food",
    description:
      "Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole",
    image: HealthyFood,
    time: "8",
    distance: "8",
    rating: 4.8,
    isPopular: false,
    popularMenu: [menuItems.sort(() => 0.5 - Math.random()).slice(0, 4)],
    testimontials: Array.from(
      { length: Math.min(persons.length, opinions.length) },
      () => ({
        person: persons[Math.floor(Math.random() * persons.length)],
        opinion: opinions[Math.floor(Math.random() * opinions.length)]
      })
    )
  },
  {
    id: 3,
    name: "Good Food",
    description:
      "Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole",
    image: GoodFood,
    time: "12",
    distance: "12",
    rating: 4.8,
    isPopular: false,
    popularMenu: [menuItems.sort(() => 0.5 - Math.random()).slice(0, 4)],
    testimontials: Array.from(
      { length: Math.min(persons.length, opinions.length) },
      () => ({
        person: persons[Math.floor(Math.random() * persons.length)],
        opinion: opinions[Math.floor(Math.random() * opinions.length)]
      })
    )
  },
  {
    id: 4,
    name: "Smart Resto",
    description:
      "Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole",
    image: SmartResto,
    time: "8",
    distance: "8",
    rating: 4.8,
    isPopular: false,
    popularMenu: [menuItems.sort(() => 0.5 - Math.random()).slice(0, 4)],
    testimontials: Array.from(
      { length: Math.min(persons.length, opinions.length) },
      () => ({
        person: persons[Math.floor(Math.random() * persons.length)],
        opinion: opinions[Math.floor(Math.random() * opinions.length)]
      })
    )
  },
  {
    id: 5,
    name: "NeatResto",
    description:
      "Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole",
    image: NeatResto,
    time: "12",
    distance: "12",
    rating: 4.8,
    isPopular: false,
    popularMenu: [menuItems.sort(() => 0.5 - Math.random()).slice(0, 4)],
    testimontials: Array.from(
      { length: Math.min(persons.length, opinions.length) },
      () => ({
        person: persons[Math.floor(Math.random() * persons.length)],
        opinion: opinions[Math.floor(Math.random() * opinions.length)]
      })
    )
  },
  {
    id: 6,
    name: "BakeResto",
    description:
      "Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole",
    image: BakeResto,
    time: "8",
    distance: "8",
    rating: 4.8,
    isPopular: false,
    popularMenu: [menuItems.sort(() => 0.5 - Math.random()).slice(0, 4)],
    testimontials: Array.from(
      { length: Math.min(persons.length, opinions.length) },
      () => ({
        person: persons[Math.floor(Math.random() * persons.length)],
        opinion: opinions[Math.floor(Math.random() * opinions.length)]
      })
    )
  }
];

export const chats = [
  {
    id: 1,
    name: "Anamwp",
    message: "Your Order Just Arrived!",
    time: "20:00",
    image: Person1,
    isActive: true,
    conversations: [
      {
        with: 0,
        messages: [
          { type: "self", text: "Just to order", time: "20:02" },
          {
            type: "friend",
            text: "Okey for what level of spiciness?",
            time: "20:05"
          },
          { type: "self", text: "Okay, wait a minute 👍", time: "20:06" },
          { type: "friend", text: "Okay, I'm waiting 👍", time: "20:06" }
        ]
      },
      {
        with: 2,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 3,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 4,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 5,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 6,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Guy Hawkings",
    message: "Your Order Just Arrived!",
    time: "20:05",
    image: Person2,
    isActive: false,
    conversations: [
      {
        with: 1,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 3,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 4,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 5,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 6,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Lestlie Alexander",
    message: "Your Order Just Arrived!",
    time: "20:10",
    image: Person3,
    isActive: true,
    conversations: [
      {
        with: 1,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 2,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 4,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 5,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 6,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "John Doe",
    message: "What are you up to today?",
    time: "12:15 PM",
    image: Person1,
    isActive: false,
    conversations: [
      {
        with: 1,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 2,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 3,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 5,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 6,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "John Doe",
    message: "I'm just relaxing at home, watching a movie.",
    time: "12:20 PM",
    image: Person2,
    isActive: true,
    conversations: [
      {
        with: 1,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 2,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 3,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 4,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 6,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Jane Doe",
    message:
      "That sounds nice. I'm thinking about going out for dinner tonight.",
    time: "12:25 PM",
    image: Person3,
    isActive: false,
    conversations: [
      {
        with: 1,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 2,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 3,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      },
      {
        with: 4,
        messages: [
          {
            type: "self",
            text: "Hi Anamwp! Did you get my email?",
            time: "20:10"
          },
          {
            type: "friend",
            text: "Yes, I received it. Let's discuss it later.",
            time: "20:15"
          }
        ]
      },
      {
        with: 5,
        messages: [
          {
            type: "self",
            text: "Hello Anamwp! How are you?",
            time: "20:02"
          },
          { type: "friend", text: "I'm doing well, thanks!", time: "20:05" }
        ]
      }
    ]
  }
];

export const notifications = [
  {
    id: 1,
    title: "Your order has been taken by the driver",
    description: "Your order has been taken by the driver",
    time: "Recently",
    image: Success,
    isRead: false
  },
  {
    id: 2,
    title: "Topup for $100 was successful",
    description: "Topup for $100 was successful",
    time: "10.00 Am",
    image: Coin,
    isRead: true
  },
  {
    id: 3,
    title: "Your order has been canceled",
    description: "Your order has been canceled",
    time: "22 Juny 2021",
    image: Cancel,
    isRead: true
  }
];

export const users = [
  {
    id: 1,
    name: "Anam Wusono",
    email: "anamwp66@gmail.com",
    voucher: 3,
    isGoldMember: true,
    favorite: [
      {
        id: 1,
        name: "Spacy Fresh Crab 3",
        description: "Waroenk kita",
        price: 15,
        image: SpacyFreshCrab3,
        type: "fish"
      },
      {
        id: 2,
        name: "Spacy Fresh Crab 3",
        description: "Waroenk kita",
        price: 15,
        image: SpacyFreshCrab3,
        type: "fish"
      },
      {
        id: 3,
        name: "Spacy Fresh Crab 3",
        description: "Waroenk kita",
        price: 15,
        image: SpacyFreshCrab3,
        type: "fish"
      }
    ]
  }
];
