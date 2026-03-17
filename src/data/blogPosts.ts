export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  content: string[];
  category: string;
  image: string;
}

export const localBlogPosts: BlogPost[] = [
  {
    id: "precision-agriculture-ai-iot",
    title: "Precision Agriculture: How AI and IoT are Transforming Farm Yields",
    excerpt: "Discover how Artificial Intelligence and Internet of Things (IoT) sensors are revolutionizing modern farming by providing real-time data.",
    author: "Arulmanikandan B",
    date: "15 OCT 2025",
    category: "PRECISION",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1600",
    content: [
      "The landscape of agriculture is undergoing a massive transformation driven by precision technology. By leveraging AI-powered sensors and IoT connectivity, farmers can now monitor micro-climatic conditions, soil moisture levels, and nutrient deficiencies with unprecedented accuracy.",
      "This data-driven approach not only maximizes yields but also significantly reduces the wastage of water and fertilizers, making precision agriculture a cornerstone of sustainable food production."
    ]
  },
  {
    id: "sustainable-soil-management",
    title: "Sustainable Soil Management: The Foundation of Regenerative Farming",
    excerpt: "Healthy soil is the lifeblood of agriculture. Learn about the best practices for soil conservation and health.",
    author: "Ms. Karthiga P",
    date: "12 OCT 2025",
    category: "SOIL",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600",
    content: [
      "Soil health is more than just nutrient content; it's about a thriving biological ecosystem. Regenerative farming practices focus on restoring organic matter and biodiversity to the soil.",
      "Healthy soil acts as a massive carbon sink, helping to mitigate the effects of global warming."
    ]
  },
  {
    id: "dairy-tech-innovations",
    title: "Modern Dairy Technology: Enhancing Efficiency and Animal Welfare",
    excerpt: "Explore how automated milking systems and data analytics are revolutionizing the dairy industry for better productivity.",
    author: "Ms. Anujaa B",
    date: "08 OCT 2025",
    category: "DAIRY",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1600",
    content: [
      "The dairy industry is embracing automation to meet the growing global demand for milk products while ensuring animal comfort. Automated milking systems (AMS) allow cows to be milked on their own schedule, reducing stress and improving milk quality.",
      "Data analytics also play a crucial role, with wearable sensors tracking cow health and activity levels in real-time, allowing for early detection of illnesses and optimized nutrition."
    ]
  },
  {
    id: "climate-resilient-crops",
    title: "Climate-Resilient Crops: Adapting Agriculture to Global Warming",
    excerpt: "Agricultural scientists are developing crop varieties that can thrive in extreme heat, salinity, and drought.",
    author: "Mr. Johns Tiyndel G",
    date: "05 OCT 2025",
    category: "RESILIENCE",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600",
    content: [
      "With global temperatures rising, the development of climate-resilient seeds is a top priority for global food security. Through advanced breeding techniques and genome editing, researchers are identifying traits that allow crops to survive."
    ]
  },
  {
    id: "hydroponics-vs-aquaponics",
    title: "Hydroponics vs. Aquaponics: Choosing the Best Soilless System",
    excerpt: "Soilless cultivation is gaining popularity worldwide. We compare hydroponics and aquaponics for your farm.",
    author: "Mr. Nithiyanantham S",
    date: "01 OCT 2025",
    category: "SOILLESS",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1600",
    content: [
      "While both systems eliminate soil, they operate on different principles. Hydroponics relies on mineral nutrient solutions, while aquaponics creates a symbiotic environment with fish."
    ]
  },
  {
    id: "organic-pest-control-ipm",
    title: "Organic Pest Control: Integrated Pest Management (IPM) Explained",
    excerpt: "Move beyond chemical pesticides with Integrated Pest Management using biological controls.",
    author: "Ms. Janani K S",
    date: "28 SEP 2025",
    category: "ORGANIC",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1600",
    content: [
      "IPM is a holistic approach to pest management that prioritizes ecological balance. By encouraging natural predators, farmers can maintain pest populations below harmful levels."
    ]
  },
  {
    id: "drones-in-agriculture-efficiency",
    title: "Drones in Agriculture: The Eye in the Sky for Modern Farmers",
    excerpt: "From multispectral imaging to precise spraying, agricultural drones are saving time and increasing efficiency.",
    author: "Ms. Tanisha Gangrade",
    date: "24 SEP 2025",
    category: "DRONES",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600",
    content: [
      "Unmanned Aerial Vehicles (UAVs) are changing how we scout fields. Equipped with multispectral cameras, drones can detect crop stress that is invisible to the human eye."
    ]
  },
  {
    id: "smart-irrigation-water-conservation",
    title: "Smart Irrigation Systems: Every Drop Counts in Water-Scarce Regions",
    excerpt: "Learn how automated drip irrigation and soil moisture sensors are helping farmers conserve water.",
    author: "Arulmanikandan B",
    date: "20 SEP 2025",
    category: "WATER",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1600",
    content: [
      "Water scarcity is one of the biggest challenges facing modern agriculture. Smart irrigation systems use real-time data to deliver the exact amount of water needed."
    ]
  },
  {
    id: "role-of-millets-food-security",
    title: "The Role of Millets in the Global Food Security Strategy",
    excerpt: "Millets are making a comeback as a nutritional powerhouse and a resilient alternative to traditional cereals.",
    author: "Ms. Karthiga P",
    date: "15 SEP 2025",
    category: "MILLETS",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1600",
    content: [
      "Millets are gluten-free, rich in micronutrients, and require minimal water and fertilizers to grow. As the world seeks more sustainable food sources, millets offer a resilient alternative."
    ]
  },
  {
    id: "blockchain-agribusiness-transparency",
    title: "Blockchain in Agribusiness: Enhancing Transparency from Farm to Fork",
    excerpt: "Transparency in the food supply chain is becoming a consumer demand. See how blockchain tracks your food.",
    author: "Ms. Anujaa B",
    date: "10 SEP 2025",
    category: "LOGISTICS",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600",
    content: [
      "Blockchain provides an immutable record of a product's journey through the supply chain. In agribusiness, this means consumers can verify origin and quality."
    ]
  }
];
