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
        image="image1.png"
        name="Akash"
        regno="1U24CA008"
        department="BCA"
        marks="92"
      />

      <StudentCard
        image="image2.png"
        name="Harish"
        regno="1U24CA036"
        department="BCA"
        marks="88"
      />

      <StudentCard
        image="image3.png"
        name="Ugi"
        regno="1U24CA037"
        department="BCA"
        marks="95"
      />

    </div>
  </div>
);
