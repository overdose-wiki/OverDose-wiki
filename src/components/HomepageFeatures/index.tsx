import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '专与药物本身',
    description: (
      <>
        我们不会在这里过多的讨论法律/伦理问题，我们会专注于提供药物药理、效果、副作用、危害等药物本身的科普
      </>
    ),
  },
  {
    title: '仅仅只是科普',
    description: (
      <>
        我们会尽量不带任何立场的科普药物，我们并不支持或反对药物过量，我们只会客观的呈现药物的效果、原理和危害。
      </>
    ),
  },
  {
    title: '社区驱动 用💚制作',
    description: (
      <>
        OverDose.wiki的所有文档以CC-BY-SA 4.0 协议发布发布，所有代码以GPLv3协议开源，
        我们不对的内容准确性做保证，但是我们随时欢迎您对我们内容的错误进行指正
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
