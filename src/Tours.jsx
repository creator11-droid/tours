import Tour from "./Tour";

const Tours = ({ tour, removeTours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tour.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
