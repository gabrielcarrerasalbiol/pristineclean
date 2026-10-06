interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="card group">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{description}</p>
      <div className="mt-4">
        <a href="#" className="btn-ghost text-sm text-emerald">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
