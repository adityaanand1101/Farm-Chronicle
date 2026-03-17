export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  content: string;
  category: string;
}

export const localBlogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Precision Agriculture: How AI and IoT are Transforming Farm Yields",
    excerpt: "Discover how Artificial Intelligence and Internet of Things (IoT) sensors are revolutionizing modern farming by providing real-time data on soil health and crop growth.",
    author: "Arulmanikandan B",
    date: "15 OCT 2025",
    category: "TECHNOLOGY",
    content: "The landscape of agriculture is undergoing a massive transformation driven by precision technology. By leveraging AI-powered sensors and IoT connectivity, farmers can now monitor micro-climatic conditions, soil moisture levels, and nutrient deficiencies with unprecedented accuracy. This data-driven approach not only maximizes yields but also significantly reduces the wastage of water and fertilizers, making precision agriculture a cornerstone of sustainable food production."
  },
  {
    id: "post-2",
    title: "Sustainable Soil Management: The Foundation of Regenerative Farming",
    excerpt: "Healthy soil is the lifeblood of agriculture. Learn about the best practices for soil conservation, from cover cropping to reduced tillage techniques.",
    author: "Ms. Karthiga P",
    date: "12 OCT 2025",
    category: "SUSTAINABILITY",
    content: "Soil health is more than just nutrient content; it's about a thriving biological ecosystem. Regenerative farming practices focus on restoring organic matter and biodiversity to the soil. Techniques like no-till farming, diverse crop rotations, and the use of green manures are essential for building resilient soils that can withstand climate variability and provide high-quality nutritional output for generations to come."
  },
  {
    id: "post-3",
    title: "The Rise of Vertical Farming: Solving Urban Food Insecurity",
    excerpt: "As urban populations grow, vertical farming offers a high-tech solution to produce fresh greens in the heart of the city, using 95% less water.",
    author: "Ms. Anujaa B",
    date: "08 OCT 2025",
    category: "INNOVATION",
    content: "Vertical farming is no longer science fiction. In controlled-environment agriculture (CEA) facilities, crops are grown in stacked layers, often utilizing hydroponic or aeroponic systems. This method eliminates the need for pesticides, reduces transportation costs by bringing farms closer to consumers, and provides a year-round supply of fresh produce regardless of external weather conditions."
  },
  {
    id: "post-4",
    title: "Climate-Resilient Crops: Adapting Agriculture to Global Warming",
    excerpt: "Agricultural scientists are developing crop varieties that can thrive in extreme heat, salinity, and drought. Explore the future of climate adaptation.",
    author: "Mr. Johns Tiyndel G",
    date: "05 OCT 2025",
    category: "RESEARCH",
    content: "With global temperatures rising, the development of climate-resilient seeds is a top priority for global food security. Through advanced breeding techniques and genome editing, researchers are identifying traits that allow crops like rice, wheat, and maize to survive prolonged droughts and saline soil conditions. These 'future-proof' crops are vital for farmers in regions most affected by climate change."
  },
  {
    id: "post-5",
    title: "Hydroponics vs. Aquaponics: Choosing the Best Soilless System",
    excerpt: "Soilless cultivation is gaining popularity worldwide. We compare hydroponics and aquaponics to help you decide which system fits your farm goals.",
    author: "Mr. Nithiyanantham S",
    date: "01 OCT 2025",
    category: "SYSTEMS",
    content: "While both systems eliminate soil, they operate on different principles. Hydroponics relies on mineral nutrient solutions, offering precise control over plant growth. Aquaponics, on the other hand, creates a symbiotic environment where fish waste provides nutrients for plants, and plants filter the water for the fish. Each has its advantages in terms of cost, scalability, and ecological footprint."
  },
  {
    id: "post-6",
    title: "Organic Pest Control: Integrated Pest Management (IPM) Explained",
    excerpt: "Move beyond chemical pesticides with Integrated Pest Management. Learn how to use biological controls and natural predators to protect your crops.",
    author: "Ms. Janani K S",
    date: "28 SEP 2025",
    category: "ORGANIC",
    content: "IPM is a holistic approach to pest management that prioritizes ecological balance. By encouraging natural predators, using pheromone traps, and selecting pest-resistant varieties, farmers can maintain pest populations below harmful levels without relying on synthetic chemicals. This approach protects beneficial insects like bees and preserves the long-term health of the farm environment."
  },
  {
    id: "post-7",
    title: "Drones in Agriculture: The Eye in the Sky for Modern Farmers",
    excerpt: "From multispectral imaging to precise spraying, agricultural drones are saving time and increasing efficiency for large-scale operations.",
    author: "Ms. Tanisha Gangrade",
    date: "24 SEP 2025",
    category: "TECHNOLOGY",
    content: "Unmanned Aerial Vehicles (UAVs) are changing how we scout fields. Equipped with multispectral cameras, drones can detect crop stress that is invisible to the human eye, allowing for targeted intervention. Furthermore, specialized spraying drones can apply fertilizers and pesticides with extreme precision, reducing chemical use and protecting the health of farm workers by limiting manual application."
  },
  {
    id: "post-8",
    title: "Smart Irrigation Systems: Every Drop Counts in Water-Scarce Regions",
    excerpt: "Learn how automated drip irrigation and soil moisture sensors are helping farmers conserve water while maintaining optimal plant hydration.",
    author: "Arulmanikandan B",
    date: "20 SEP 2025",
    category: "SUSTAINABILITY",
    content: "Water scarcity is one of the biggest challenges facing modern agriculture. Smart irrigation systems use real-time data to deliver the exact amount of water needed by the plant, directly to the root zone. By integrating weather forecasts and soil sensor data, these systems prevent over-irrigation and runoff, ensuring that every drop of water is used as efficiently as possible."
  },
  {
    id: "post-9",
    title: "The Role of Millets in the Global Food Security Strategy",
    excerpt: "Millets are making a comeback as a nutritional powerhouse. Explore why these 'miracle grains' are essential for a sustainable and healthy diet.",
    author: "Ms. Karthiga P",
    date: "15 SEP 2025",
    category: "NUTRITION",
    content: "Millets are gluten-free, rich in micronutrients, and require minimal water and fertilizers to grow. As the world seeks more sustainable food sources, millets offer a resilient alternative to traditional cereals. Their ability to grow in poor soils and harsh climates makes them an ideal crop for smallholder farmers in developing nations and a healthy choice for consumers worldwide."
  },
  {
    id: "post-10",
    title: "Blockchain in Agribusiness: Enhancing Transparency from Farm to Fork",
    excerpt: "Transparency in the food supply chain is becoming a consumer demand. See how blockchain technology is tracking the journey of your food.",
    author: "Ms. Anujaa B",
    date: "10 SEP 2025",
    category: "INNOVATION",
    content: "Blockchain provides an immutable record of a product's journey through the supply chain. In agribusiness, this means consumers can verify the origin, quality, and organic status of their food simply by scanning a QR code. For farmers, blockchain offers better traceability, reduced fraud, and more efficient logistics, ultimately building greater trust between producers and consumers."
  }
];
