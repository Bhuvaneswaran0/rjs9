function StudentCard(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={props.image}
          className="card-img-top"
          alt={props.name}
          style={{
            height:"300px",
            width:"100%"
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p><b>Name:</b> {props.name}</p>
          <p><b>Reg No:</b> {props.regno}</p>
          <p><b>Department:</b> {props.department}</p>
          <p><b>Marks:</b> {props.marks}</p>
        </div>
      </div>
    </div>
  );
}

// Create the React Root.
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Render three StudentCard components.
root.render(
  <div className="container mt-4">
    <div className="row">

      <StudentCard
        image="student1.png.webp"
        name="Ramesh"
        regno="1U24CA034"
        department="BCA"
        marks="92"
      />

      <StudentCard
        image="student2.png"
        name="Hari"
        regno="1U24CA055"
        department="BCA"
        marks="88"
      />

      <StudentCard
        image="student3.png"
        name="Bava"
        regno="1U24CA067"
        department="BCA"
        marks="95"
      />

    </div>
  </div>
);
