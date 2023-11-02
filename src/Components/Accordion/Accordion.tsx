import React, { useState } from "react";

interface FAQ {
  title: string;
  description?: string;
  label?: string;
  extraInformation?: { name: string }[];
}

interface AccordionProps {
  faqs: FAQ[];
}

const Accordion: React.FC<AccordionProps> = ({ faqs }) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`rounded-[10px] bg-[#f0e8f6] text-[#352323] my-[1.375rem] cursor-pointer py-[10px] px-[15px] ${
              openAccordion === index ? "open" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <a className="underline font-bold font-['Museo'] text-[18px]">{faq.title}</a>
          </div>
          {openAccordion === index && (
            <div className="accordion-content border-[1px] border-[#8e52a0] py-[1em] px-[0.5em] rounded-[10px] mb-[1.5rem]">
              {faq.description && <p>{faq.description}</p>}
              {faq.label && <p className="bg-[#c8ebfa] p-2 my-5 rounded-[10px]">{faq.label}</p>}
              {faq.extraInformation && (
                <ul>
                  {faq.extraInformation.map((info, i) => (
                    <li key={i} className="font-bold before:w-[1rem] before:bg-[#8e52a0]">
                      {info.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
