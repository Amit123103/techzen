import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { supabaseAdmin } from "@/lib/supabase/server";

type ClientLogo = {
  id: string | number;
  name: string;
  logo_url?: string;
};

const defaultLogos: ClientLogo[] = [
  { name: "Acme Corp", id: 1 },
  { name: "GlobalTech", id: 2 },
  { name: "Quantum", id: 3 },
  { name: "Vertex", id: 4 },
  { name: "Pulse", id: 5 },
  { name: "Nebula", id: 6 },
];

export async function TrustedBy() {
  // Try to fetch dynamic clients
  let clients: ClientLogo[] = [];
  try {
    const { data } = await supabaseAdmin
      .from("clients")
      .select("*")
      .order("created_at", { ascending: true });
    
    if (data && data.length > 0) {
      clients = data;
    }
  } catch (err) {
    console.error("Error fetching clients:", err);
  }

  // Fallback to default placeholders if no dynamic clients exist yet
  const displayLogos = clients.length > 0 ? clients : defaultLogos;

  return (
    <section className="py-12 border-y border-[var(--color-border)] bg-[var(--color-background)] overflow-hidden">
      <Container>
        <AnimateOnScroll>
          <p className="text-center text-sm font-medium text-[var(--color-muted)] mb-8 uppercase tracking-widest">
            Trusted by innovative teams worldwide
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 lg:gap-x-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {displayLogos.map((logo) => (
              <div key={logo.id} className="flex items-center justify-center">
                {logo.logo_url ? (
                  <img 
                    src={logo.logo_url} 
                    alt={logo.name} 
                    className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" 
                  />
                ) : (
                  <svg className="h-8 text-[var(--color-primary)] opacity-70 hover:opacity-100 transition-opacity" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="40" rx="4" fill="currentColor" fillOpacity="0.05" />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold" letterSpacing="-0.02em">{logo.name}</text>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
