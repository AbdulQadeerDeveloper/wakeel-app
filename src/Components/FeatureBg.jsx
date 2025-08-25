/* eslint-disable quotes */
import './Feature.css';
import featureSection from '../Data/featureSection';

function FeatureBg() {
  return (
    <section id="featuresBg" className="featuresBg">
      {featureSection.map((feature) => (
        <div key={feature.id} className={`feature ${feature.id === 2 ? 'feature-reverse' : ''}`}>
          <div className="feature-detail">
            <div className="feature-text-box">
              <h1 className="global-heading">
                {feature.title}
                <span className="feature-black-heading">{feature.greenTitle}</span>
              </h1>
              <p className="global-paragraph">{feature.detail}</p>
            </div>
          </div>

          <div className="feature-img">
            <img src={feature.img} alt="chat feature" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default FeatureBg;
