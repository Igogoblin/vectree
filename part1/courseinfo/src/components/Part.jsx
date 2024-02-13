const Part = (p) => {
  console.log(p.part);
  return (
    <p>
      {p.part}
      {p.ex}
    </p>
  );
};
export default Part;
