function Instructionscreen({ handleInstructionClose }) {
  return (
    <div className="instruction-screen">
      <div className="close-button">
        <button onClick={handleInstructionClose} className="closebtn">
          <i
            class="fa-solid fa-square-xmark"
            style={{ fontSize: "20px", color: "white" }}
          ></i>
        </button>
      </div>
      <div className="instructions">
        <p
          style={{
            color: "white",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <i class="fa-solid fa-lightbulb" style={{ color: "yellow" }}></i>{" "}
          SWIPE LEFT OR RIGHT TO REVEAL ALL CARDS.
        </p>
        <p
          style={{
            color: "white",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <i class="fa-solid fa-lightbulb" style={{ color: "yellow" }}></i>{" "}
          SCROLL ON CARDS TO SEE ALL DETAILS.
        </p>
      </div>
    </div>
  );
}

export default Instructionscreen;
