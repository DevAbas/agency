import React from 'react';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';

type CaseStudy = {
  id: number;
  subtitle: string;
  title: string;
  img: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    subtitle: 'Curology',
    title: "A custom formula for your skin's unique needs",
    img: 'curology-min',
  },
  {
    id: 2,
    subtitle: 'Yourspace',
    title: 'Open space floor plans for you next venture',
    img: 'yourspace-min',
  },
  {
    id: 3,
    subtitle: 'Lumin',
    title: 'For your best look ever',
    img: 'lumin-min',
  },
];

const Cases: React.FC = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <CasesPrev />
          </div>
          <div className='cases-arrow next'>
            <CasesNext />
          </div>
        </div>
        <div className='row'>
          {caseStudies.map((caseItem: CaseStudy) => (
            <div key={caseItem.id} className='case'>
              <div className='case-details'>
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className='case-image'>
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
