// COMPONENTE SKILL QUE MUESTRA CADA UNA DE LAS SKILLS
// VOY A TRABAJAR EN BASE A LAS PROPS
function Skill({ skill }) {
  return (
    <div className="w-12 lg:w-14 h-14 lg:h-16 flex flex-col items-center justify-center gap-1 transition-all duration-100 hover:scale-110">
      {/* IMG DE LA SKILL */}
      <img
        className="w-full h-full animate__animated animate__pulse animate__infinite"
        src={skill.img}
        alt={skill.name}
      />
      {/* NOMBRE DE LA SKILL */}
      <span className="text-black font-poppins text-sm dark:text-white transition">
        {skill.name}
      </span>
    </div>
  );
}

export default Skill;
