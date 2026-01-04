'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';

const team = [
  {
    name: 'John Smith',
    role: 'Founder & CEO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJdcwVlmCiWCtdsdR76rv1pNhazVpbt_6_N9NY5b1R5HoG3GJUDjoWF5yIY_rLouAfg6JFJ3jQCNTSstAaOpVSXsMB7YDuh5SXHilY0329-XC96Z2RvbfV65vzTELnT96mPnKkfm5KWzJvJtLj6AE6POTbUeQ6z_W8-8s7GRUkmQsfL6bc71WarI1mRDa_OgLKRY7hRxiTBMEnKxVUlIPZjZ4Z67_2AewYfislowJPvOEj20GcmeyzViWXwknzQ32qbIkP-zBHiXTt',
  },
  {
    name: 'Sarah Johnson',
    role: 'Creative Director',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOjcuAcf85ILmWapyDjOVlPqiwWud05Vc_4xRBm_B-ZhYCPsQGiU18jd0zo4HjO9wnL91tMQmg129wzUBDHPYMl-DsE21qDHr1WKv08WdpDSV3njpXjQllFe2pgxlw2xOAhVkMGYOYWttTQwyrutqmkfSMRLuri7Or4dQxIBQ9qbOqpfrRSUa9otTBAct6XwxHSUFJDE2vOKF9aVw6FwUj8VnfhdeBXyzpO3aQzHJzDEm8-G8tq7jL-fCVXMzeyZWwK1cePKPDeDH-',
  },
  {
    name: 'Mike Chen',
    role: 'Head of Product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5GLiAqB4X2Wp62dGwOoUPaAyrpVMyvBPWCJnzA3JKPD8DatgAC39HtFc166PdtFCEx-iPN1O3AeQfxRH4BAMBB5koXYKbVMIjgX7W76cNp8z8ta_b8yiFnt6CCk9AacF8sxYEzY5IOdUaqv_vj7vplQs_699nr0Oat_i71viiDyvfw9cc1VuwQkiLIX7XswKg4KmPT7JA_FyKYl2yiaI17YG4np--_RWuIAyA62eeS_BgVOD59PTS3yFz2-wwWFWKRlprDJN0rijH',
  },
  {
    name: 'Emily Davis',
    role: 'Customer Experience',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJdcwVlmCiWCtdsdR76rv1pNhazVpbt_6_N9NY5b1R5HoG3GJUDjoWF5yIY_rLouAfg6JFJ3jQCNTSstAaOpVSXsMB7YDuh5SXHilY0329-XC96Z2RvbfV65vzTELnT96mPnKkfm5KWzJvJtLj6AE6POTbUeQ6z_W8-8s7GRUkmQsfL6bc71WarI1mRDa_OgLKRY7hRxiTBMEnKxVUlIPZjZ4Z67_2AewYfislowJPvOEj20GcmeyzViWXwknzQ32qbIkP-zBHiXTt',
  },
];

export default function AboutTeam() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-wider text-sm font-semibold block mb-2">
              The People Behind
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Meet Our Team
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} animation="fade-up" delay={index * 100}>
              <div className="group text-center">
                <div className="relative mb-4 rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
