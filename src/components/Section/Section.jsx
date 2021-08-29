import s from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <section className={s.sectionConteiner}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
