export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  content: string[]; // Array of paragraphs
  category: string;
  image: string;
}

export const localBlogPosts: BlogPost[] = [
  {
    id: "precision-agriculture-ai-iot",
    title: "Precision Agriculture: How AI and IoT are Transforming Farm Yields",
    excerpt: "Discover how Artificial Intelligence and Internet of Things (IoT) sensors are revolutionizing modern farming by providing real-time data on soil health and crop growth.",
    author: "Arulmanikandan B",
    date: "15 OCT 2025",
    category: "TECHNOLOGY",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1600",
    content: [
      "The landscape of agriculture is undergoing a massive transformation driven by precision technology. By leveraging AI-powered sensors and IoT connectivity, farmers can now monitor micro-climatic conditions, soil moisture levels, and nutrient deficiencies with unprecedented accuracy.",
      "This data-driven approach not only maximizes yields but also significantly reduces the wastage of water and fertilizers, making precision agriculture a cornerstone of sustainable food production. Modern farms are now equipped with sensors that provide 24/7 monitoring, feeding data into AI algorithms that can predict pest outbreaks and suggest the optimal time for harvesting.",
      "As we move forward, the integration of satellite imagery and drone data will further enhance these capabilities, allowing for 'variable rate application' where every square meter of a field receives exactly what it needs and nothing more. This is the future of efficient, high-yield farming."
    ]
  },
  {
    id: "sustainable-soil-management",
    title: "Sustainable Soil Management: The Foundation of Regenerative Farming",
    excerpt: "Healthy soil is the lifeblood of agriculture. Learn about the best practices for soil conservation, from cover cropping to reduced tillage techniques.",
    author: "Ms. Karthiga P",
    date: "12 OCT 2025",
    category: "SUSTAINABILITY",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600",
    content: [
      "Soil health is more than just nutrient content; it's about a thriving biological ecosystem. Regenerative farming practices focus on restoring organic matter and biodiversity to the soil. Techniques like no-till farming, diverse crop rotations, and the use of green manures are essential for building resilient soils.",
      "Healthy soil acts as a massive carbon sink, helping to mitigate the effects of global warming. By keeping the ground covered with cover crops during off-seasons, farmers prevent erosion and keep the soil microbiome alive and active. This leads to better water retention and naturally higher fertility.",
      "Investing in soil health today ensures the productivity of the land for future generations. It reduces the dependency on synthetic inputs and creates a more self-sustaining agricultural cycle that benefits both the farmer and the environment."
    ]
  },
  {
    id: "vertical-farming-urban-food",
    title: "The Rise of Vertical Farming: Solving Urban Food Insecurity",
    excerpt: "As urban populations grow, vertical farming offers a high-tech solution to produce fresh greens in the heart of the city, using 95% less water.",
    author: "Ms. Anujaa B",
    date: "08 OCT 2025",
    category: "INNOVATION",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1600",
    content: [
      "Vertical farming is no longer science fiction. In controlled-environment agriculture (CEA) facilities, crops are grown in stacked layers, often utilizing hydroponic or aeroponic systems. This method eliminates the need for pesticides and reduces transportation costs.",
      "By bringing farms closer to consumers in urban centers, we can significantly reduce the 'food miles' associated with traditional produce. Vertical farms can be set up in abandoned warehouses or even shipping containers, making them highly scalable and adaptable to local needs.",
      "While the energy requirements for LED lighting are currently a challenge, the integration of renewable energy sources like solar and wind is making vertical farming increasingly viable. It represents a major step toward a more secure and sustainable urban food supply."
    ]
  },
  {
    id: "climate-resilient-crops",
    title: "Climate-Resilient Crops: Adapting Agriculture to Global Warming",
    excerpt: "Agricultural scientists are developing crop varieties that can thrive in extreme heat, salinity, and drought. Explore the future of climate adaptation.",
    author: "Mr. Johns Tiyndel G",
    date: "05 OCT 2025",
    category: "RESEARCH",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600",
    content: [
      "With global temperatures rising, the development of climate-resilient seeds is a top priority for global food security. Through advanced breeding techniques and genome editing, researchers are identifying traits that allow crops like rice, wheat, and maize to survive prolonged droughts.",
      "These 'future-proof' crops are not just about survival; they are designed to maintain high yields even under environmental stress. Scientists are also looking at ancient, forgotten crop varieties that naturally possess resilient traits and cross-breeding them with modern high-yield varieties.",
      "Climate adaptation in agriculture requires a multi-faceted approach, combining genetic research with improved water management and soil conservation. The goal is to ensure that even in a warming world, we can continue to feed a growing global population."
    ]
  },
  {
    id: "hydroponics-vs-aquaponics",
    title: "Hydroponics vs. Aquaponics: Choosing the Best Soilless System",
    excerpt: "Soilless cultivation is gaining popularity worldwide. We compare hydroponics and aquaponics to help you decide which system fits your farm goals.",
    author: "Mr. Nithiyanantham S",
    date: "01 OCT 2025",
    category: "SYSTEMS",
    image: "https://images.unsplash.com/photo-1585059895324-582b228b5ada?q=80&w=1600",
    content: [
      "While both systems eliminate soil, they operate on different principles. Hydroponics relies on mineral nutrient solutions, offering precise control over plant growth. It is highly efficient and allows for rapid crop cycles, making it ideal for commercial leafy green production.",
      "Aquaponics, on the other hand, creates a symbiotic environment where fish waste provides nutrients for plants, and plants filter the water for the fish. This closed-loop system is incredibly sustainable and produces both fish and vegetables, though it requires more complex management of the biological balance.",
      "The choice between the two depends on the farmer's goals, budget, and available space. Hydroponics is often easier for beginners, while aquaponics offers a more holistic and integrated approach to sustainable food production."
    ]
  },
  {
    id: "organic-pest-control-ipm",
    title: "Organic Pest Control: Integrated Pest Management (IPM) Explained",
    excerpt: "Move beyond chemical pesticides with Integrated Pest Management. Learn how to use biological controls and natural predators to protect your crops.",
    author: "Ms. Janani K S",
    date: "28 SEP 2025",
    category: "ORGANIC",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1600",
    content: [
      "IPM is a holistic approach to pest management that prioritizes ecological balance. By encouraging natural predators, using pheromone traps, and selecting pest-resistant varieties, farmers can maintain pest populations below harmful levels without relying on synthetic chemicals.",
      "A key component of IPM is regular field scouting to identify pests before they become a major problem. This allows for targeted interventions, such as releasing ladybugs to control aphids or using botanical extracts as natural deterrents. It's about working with nature, not against it.",
      "Reducing chemical dependency not only protects beneficial insects like bees and butterflies but also ensures the safety of the food we eat and the health of the farm workers. IPM is the responsible path forward for modern crop protection."
    ]
  },
  {
    id: "drones-in-agriculture-efficiency",
    title: "Drones in Agriculture: The Eye in the Sky for Modern Farmers",
    excerpt: "From multispectral imaging to precise spraying, agricultural drones are saving time and increasing efficiency for large-scale operations.",
    author: "Ms. Tanisha Gangrade",
    date: "24 SEP 2025",
    category: "TECHNOLOGY",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600",
    content: [
      "Unmanned Aerial Vehicles (UAVs) are changing how we scout fields. Equipped with multispectral cameras, drones can detect crop stress that is invisible to the human eye, allowing for targeted intervention before a problem spreads throughout the entire field.",
      "Furthermore, specialized spraying drones can apply fertilizers and pesticides with extreme precision, reducing chemical use and protecting the health of farm workers by limiting manual application. These drones can navigate difficult terrain that might be inaccessible to traditional tractors.",
      "The data collected by drones can be integrated with farm management software to create highly detailed maps of crop health and growth. This allows farmers to make more informed decisions about irrigation, fertilization, and harvesting, ultimately leading to higher efficiency and better yields."
    ]
  },
  {
    id: "smart-irrigation-water-conservation",
    title: "Smart Irrigation Systems: Every Drop Counts in Water-Scarce Regions",
    excerpt: "Learn how automated drip irrigation and soil moisture sensors are helping farmers conserve water while maintaining optimal plant hydration.",
    author: "Arulmanikandan B",
    date: "20 SEP 2025",
    category: "SUSTAINABILITY",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1600",
    content: [
      "Water scarcity is one of the biggest challenges facing modern agriculture. Smart irrigation systems use real-time data to deliver the exact amount of water needed by the plant, directly to the root zone. This minimizes evaporation and ensures that no water is wasted.",
      "By integrating weather forecasts and soil sensor data, these systems can automatically adjust irrigation schedules based on rainfall and soil moisture levels. This prevents over-irrigation, which can lead to nutrient leaching and root rot, while ensuring plants are never under-hydrated.",
      "As global water resources become increasingly strained, the adoption of smart irrigation is essential for the sustainability of agriculture. It allows farmers to grow more food with less water, preserving this vital resource for the future."
    ]
  },
  {
    id: "role-of-millets-food-security",
    title: "The Role of Millets in the Global Food Security Strategy",
    excerpt: "Millets are making a comeback as a nutritional powerhouse. Explore why these 'miracle grains' are essential for a sustainable and healthy diet.",
    author: "Ms. Karthiga P",
    date: "15 SEP 2025",
    category: "NUTRITION",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=1600",
    content: [
      "Millets are gluten-free, rich in micronutrients, and require minimal water and fertilizers to grow. As the world seeks more sustainable food sources, millets offer a resilient alternative to traditional cereals. They are incredibly hardy and can thrive in poor soils.",
      "Their low glycemic index makes them an excellent choice for managing modern health conditions like diabetes. Furthermore, millets have a shorter growing season compared to rice and wheat, allowing for multiple crop cycles in a single year.",
      "Promoting millet cultivation is a key strategy for enhancing food security in semi-arid regions. By diversifying our diets with these ancient grains, we can build a more resilient and nutritious global food system."
    ]
  },
  {
    id: "blockchain-agribusiness-transparency",
    title: "Blockchain in Agribusiness: Enhancing Transparency from Farm to Fork",
    excerpt: "Transparency in the food supply chain is becoming a consumer demand. See how blockchain technology is tracking the journey of your food.",
    author: "Ms. Anujaa B",
    date: "10 SEP 2025",
    category: "INNOVATION",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600",
    content: [
      "Blockchain provides an immutable record of a product's journey through the supply chain. In agribusiness, this means consumers can verify the origin, quality, and organic status of their food simply by scanning a QR code on the packaging.",
      "This transparency builds greater trust between producers and consumers. It also allows for much faster and more accurate product recalls in the event of a food safety issue, as every step of the distribution process is recorded and easily traceable.",
      "For farmers, blockchain offers better traceability and more efficient logistics, potentially leading to fairer prices and better access to international markets. It is a powerful tool for modernizing the global food supply chain and ensuring food safety and quality."
    ]
  }
];
