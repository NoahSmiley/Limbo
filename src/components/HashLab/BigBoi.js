const BigBoi = (props) => {
  let strings = [];
  console.log(props.val.words);

  for (let x in props.val.words) {
    if (props.val.words[x] >= 0) {
      strings.push(props.val.words[x].toString(2).padStart(32, "0"));
    } else {
      strings.push((~props.val.words[x]).toString(2).padStart(32, "0"));
    }
  }

  const zeros = "".padStart(Number(props.zeros), "0");
  console.log(strings);
  if (strings[0].slice(0, props.zeros) === zeros) {
    props.onSolve();
    return (
      <div style={{ margin: "50px" }}>
        <div style={{ margin: "0", display: "inline-block" }}>
          <div
            style={{
              margin: "0",
              display: "inline-block",
              color: "green",
              fontWeight: "bolder",
            }}
          >
            {strings[0].slice(0, props.zeros)}
          </div>
          {strings[0].slice(props.zeros)}
        </div>
        <p style={{ margin: "0" }}>{strings[1]}</p>
        <p style={{ margin: "0" }}>{strings[2]}</p>
        <p style={{ margin: "0" }}>{strings[3]}</p>
        <p style={{ margin: "0" }}>{strings[4]}</p>
        <p style={{ margin: "0" }}>{strings[5]}</p>
        <p style={{ margin: "0" }}>{strings[6]}</p>
        <p style={{ margin: "0" }}>{strings[7]}</p>
      </div>
    );
  }

  return (
    <div style={{ margin: "50px" }}>
      <p style={{ margin: "0" }}>{strings[0]}</p>
      <p style={{ margin: "0" }}>{strings[1]}</p>
      <p style={{ margin: "0" }}>{strings[2]}</p>
      <p style={{ margin: "0" }}>{strings[3]}</p>
      <p style={{ margin: "0" }}>{strings[4]}</p>
      <p style={{ margin: "0" }}>{strings[5]}</p>
      <p style={{ margin: "0" }}>{strings[6]}</p>
      <p style={{ margin: "0" }}>{strings[7]}</p>
    </div>
  );
};
export default BigBoi;
