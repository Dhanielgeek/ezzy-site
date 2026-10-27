import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CarFront,
  Check,
  ClipboardCheck,
  FileSearch,
  FileText,
  BadgeCheck,
  ShieldCheck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import "./vehicle.css";

const benefits = [
  { icon: Wallet, title: "Agreed weekly owner payments", copy: "A fixed weekly payment, agreed individually in your written agreement." },
  { icon: Users, title: "Professional vehicle and driver management", copy: "We coordinate operations, driver management and approved transport use." },
  { icon: Wrench, title: "Transparent maintenance records", copy: "Maintenance is recorded clearly, with cost-sharing arrangements set out in writing." },
  { icon: BarChart3, title: "Regular performance statements", copy: "Receive vehicle performance and payment statements on a regular basis." },
  { icon: FileText, title: "Clear contractual terms", copy: "Defined terms and vehicle return procedures, so you know where you stand." },
];

const checks = [
  { icon: FileSearch, label: "Inspection" },
  { icon: ClipboardCheck, label: "Documentation checks" },
  { icon: CarFront, label: "Commercial suitability" },
  { icon: BadgeCheck, label: "Approval" },
];

export function VehiclePartnership() {
  return (
    <section className="vp-section" id="vehicle-partnership">
      <div className="container">
        <div className="vp-layout">
          {/* Left: pitch */}
          <div className="vp-copy">
            <div className="eyebrow">
              <span /> VEHICLE PARTNERSHIP PROGRAMME
            </div>
            <h2>
              Let your car <span>work for you.</span>
            </h2>
            <p className="vp-question">Do you own a sedan, SUV or other eligible vehicle in Lagos?</p>
            <p>
              Ezzyrids Limited is inviting qualified vehicle owners to apply to our Vehicle Partnership Programme. Eligible
              vehicles can be placed under our fleet management and approved transport operations. Owners receive an agreed
              fixed weekly payment, while Ezzyrids coordinates vehicle operations, driver management and maintenance under a
              written agreement.
            </p>

            <div className="vp-actions">
              <Link to="/contact?type=vehicle-partnership" className="button">
                Request the application form <ArrowRight size={16} />
              </Link>
              <Link to="/contact?type=vehicle-partnership" className="text-link">
                Ask about partnership terms <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className="vp-checks" aria-label="Every vehicle is subject to">
              <small>EVERY VEHICLE IS SUBJECT TO</small>
              <ul>
                {checks.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Icon size={15} /> {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: benefits card */}
          <aside className="vp-card" aria-label="Programme benefits">
            <div className="vp-card-head">
              <span>WHAT OWNERS GET</span>
              <span className="vp-pill">LAGOS</span>
            </div>

            <ul className="vp-benefits">
              {benefits.map(({ icon: Icon, title, copy }) => (
                <li key={title}>
                  <span className="vp-benefit-icon">
                    <Icon size={18} />
                  </span>
                  <div>
                    <b>{title}</b>
                    <p>{copy}</p>
                  </div>
                  <Check className="vp-tick" size={15} />
                </li>
              ))}
            </ul>

            <div className="vp-notice" role="note">
              <ShieldCheck size={17} />
              <p>
                <b>Important:</b> Weekly payments, vehicle acceptance and contract terms are agreed individually.
                Registration does not guarantee acceptance or a particular income.
              </p>
            </div>
          </aside>
        </div>

        <div className="vp-footer-strip">
          <span className="vp-slogan-line" />
          <span>Interested? Contact Ezzyrids Limited to request the vehicle application form and partnership terms.</span>
          <em>Ride easy with Ezzyrids.</em>
        </div>
      </div>
    </section>
  );
}