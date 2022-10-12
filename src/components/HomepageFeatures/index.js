import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_innovative_re_rr5i.svg').default,
    description: (
      <>
        If you're not volunteering your time, talents or resources to a cause to help in some way you have decided that you have nothing to give and that is false.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_community_re_cyrm.svg').default,
    description: (
      <>
        Do work that matters. Choose to participate in initiatives that will positively impact the world and help make a difference in your community
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('@site/static/img/undraw_team_re_0bfe.svg').default,
    description: (
      <>
        When you sign on to making a positive impact in your community, your story including your life experiences, skills and passions will provide inspiration to others.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
