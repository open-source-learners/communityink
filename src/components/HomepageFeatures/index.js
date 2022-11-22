import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy Access',
    Svg: require('@site/static/img/studying_at_comfort.svg').default,
    description: (
      <>
        Free and easy access to materials and eduction resources all at your comfort.You can study anywhere, by anytime. Failure is not an option.
      </>
    ),
  },
  {
    title: 'Always Learn',
    Svg: require('@site/static/img/student_on_books.svg').default,
    description: (
      <>
       Leverage the use of Technology to equip yourself with neccessary skills and knowledge. All you need is all there on the internet, you just have to Type it.
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('@site/static/img/student_community.svg').default,
    description: (
      <>
        When you sign up to making a positive impact in your community, your story including your life experiences, skills and passions will provide inspiration to others.
      </>
    ),
  },
  // {
  //   title: 'Prioritize',
   //  Svg: require('@site/static/img/group_of_students.svg').default,
   //  description: (
   //    <>The opportunity to learn and the possibility to do so is something you can do at any point in your life. There is no deadline to learning
        
   //       Do work that matters. Choose to participate in initiatives that will positively impact the world and help make a difference in your community
   //    </>
  //   ),
  // },
  // {
  //   title: 'Community',
  //   Svg: require('@site/static/img/undraw_team_re_0bfe.svg').default,
  //   description: (
  //     <>
  //       When you sign on to making a positive impact in your community, your story including your life experiences, skills and passions will provide inspiration to others.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_community_re_cyrm.svg').default,
  //   description: (
  //     <>
  //       Do work that matters. Choose to participate in initiatives that will positively impact the world and help make a difference in your community
  //     </>
  //   ),
  // },
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
