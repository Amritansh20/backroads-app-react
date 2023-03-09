import Title from "./Title";
import { serviceData } from "../data";

const Servives = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      {/* <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div> */}
      <div className="section-center services-center">
        {serviceData.map((data) => {
          return (
            <article className="service" key="data.id">
              <span className="service-icon">
                <i className={data.className}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{data.text}</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Servives;
