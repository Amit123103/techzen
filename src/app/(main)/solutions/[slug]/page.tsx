import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionContent } from "./SolutionContent";

// Mock data to simulate headless CMS or MDX
const solutionsData: Record<string, any> = {
  "enterprise-saas": {
    title: "Enterprise SaaS Platforms",
    overview: "We architect and build highly scalable, multi-tenant SaaS applications tailored for enterprise operations.",
    heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Secure multi-tenant architecture",
      "Customizable dashboards and reporting",
      "Seamless integration with legacy systems",
      "Role-based access control (RBAC)"
    ],
    features: [
      { name: "Subscription Management", desc: "Automated billing, invoicing, and tier management." },
      { name: "High Availability", desc: "99.99% uptime guarantees with distributed architecture." },
      { name: "Data Residency", desc: "Compliance with GDPR, HIPAA, and regional data laws." }
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
  },
  "cloud-architecture": {
    title: "Cloud Architecture & Migration",
    overview: "Transform your infrastructure with resilient, auto-scaling cloud solutions that reduce costs and improve performance.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Zero-downtime migrations",
      "Optimized cloud spend",
      "Automated scaling during traffic spikes",
      "Enhanced disaster recovery"
    ],
    features: [
      { name: "Infrastructure as Code", desc: "Manage infrastructure using Terraform and CloudFormation." },
      { name: "Serverless Computing", desc: "Reduce operational overhead with serverless architectures." },
      { name: "Microservices", desc: "Break down monoliths into manageable, independent services." }
    ],
    stack: ["AWS", "Google Cloud", "Kubernetes", "Terraform", "Docker", "Datadog"],
  },
  "mobile-applications": {
    title: "Native & Cross-Platform Mobile Apps",
    overview: "Engaging, high-performance mobile experiences for iOS and Android, built to scale.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Beautiful, intuitive user interfaces",
      "Offline capabilities and caching",
      "Push notifications and real-time updates",
      "App store optimization and compliance"
    ],
    features: [
      { name: "Cross-Platform Codebase", desc: "Write once, deploy everywhere with React Native." },
      { name: "Native Performance", desc: "Access device hardware like cameras, GPS, and sensors." },
      { name: "Continuous Delivery", desc: "Automated App Store and Google Play deployments." }
    ],
    stack: ["React Native", "Swift", "Kotlin", "Firebase", "Supabase", "Fastlane"],
  },
  "ai-automation": {
    title: "AI Integration & Automation",
    overview: "Leverage machine learning and artificial intelligence to automate workflows and unlock data insights.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Drastically reduce manual data entry",
      "Predictive analytics for better decision making",
      "24/7 automated customer support",
      "Personalized user experiences"
    ],
    features: [
      { name: "Custom LLM Integrations", desc: "Connect OpenAI, Anthropic, or open-source models." },
      { name: "Workflow Automation", desc: "Intelligent routing and processing of business data." },
      { name: "Vector Search", desc: "Semantic search capabilities for your internal knowledge base." }
    ],
    stack: ["Python", "LangChain", "OpenAI", "Pinecone", "Supabase Vector", "FastAPI"],
  },
  "custom-crm": {
    title: "Custom CRM Development",
    overview: "Stop fighting off-the-shelf software. We build Custom CRMs that perfectly map to your unique sales process.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "No per-user licensing fees",
      "Tailored precisely to your workflows",
      "Deep integration with your ERP",
      "Complete data ownership"
    ],
    features: [
      { name: "Pipeline Management", desc: "Visual, drag-and-drop sales pipelines." },
      { name: "Automated Follow-ups", desc: "Trigger emails and tasks based on deal stages." },
      { name: "Advanced Reporting", desc: "Custom dashboards that show metrics that actually matter." }
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "SendGrid", "Twilio"],
  },
  "e-commerce": {
    title: "E-Commerce Platforms",
    overview: "High-converting, blazing-fast e-commerce storefronts and powerful backend management systems.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    benefits: [
      "Sub-second page load times",
      "Secure payment processing",
      "Headless commerce architecture",
      "Omnichannel inventory management"
    ],
    features: [
      { name: "Headless Storefront", desc: "Decoupled frontend for unmatched performance and flexibility." },
      { name: "Global CDN", desc: "Serve assets instantly to customers anywhere in the world." },
      { name: "Algolia Search", desc: "Typo-tolerant, instant product discovery." }
    ],
    stack: ["Next.js", "Shopify Plus", "Stripe", "Algolia", "Sanity CMS", "Vercel"],
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = solutionsData[slug];
  if (!data) return { title: "Not Found" };
  
  return {
    title: `${data.title} | Solutions | ReInformTech`,
    description: data.overview,
  };
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = solutionsData[slug];
  
  if (!data) {
    notFound();
  }

  return <SolutionContent data={data} />;
}
