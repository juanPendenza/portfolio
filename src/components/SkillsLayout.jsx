import Skill from "./Skill";

// ESTE COMPONENTE MAQUETA EL CONTENEDOR QUE MUESTRA LAS CARDS DE LOS TRABAJOS
function SkillsLayout({ typeSkills }) {
  return (
    <div className="w-full flex flex-wrap justify-center lg:justify-start gap-x-14 gap-y-10">
      {/* MAPEO LAS SKILLS QUE ME PASAN COMO PROPS Y LAS MUESTRO */}
      {typeSkills.map((s, index) => (
        <div key={index}>
          <Skill skill={s} animation={true} />
        </div>
      ))}
    </div>
  );
}

export default SkillsLayout;
