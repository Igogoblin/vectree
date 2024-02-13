import Part from "./Part";

const Content = ({ p }) => {
  console.log("p : ", p);
  return (
    <>
      <Part part={p.part1} ex={p.exercises1} />
      <Part part={p.part2} ex={p.exercises2} />
      <Part part={p.part3} ex={p.exercises3} />
    </>
  );
};

export default Content;
