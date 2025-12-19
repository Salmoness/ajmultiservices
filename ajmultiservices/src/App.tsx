import { useState } from "react";
import { Phone, Mail, MapPin, Star, Menu, X, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { projects, reviews, services } from "@/data/data";

const QuoteSchema = z.object({
  name: z.string().min(2, "Your name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Tell us a bit about the project"),
});
type QuoteInput = z.infer<typeof QuoteSchema>;

function TopBar() {
  return (
    <div className="border-b border-[--line] bg-[#fff4e7]">
      <div className="container-edge flex flex-wrap items-center justify-between gap-3 py-2 text-sm">
        <div className="flex flex-wrap items-center gap-4 text-slate-600">
          <a className="inline-flex items-center gap-2 hover:text-[--ink]" href="tel:+14075550123"><Phone className="h-4 w-4" /> (407) 555-0123</a>
          <a className="inline-flex items-center gap-2 hover:text-[--ink]" href="mailto:quotes@ajmultiservices.com"><Mail className="h-4 w-4" /> quotes@ajmultiservices.com</a>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Orlando, FL</span>
        </div>
        <span className="text-slate-500">Free quotes • Licensed & insured</span>
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Gallery" },
    { href: "#reviews", label: "Reviews" },
    { href: "#quote", label: "Get a Quote" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-[--line] bg-[#fff4e7]/90 backdrop-blur">
      <div className=" flex items-center justify-between py-4 px-8">
        <a href="#" className="flex items-center gap-3">
          <div>
            <div className="text-3xl font-extrabold leading-none text-[--ink]">AJ Multiservices</div>
            <div className="text-sm tracking-widest text-slate-500 text-center">Interior & Exterior Painting</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(l => <a key={l.href} className="text-sm font-semibold text-slate-700 hover:text-[--ink]" href={l.href}>{l.label}</a>)}
        </nav>

        <div className="w-[250px]">
          <Button variant="accent" asChild className="hidden md:flex"><a href="#quote">Get a free quote</a></Button>
        </div>

        <button className="md:hidden rounded-[--radius] border border-[--line] p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[--line] bg-white">
          <div className="container-edge grid gap-3 py-4">
            {links.map(l => <a key={l.href} className="text-sm font-semibold text-slate-700" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
            <Button variant="accent" asChild><a href="#quote" onClick={() => setOpen(false)}>Get a free quote</a></Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    
    <section className="hero">
      <div className="hero-inner flex min-h-screen items-center justify-center py-20 ">
        <div className="grid w-full max-w-7xl gap-64 md:grid-cols-2 md:items-center">
          {/* Left: centered-ish text (like screenshot) */}
          <div className="text-center md:text-left md:max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
              Professional painters
            </p>

            <h1 className="mt-3 text-balance text-5xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-5xl">
              Quality painting for <br className="hidden sm:block" />
              homes & businesses
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-white/80 md:mx-0">
              A “done-right” crew for interior and exterior projects. We prep carefully,
              protect your space, and finish clean — so the result looks great and lasts.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button asChild className="bg-gray-400 text-white"><a href="#quote">Request a quote</a></Button>
              <Button variant="outline" asChild><a href="#services">View services</a></Button>
            </div>

            {/* Checklist */}
            <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              {[
                "Neat & respectful crew",
                "Surface prep + repairs",
                "High-quality materials",
                "Satisfaction walk-through",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm text-white/85">
                  <span className="mt-[5px] inline-block h-2 w-2 rounded-full bg-[#ffffff]" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: “Need pricing fast?” card */}
          <div className="m-auto w-full h-full bg-white/15 p-6 text-white/15 backdrop-blur-sm items-center">
            <p className="text-sm font-bold">Need pricing fast?</p>
            <p className="mt-1 text-sm text-white/75">
              Call or send a request—same-day response.
            </p>

            <div className="mt-5 grid gap-3">
              <a
                href="tel:+14075550123"
                className=" bg-[#ffffff] px-4 py-3 text-center text-sm font-semibold text-slate-900 hover:opacity-85"
              >
                Call (407) 555-0123
              </a>
              <a
                href="mailto:quotes@ajmultiservices.com"
                className=" border border-white/25 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                Email quotes@ajmultiservices.com
              </a>
            </div>

            <div className="mt-16 border border-white/20 bg-white/5 p-4">
              <p className="text-sm font-bold">Service area</p>
              <p className="mt-2 text-sm text-white/75">
                Orlando • Winter Park • Kissimmee • Lake Nona • Altamonte Springs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section bg-[#fff6e8]">
      <div className="container-edge-freewidth flex flex-col items-center px-4">
        <div className="max-w-3xl">
          <p className="kicker">Services</p>
          <h2 className="h2 mt-1">Painting services we offer</h2>
          <p className="p mt-3">From single rooms to full exteriors—our process is built around prep, protection, and clean finishing.</p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row w-full md:justify-center">
          {services.map((s) => {  
            const Icon = s.icon;
            return (
              <Card key={s.title} className="mx-12 my-6 flex-1 flex-row md:max-w-md p-4 shadow-md backdrop-blur-sm bg-amber-900/14 border-none">
                <div className="flex flex-1 h-full">
                  <CardHeader className="pb-8 px-6">   
                    <CardTitle>{s.title}</CardTitle>
                    <CardDescription >
                      <ul className="mt-3 grid space-y-3">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-[15px] leading-6 text-slate-600">
                            <Check className="mt-0.5 h-4 w-4 shrink-0" /> {b}
                          </li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardHeader>
                  <div className="flex flex-col justify-around items-center m-0 p-0">
                    <CardContent className="flex justify-center items-center m-0 p-0">
                      <Icon className=" h-32 w-32 text-[--brand]" />
                    </CardContent>
                    <CardContent className="pb-0">
                      <Button variant="link" className="bg-[#fff8e8]" asChild><a href="#quote">Request pricing</a></Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 ">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="">
              <div className="text-lg font-extrabold text-[--ink]">Ready to start?</div>
              <div className="text-sm text-slate-600">Send details and we'll follow up with next steps.</div>
            </div>
            <Button variant="accent" asChild className="ml-16"><a href="#quote">Get a free quote</a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section bg-[#362118] border-y border-[--line]">
      <div className="container-edge grid gap-10 md:grid-cols-2 md:items-center">
        <div className="text-[#fffcf2]">
          <p className="kicker">About</p>
          <h2 className="h2 mt-1">A simple, professional process</h2>
          <p className=" mt-3">
            We focus on doing the basics extremely well: prep the surface properly, protect floors and furniture, apply durable coatings,
            and finish with a clean site. You get a job that looks sharp—and stays sharp.
          </p>
          <div className="mt-6 grid gap-3">
            {["1) Quick estimate", "2) Prep & protect", "3) Paint & finish", "4) Final walk-through"].map((t) => (
              <div key={t} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-[--brand]" /> {t}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[--radius] border border-[--line] bg-white p-2 shadow-sm">
          <img src="/about.jpg" alt="Painting work in progress" className="h-[320px] w-full rounded-[--radius] object-cover" />
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section bg-[#fff6e8]">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="kicker">Gallery</p>
          <h2 className="h2 mt-1">Recent work</h2>
          <p className="p mt-3">Swap these placeholders with your real before/after photos.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <a key={p.id} href="#quote" className="group block">
              <div className="overflow-hidden rounded-[--radius] border border-[--line] bg-white shadow-sm">
                <img src={p.image} alt={p.title} className="h-40 w-full object-cover transition-transform group-hover:scale-[1.03]" />
                <div className="p-3 text-sm font-semibold text-slate-800">{p.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="section bg-[#fff6e8]">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="kicker">Reviews</p>
          <h2 className="h2 mt-1">What clients say</h2>
          <p className="p mt-3">A few highlights—add more as you collect them.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.id}>
              <CardHeader>
                <CardTitle className="text-base">{r.name}</CardTitle>
                <CardDescription>
                  <div className="mt-2 flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={"h-4 w-4 " + (i < r.rating ? "" : "opacity-30")} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-3 text-[15px] leading-7 text-slate-700">{r.text}</p>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<QuoteInput>({
    resolver: zodResolver(QuoteSchema),
  });

  const onSubmit = async (data: QuoteInput) => {
    console.log("Quote request:", data);
    await new Promise((r) => setTimeout(r, 500));
    alert("Thanks! We'll reach out shortly.");
    reset();
  };

  return (
    <section id="quote" className="section border-t border-[--line] bg-[#362118]">
      <div className="container-edge-freewidth w-[65%] grid gap-10 md:grid-cols-2">
        <div className="text-[#fffcf2] flex flex-col items-left justify-center">
          <p className="kicker">Get a free quote</p>
          <h2 className="text-5xl font-extrabold spacing mt-1">Tell us about your project</h2>
          <p className="text-md mt-4">Include room sizes, surfaces, and your timeline. If you have photos, mention it and we’ll request them.</p>
          <div className="mt-8 grid gap-3 text-sm">
            <a className="inline-flex items-center gap-2 hover:text-[--ink]" href="tel:+14075550123"><Phone className="h-4 w-4" /> (407) 555-0123</a>
            <a className="inline-flex items-center gap-2 hover:text-[--ink]" href="mailto:quotes@ajmultiservices.com"><Mail className="h-4 w-4" /> quotes@ajmultiservices.com</a>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Orlando, FL</span>
          </div>
        </div>

        <div className="rounded-[--radius] border border-[--line] bg-white p-6 shadow-sm">
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Name</label>
              <Input placeholder="Your name" {...register("name")} />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
              <Input type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Phone (optional)</label>
              <Input placeholder="(###) ###-####" {...register("phone")} />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Project details</label>
              <Textarea placeholder="Interior/exterior, surfaces, repairs needed, timeframe…" {...register("message")} />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>
            <Button type="submit" variant="accent" disabled={isSubmitting}>Send request</Button>
            <p className="text-xs text-slate-500">By submitting, you agree to be contacted about your project.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[--line] bg-[#fffcf2]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-[#63584b]">
        <div className="flex md:flex-row justify-between">
          <div>
            <div className="text-base font-extrabold text-[--ink]">AJ Multiservices</div>
            <p className="mt-2">Interior & Exterior Painting</p>
            <p className="mt-2">Central Florida</p>
          </div>
          <div className="hidden md:inline">
            <div className="font-bold text-[--ink]">Quick links</div>
            <div className="mt-2 grid gap-1">
              <a className="hover:text-[--ink]" href="#services">Services</a>
              <a className="hover:text-[--ink]" href="#work">Gallery</a>
              <a className="hover:text-[--ink]" href="#reviews">Reviews</a>
              <a className="hover:text-[--ink]" href="#quote">Get a Quote</a>
            </div>
          </div>
          <div>
            <div className="font-bold text-[--ink]">Contact</div>
            <div className="mt-2 grid gap-1">
              <a className="hover:text-[--ink]" href="tel:+14075550123">(407) 555-0123</a>
              <a className="hover:text-[--ink]" href="mailto:quotes@ajmultiservices.com">quotes@ajmultiservices.com</a>
              <span>Orlando, FL</span>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[--line] pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} AJ Multiservices. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <TopBar />
      <Nav />
      <Hero />
      <div className="h-16 bg-linear-to-r from-[#362118] to-[#a37313]">
      </div>
      <Services />
      <About />
      <Work />
      <Reviews />
      <Quote />
      <Footer />
    </div>
  );
}
