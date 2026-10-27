import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, CarFront, Check, Clock3, Compass, Menu, MessageCircle, ShieldCheck, Smartphone, Users, Wallet, X, Zap } from "lucide-react";
import { brand, programmeConfig } from "./config/brand";
import { BrandLogo } from "./components/layout/BrandLogo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import serviceimage from "./assets/brand/Services.png";
import imageUrl from './assets/brand/testapp-pre.png';
import Footerlogo from './assets/brand/FooterLogo.tsx.png'
import { z } from "zod";
const heroPhoto = serviceimage;
const money = (n: number) => new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(Number.isFinite(n) ? n : 0);
const interests = ["Rider", "Driver", "Car Rental", "Luxury Car Rental", "Fleet Partner", "Investor", "Other"];
const categories = ["General Enquiry", "Rider Waitlist", "Driver Registration", "Car Rentals", "Luxury Car Rentals", "Fleet Financing", "Investor Enquiry", "Fleet Partnership", "Other"];
function Header() {
    const [open, setOpen] = useState(false);
    return <header className="site-header"><div className="header-inner"><BrandLogo />

    <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">

      <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink><NavLink onClick={() => setOpen(false)} to="/investors">Investors</NavLink><NavLink onClick={() => setOpen(false)} to="/contact">Make Enquiries</NavLink>

      <a className="mobile-waitlist" href="/about#waitlist" onClick={() => setOpen(false)}>Join the Waitlist <ArrowUpRight size={15}/></a>

    </nav>

    <a className="button button-small header-cta" href="/about#waitlist">Join the Waitlist <ArrowUpRight size={15}/></a>

    <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>

  </div></header>;
}
function Footer() {
    return <footer className="footer"><div className="container"><div className="footer-top"><div className="FooterLogoHolder"> 
      <div className="footer-logo">
        <img src={Footerlogo} alt="EzzyRids" />
      </div><p>{brand.slogan}<br />A new way to move through Lagos.</p></div><div className="footer-links"><div><b>Explore</b><Link to="/about">About EzzyRids</Link><a href="/about#services">Ride-hailing</a><a href="/contact?type=driver-registration">Driver registration</a><a href="/contact?type=luxury-car-rental">Luxury rentals</a></div><div><b>Get involved</b><Link to="/investors">Fleet financing</Link><a href="/contact?type=fleet-partnership">Fleet partnerships</a><a href="/about#waitlist">Join the waitlist</a><Link to="/contact">Contact us</Link></div><div><b>Contact</b><span>{brand.email}</span><span>{brand.phone}</span><span>{brand.address}</span></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ezzyrids Limited. All rights reserved.</span><div><a href="#privacy">Privacy notice</a><a href="#terms">Terms</a></div></div><p className="disclaimer">Programme information is proposed and illustrative only. Nothing on this website is an offer to invest or a guarantee of returns. All arrangements are subject to due diligence, legal review, applicable approvals and definitive written agreements.</p></div></footer>;
}
function Chatbot() {
    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState("Hi there! Ask me about EzzyRids, planned services, the waitlist, or our proposed fleet programme.");
    const faqs = ["What is EzzyRids?", "How can I register as a driver?", "How does fleet financing work?", "How can I join the waitlist?"];
    const respond = (q: string) => { setAnswer(q.includes("driver") ? "Driver registration and ride access are planned and will be subject to onboarding and verification. Share your interest through Make Enquiries." : q.includes("financing") ? "The fleet initiative is proposed. The illustrative calculator uses a proposed 50% total return over 24 months; terms are not guaranteed and remain subject to review and written agreements." : q.includes("waitlist") ? "Use the waitlist form on the About page. Submission becomes available once a backend endpoint is configured." : "EzzyRids is developing a mobility platform connecting riders, drivers, rentals and fleet partners across Lagos."); };
    return <><button className="chat-launch" onClick={() => setOpen(!open)} aria-label="Open EzzyRids FAQ assistant">{open ? <X /> : <MessageCircle />}<span>Ask Ezzy</span></button>{open && <section className="chat-panel" aria-label="EzzyRids FAQ assistant"><header><span className="chat-icon"><MessageCircle size={17}/></span><div><b>Ezzy assistant</b><small>Answers about our plans</small></div><button onClick={() => setOpen(false)} aria-label="Close chat"><X size={18}/></button></header><div className="chat-body"><p className="chat-message">{answer}</p><small>Popular questions</small>{faqs.map(q => <button className="faq-chip" key={q} onClick={() => respond(q)}>{q}<ArrowRight size={13}/></button>)}</div><form onSubmit={e => { e.preventDefault(); const d = new FormData(e.currentTarget); const q = String(d.get("question") || ""); respond(q); e.currentTarget.reset(); }} className="chat-input"><input name="question" placeholder="Ask a question..." aria-label="Ask a question"/><button aria-label="Send question"><ArrowRight size={17}/></button></form></section>}</>;
}
function Layout({ children }: {
    children: React.ReactNode;
}) { return <><Header /><main>{children}</main><Footer /><Chatbot /></>; }
function Eyebrow({ children }: {
    children: React.ReactNode;
}) { return <div className="eyebrow"><span /> {children}</div>; }
function SectionHeading({ label, title, copy }: {
    label: string;
    title: string;
    copy?: string;
}) { return <div className="section-heading"><Eyebrow>{label}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</div>; }

function AppPreview() {

  return (
    <div className="device-stage">
      <div className="device-glow" aria-hidden="true" />

      <div className="image-preview">
        <img
          src={imageUrl}
          alt="EzzyRids mobile app interface"
          className="app-preview-image"
          loading="eager"
        />
      </div>

    </div>
  );
}
function AboutPage() {
    return <Layout><section className="hero container"><div className="hero-copy"><Eyebrow>INTRODUCING EZZYRIDS</Eyebrow><h1>Ride Easy<br /><span>With</span><br />Ezzyrids.</h1><p>EzzyRids is developing a mobility platform designed to connect riders with drivers, make everyday journeys more convenient, and create opportunities for vehicle owners and mobility partners.</p><div className="hero-actions"><a className="button" href="#waitlist">Join the Waitlist <ArrowRight size={17}/></a><a className="text-link" href="#services">Explore our services <ArrowDown size={16}/></a></div><span className="hero-slogan"><span className="slogan-line"/> Ride easy with Ezzyrids.</span></div><AppPreview /><div className="hero-caption"><span className="caption-dot"/> Building a more connected way to move in Lagos</div></section>

 <section className="trust-strip"><div className="container trust-inner"><span>DESIGNED FOR LAGOS</span><i /><span>TECHNOLOGY-ENABLED</span><i /><span>BUILT AROUND PEOPLE</span><i /><span>MADE FOR WHAT'S NEXT</span></div></section>

 <section className="section container" id="vision"><SectionHeading label="A CONNECTED ECOSYSTEM" title="More than a ride. A smarter mobility experience." copy="EzzyRids is taking shape around the people and partnerships that keep a city moving. One platform, with room for every journey."/><div className="audience-grid"><article className="audience-card"><div className="card-icon"><Users /></div><span className="card-number">01 / RIDERS</span><h3>Move on your terms.</h3><p>Request rides, explore available categories, review fare estimates and pay through supported methods.</p><ArrowUpRight className="card-arrow"/></article><article className="audience-card audience-lime"><div className="card-icon"><CarFront /></div><span className="card-number">02 / DRIVERS</span><h3>Build your next chapter.</h3><p>Register your interest, complete onboarding and manage eligible trips through a structured platform.</p><ArrowUpRight className="card-arrow"/></article><article className="audience-card audience-dark"><div className="card-icon"><Compass /></div><span className="card-number">03 / PARTNERS</span><h3>Help move the city.</h3><p>Vehicle owners and mobility partners can support fleet availability, operations and growth.</p><ArrowUpRight className="card-arrow"/></article></div></section>

 <section className="section services-section" id="services"><div className="container"><SectionHeading label="WHAT WE'RE BUILDING" title="Mobility services designed around you." copy="A thoughtful set of services, developed to make getting there—and getting involved—feel simpler."/><div className="service-layout"><div className="service-list">{[["01", "Ride-hailing", "Planned ride requests, driver matching, fare estimates, trip updates and payment options."], ["02", "Driver registration", "An entry point for drivers to share their details and complete required onboarding."], ["03", "Car rentals", "Enquiry-based rental options for daily, multi-day, business and family travel."], ["04", "Luxury rentals", "Illustrative premium sedans, executive SUVs and chauffeur-driven transport."], ["05", "Digital payments", "Planned secure payment flows, receipts and transaction records through an approved provider."], ["06", "Fleet partnerships", "A proposed initiative exploring vehicle acquisition and deployment with partners."]].map(([n, t, d]) => <article className="service-row" key={n}><span className="service-no">{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={18}/></article>)}<Link className="button service-cta" to="/contact">Talk to our team <ArrowRight size={16}/></Link></div><div className="service-visual" style={{ backgroundImage: `linear-gradient(180deg, transparent 25%, rgba(5,25,19,.8)), url(${heroPhoto})` }}><div className="image-tag"><span className="caption-dot"/> THE JOURNEY, REIMAGINED</div><div className="visual-caption"><span>Built for the pace of</span><b>Lagos life.</b><small>Illustrative vehicle imagery</small></div><div className="visual-badge"><Zap size={16}/><span>Everyday mobility,<br /><b>thoughtfully connected.</b></span></div></div></div></div></section>

 <section className="section steps-section"><div className="container"><SectionHeading label="HOW IT COULD WORK" title="From booking to arrival, made simpler." copy="A clear, considered experience for riders and drivers. Product functionality is planned and depends on future platform implementation."/><div className="steps-grid">{[["01", "Request a ride", "Choose a pickup, destination and ride category that works for you."], ["02", "Connect with a driver", "An available, eligible driver can receive and accept your request."], ["03", "Enjoy your journey", "Follow ride progress and pay using an integrated supported method."]].map(([n, t, d], i) => <article className="step-card" key={n}><div className="step-top"><span>{n}</span>{i === 0 ? <Smartphone /> : i === 1 ? <Users /> : <Compass />}</div><h3>{t}</h3><p>{d}</p>{i < 2 && <div className="step-connector"/>}</article>)}</div><div className="driver-note"><div className="driver-note-icon"><ShieldCheck /></div><div><b>For drivers: a structured path to the road.</b><p>Register your interest, submit required information, complete applicable onboarding and verification, then manage eligible requests.</p></div><Link to="/contact?type=driver-registration" className="text-link">Driver enquiries <ArrowRight size={15}/></Link></div></div></section>

 <section className="section goals-section"><div className="container goals-wrap"><div className="goals-intro"><Eyebrow>OUR MISSION</Eyebrow><h2>Building a connected mobility ecosystem for Lagos.</h2><p>EzzyRids aims to make urban mobility more accessible, convenient and structured by connecting riders, drivers, vehicle owners and mobility partners through a technology-enabled platform.</p><a href="#waitlist" className="button button-lime">Be part of what's next <ArrowRight size={16}/></a><div className="goal-orbit"><span className="orbit orbit-one"/><span className="orbit orbit-two"/><span className="orbit-core"><Compass /></span><span className="orbit-label orbit-label-one">Riders</span><span className="orbit-label orbit-label-two">Drivers</span><span className="orbit-label orbit-label-three">Partners</span></div></div><div className="goals-list">{[["01", "Improve access to mobility", "Connect riders with drivers and appropriate transportation options."], ["02", "Create opportunities for drivers", "Build a structured network for eligible drivers and trip management."], ["03", "Expand vehicle availability", "Explore partnerships and proposed financing for approved vehicles."], ["04", "Support better rentals", "Make rental enquiries easier for people and organisations."], ["05", "Promote transparent transactions", "Build toward clear payment records and documented processes."], ["06", "Build for the long term", "Develop a technology foundation that can evolve as the business grows."]].map(([n, t, d]) => <article className="goal-row" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={16}/></article>)}</div></div></section>

 <section className="fleet-banner"><div className="container fleet-inner"><div><Eyebrow>FLEET FINANCING · PROPOSED</Eyebrow><h2>Help us build the fleet<br />behind the journey.</h2><p>Explore a proposed financing initiative intended to support approved vehicle acquisition and deployment in Lagos.</p><Link to="/investors" className="button button-lime">Explore the investor programme <ArrowRight size={16}/></Link></div><div className="fleet-stat"><span className="fleet-stat-icon"><Clock3 /></span><b>24</b><span>proposed months</span><small>Illustrative programme duration, subject to review and written agreement.</small><div className="fleet-accent"/></div></div></section>

 <WaitlistSection />

 </Layout>;
}
function ApiForm({ kind, initialType }: {
    kind: "waitlist" | "contact" | "investor";
    initialType?: string;
}) {
    const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [notice, setNotice] = useState("");
    const schema = z.object({ name: z.string().trim().min(2, "Enter your full name."), email: z.string().trim().email("Enter a valid email address."), phone: z.string().optional(), interest: z.string().optional(), type: z.string().optional(), subject: z.string().optional(), message: z.string().optional(), amount: z.string().optional(), funds: z.string().optional(), investorType: z.string().optional(), organisation: z.string().optional(), termsAcknowledged: z.boolean().optional(), consent: z.boolean().optional() }).superRefine((data, ctx) => {
        const issue = (path: keyof typeof data, message: string) => ctx.addIssue({ code: "custom", path: [path], message });
        if (kind === "waitlist") {
            if (!data.interest)
                issue("interest", "Choose an area of interest.");
            if (!data.consent)
                issue("consent", "Please agree to be contacted.");
        }
        if (kind === "contact") {
            if (!data.subject?.trim())
                issue("subject", "Enter a subject.");
            if (!data.message?.trim())
                issue("message", "Enter a message.");
            if (!data.consent)
                issue("consent", "Please agree to be contacted.");
        }
        if (kind === "investor") {
            if (!data.amount || !Number.isFinite(Number(data.amount)) || Number(data.amount) <= 0)
                issue("amount", "Enter a positive, finite amount.");
            if (!data.funds)
                issue("funds", "Select a source of funds.");
            if (!data.termsAcknowledged)
                issue("termsAcknowledged", "Please acknowledge the proposed terms.");
            if (!data.consent)
                issue("consent", "Please agree to be contacted.");
        }
    });
    type FormValues = z.infer<typeof schema>;
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { type: initialType || "General Enquiry" } });
    const submit = handleSubmit(async (values) => { const endpoint = import.meta.env.VITE_API_BASE_URL; if (!endpoint) {
        setState("error");
        setNotice("Online submissions are not connected yet. Please check back soon.");
        return;
    } setState("loading"); try {
        const response = await fetch(`${endpoint.replace(/\/+$/, "")}/${kind}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
        if (!response.ok)
            throw new Error("Request failed");
        setState("success");
        setNotice("Thank you. Your enquiry has been received.");
        reset();
    }
    catch {
        setState("error");
        setNotice("We couldn't submit your enquiry. Please try again later.");
    } });
    const error = (name: keyof FormValues) => <span className="field-error" role="alert">{errors[name]?.message}</span>;
    return <form className="form-card" onSubmit={submit} noValidate><div className="form-fields"><label>Full name<input {...register("name")} placeholder="Your name" autoComplete="name"/>{error("name")}</label><label>Email address<input {...register("email")} type="email" placeholder="you@example.com" autoComplete="email"/>{error("email")}</label><label>Phone number <span>(optional)</span><input {...register("phone")} type="tel" placeholder="+234" autoComplete="tel"/></label>{kind === "waitlist" && <label>I'm interested in<select {...register("interest")} defaultValue=""><option value="" disabled>Select an area</option>{interests.map(x => <option key={x}>{x}</option>)}</select>{error("interest")}</label>}{kind === "contact" && <><label>Enquiry category<select {...register("type")} defaultValue={initialType || "General Enquiry"}>{categories.map(x => <option key={x}>{x}</option>)}</select></label><label>Subject<input {...register("subject")} placeholder="How can we help?"/>{error("subject")}</label><label className="full-field">Message<textarea {...register("message")} rows={4} placeholder="Tell us a little more..."/>{error("message")}</label></>}{kind === "investor" && <><label>Proposed financing amount<input {...register("amount")} type="number" min="1" placeholder="e.g. 1,000,000"/>{error("amount")}</label><label>Source of funds<select {...register("funds")} defaultValue=""><option value="" disabled>Select source</option>{["Personal savings", "Business income", "Investment proceeds", "Corporate funds", "Other"].map(x => <option key={x}>{x}</option>)}</select>{error("funds")}</label><label>Investor type<select {...register("investorType")}><option>Individual</option><option>Organisation</option></select></label><label>Organisation name <span>(if applicable)</span><input {...register("organisation")}/></label><label className="full-field">Message<textarea {...register("message")} rows={3} placeholder="Anything you'd like us to know?"/></label><label className="check-field full-field"><input type="checkbox" {...register("termsAcknowledged")}/> I understand these are proposed terms and have read the privacy notice.{error("termsAcknowledged")}</label></>}{kind !== "contact" && kind !== "investor" && <label className="check-field full-field"><input type="checkbox" {...register("consent")}/> I agree to be contacted about EzzyRids and understand my information will be handled according to the privacy notice.{error("consent")}</label>}{kind === "contact" && <label className="check-field full-field"><input type="checkbox" {...register("consent")}/> I agree to be contacted about this enquiry.{error("consent")}</label>}{kind === "investor" && <label className="check-field full-field"><input type="checkbox" {...register("consent")}/> I agree to be contacted about my enquiry.{error("consent")}</label>}</div><button className="button form-submit" disabled={state === "loading"}>{state === "loading" ? "Sending…" : kind === "investor" ? "Submit investor enquiry" : "Send my enquiry"}{state !== "loading" && <ArrowRight size={16}/>}</button>{notice && <p className={`form-notice ${state}`} role="status">{state === "success" && <Check size={16}/>} {notice}</p>}<p className="form-privacy"><ShieldCheck size={14}/> Your information is used only to respond to your enquiry.</p></form>;
}
function WaitlistSection() { return <section className="section waitlist-section" id="waitlist"><div className="container waitlist-layout"><div className="waitlist-copy"><Eyebrow>THE ROAD AHEAD</Eyebrow><h2>Be part of the EzzyRids journey.</h2><p>Tell us what you're interested in and we'll keep you in the loop as the platform takes shape.</p><div className="waitlist-perks"><span><Check size={15}/> Choose the updates that matter to you</span><span><Check size={15}/> No commitment, just interest</span></div><div className="waitlist-art"><span className="waitlist-ring ring-one"/><span className="waitlist-ring ring-two"/><CarFront /></div></div><div><ApiForm kind="waitlist"/></div></div></section>; }
function InvestorsPage() {
    const [amount, setAmount] = useState("1000000");
    const principal = Number(amount) || 0;
    const proposed = principal * programmeConfig.returnRate;
    const total = principal + proposed;
    const monthly = total / programmeConfig.durationMonths;
    return <Layout><section className="investor-hero"><div className="container investor-hero-grid"><div><Eyebrow>GROW WITH THE JOURNEY</Eyebrow><h1>Invest in the future of mobility with EzzyRids.</h1><p>EzzyRids is developing a mobility platform to connect riders and drivers, support vehicle rentals and build partnerships that can help expand access to transportation in Lagos.</p><div className="hero-actions"><a href="#calculator" className="button button-lime">Calculate a proposed return <ArrowRight size={16}/></a><a href="#enquiry" className="button button-outline-light">Express investor interest</a></div><span className="investor-legal"><ShieldCheck size={15}/> Proposed initiative · Returns are not guaranteed</span></div><div className="ecosystem-visual"><div className="eco-center"><span className="brand-mark">e</span><b>EzzyRids</b><small>Mobility platform</small></div><div className="eco-node eco-rider"><Users /><span>Riders</span></div><div className="eco-node eco-driver"><CarFront /><span>Drivers</span></div><div className="eco-node eco-rentals"><Compass /><span>Rentals</span></div><div className="eco-node eco-fleet"><Wallet /><span>Fleet</span></div><span className="eco-orbit eco-one"/><span className="eco-orbit eco-two"/></div></div></section>

 <section className="section container"><SectionHeading label="THE OPPORTUNITY" title="One platform. Several paths to grow." copy="Our long-term vision brings together mobility services and partnerships that can reinforce one another as the business develops."/><div className="opportunity-grid">{[["01", "Ride-hailing platform", "A planned booking and trip-management experience connecting riders and drivers."], ["02", "Car rentals", "Enquiry-led rental options for personal, business and premium travel."], ["03", "Driver & fleet partnerships", "A growing network of drivers and vehicle partners, subject to operating requirements."], ["04", "Fleet financing initiative", "A proposed structure intended to help acquire and deploy approved vehicles."]].map(([n, t, d]) => <article className="opportunity-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight /></article>)}</div><p className="stage-note">EzzyRids is in development. Functionality and commercial opportunities described here are planned, not claims of current operations or performance.</p></section>

 <section className="section programme-section"><div className="container programme-layout"><div><Eyebrow>PROPOSED PROGRAMME</Eyebrow><h2>A considered approach to fleet growth.</h2><p>The initiative is being explored to support approved vehicle acquisitions and their deployment within the developing mobility ecosystem.</p><ul className="programme-list"><li><Check /> Vehicle acquisition and deployment</li><li><Check /> Structured proposed repayments</li><li><Check /> Written terms and responsibilities</li><li><Check /> Progress reporting under agreed terms</li></ul><p className="programme-disclaimer">All terms below are proposed and subject to due diligence, legal review, applicable approvals and definitive written agreements.</p></div><div className="programme-card"><div className="programme-card-head"><span>ILLUSTRATIVE PROGRAMME OVERVIEW</span><span className="proposed-pill">PROPOSED</span></div><div className="programme-highlight"><small>Proposed total return</small><strong>50%</strong><span>over the full programme period</span></div><div className="programme-terms"><div><span>Duration</span><b>24 months</b></div><div><span>Payment structure</span><b>Monthly instalments</b></div><div><span>Intended purpose</span><b>Approved vehicle deployment</b></div><div><span>Documentation</span><b>Written agreements</b></div></div><Link to="/contact?type=fleet-financing" className="text-link">Discuss the proposed programme <ArrowRight size={16}/></Link></div></div></section>

 <section className="section calculator-section" id="calculator"><div className="container calculator-layout"><div><Eyebrow>ILLUSTRATIVE TOOL</Eyebrow><h2>Explore a proposed return.</h2><p>Adjust the amount to see an illustrative calculation based on a proposed 50% total return over 24 months.</p><div className="calculator-caveat"><ShieldCheck /><span>This is not a guaranteed return or an offer to accept investment funds. Actual terms, if any, will depend on the final legal and contractual structure.</span></div></div><div className="calculator-card"><label htmlFor="calc-amount">Proposed financing amount <span>NGN</span></label><div className="amount-input"><span>₦</span><input id="calc-amount" type="number" min="1" step="10000" value={amount} onChange={e => setAmount(e.target.value)} aria-label="Proposed financing amount in naira"/></div><div className="amount-range"><span>Enter any positive amount</span><button onClick={() => setAmount("1000000")} type="button">Reset</button></div><div className="calc-breakdown"><div><span>Principal amount</span><b>{money(principal)}</b></div><div><span>Proposed total return <small>(50%)</small></span><b className="green-value">{money(proposed)}</b></div><div className="calc-total"><span>Total proposed repayment</span><b>{money(total)}</b></div></div><div className="monthly-result"><span><Clock3 /> Indicative monthly instalment <small>× 24 months</small></span><b>{money(monthly)}</b></div><p className="calculator-example">Illustration only. Not an investment offer, commitment or guarantee of repayment.</p></div></div></section>

 <section className="section risk-section"><div className="container"><SectionHeading label="READ BEFORE YOU ENQUIRE" title="Clear eyes. Informed decisions." copy="Any future participation would involve risks and would require formal agreements. Please consider the following carefully."/><div className="risk-grid">{[["01", "Terms are proposed", "The initiative and its terms are exploratory and may change after review."], ["02", "Returns are not guaranteed", "The proposed 50% return is illustrative only. Capital repayment depends on final structure and programme performance."], ["03", "Independent advice matters", "Investors should assess relevant risks and obtain independent professional advice where appropriate."], ["04", "An enquiry is not an agreement", "An enquiry does not constitute acceptance, a commitment or an investment agreement."]].map(([n, t, d]) => <article className="risk-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

 <section className="section investor-enquiry" id="enquiry"><div className="container enquiry-layout"><div><Eyebrow>START A CONVERSATION</Eyebrow><h2>Interested in the journey?</h2><p>Share your interest with us. This form creates an enquiry only; it does not accept funds or create an investment commitment.</p><div className="enquiry-note"><ShieldCheck />Please do not include bank details, passwords, OTPs or sensitive financial documents.</div></div><ApiForm kind="investor"/></div></section></Layout>;
}
function ContactPage() { const loc = useLocation(); const search = new URLSearchParams(loc.search); const raw = search.get("type") || ""; const title = categories.find(c => c.toLowerCase().replaceAll(" ", "-").replace("enquiry", "enquiry").replace("rentals", "rental") == raw) || categories.find(c => c.toLowerCase().replaceAll(" ", "-") == raw) || "General Enquiry"; return <Layout><section className="contact-hero"><div className="container contact-hero-inner"><Eyebrow>WE'RE LISTENING</Eyebrow><h1>Let's talk about<br /><span>mobility.</span></h1><p>Whether you are interested in booking rides, joining as a driver, exploring car rentals or discussing fleet partnerships, we would like to hear from you.</p><div className="contact-highlight"><span className="contact-highlight-icon"><MessageCircle /></span><span><b>A conversation is a good place to start.</b><small>Choose a topic and tell us what's on your mind.</small></span></div><div className="contact-decor"><span /><span /><span /></div></div></section><section className="section contact-form-section"><div className="container contact-layout"><div><Eyebrow>MAKE AN ENQUIRY</Eyebrow><h2>How can we help?</h2><p>We welcome questions from riders, drivers, rental customers, investors and mobility partners.</p><div className="contact-categories"><span>Rider waitlist</span><span>Driver registration</span><span>Car rentals</span><span>Fleet partnerships</span><span>Investor enquiries</span></div></div><div><h3 className="form-title">Send an enquiry <span>{title}</span></h3><ApiForm kind="contact" initialType={title}/></div></div></section></Layout>; }
function AdminPage() { const [authed, setAuthed] = useState(false); return <div className="admin-page"><div className="admin-top"><BrandLogo /><span className="dev-badge">DEVELOPMENT MOCK · NO LIVE DATA</span><Link to="/about" className="text-link">View public site <ArrowUpRight size={15}/></Link></div>{!authed ? <div className="admin-login"><div className="card-icon"><ShieldCheck /></div><h1>Admin sign in</h1><p>Authentication requires backend configuration. Development preview only.</p><form onSubmit={e => { e.preventDefault(); setAuthed(true); }}><label>Email<input type="email" required placeholder="admin@example.com"/></label><label>Password<input type="password" required placeholder="••••••••"/></label><button className="button">Continue to demo dashboard <ArrowRight size={16}/></button></form><small>This local preview does not authenticate users or protect data.</small></div> : <div className="admin-dashboard"><Eyebrow>INTERNAL MANAGEMENT · DEVELOPMENT MOCK</Eyebrow><h1>Dashboard overview</h1><p>Example layout only. No production data is connected.</p><div className="admin-stats">{[["Waitlist", "0"], ["Open enquiries", "0"], ["Investor enquiries", "0"], ["Follow-ups due", "0"]].map(([t, n]) => <article key={t}><span>{t}</span><b>{n}</b><small>Mock data</small></article>)}</div><div className="admin-tables"><section><h2>Enquiry management</h2><div className="admin-tools"><input placeholder="Search enquiries" aria-label="Search enquiries"/><select aria-label="Filter by status"><option>All statuses</option><option>New</option><option>In follow-up</option><option>Resolved</option></select></div><p>No enquiries in development preview.</p></section><section><h2>Programme settings</h2><label>Proposed return <input value="50%" readOnly/></label><label>Proposed duration <input value="24 months" readOnly/></label><p>Settings management requires a secured backend.</p></section></div></div>}</div>; }
function NotFound() { return <Layout><section className="not-found container"><Eyebrow>PAGE NOT FOUND</Eyebrow><h1>Looks like this road ends here.</h1><Link to="/about" className="button">Back to EzzyRids <ArrowRight /></Link></section></Layout>; }
export default function App() { const location = useLocation(); if (location.pathname === "/admin" || location.pathname.startsWith("/admin/"))
    return <AdminPage />; if (location.pathname === "/investors")
    return <InvestorsPage />; if (location.pathname === "/contact")
    return <ContactPage />; if (location.pathname === "/about" || location.pathname === "/")
    return <AboutPage />; return <NotFound />; }
