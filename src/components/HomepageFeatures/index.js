import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import hanmigpt from '../../../static/img/hanmigpt.png';
import docgpt from '../../../static/img/docgpt.png';
import google from '../../../static/img/google.png';
import voicegpt from '../../../static/img/voicegpt.png';

const FeatureList = [
  {
    title:(
      <a href= "../../../docs/GPT/GPT-4/" target="_self" rel="noopener noreferrer">
      GPT-4
      </a>       
    ),  
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    Img: hanmigpt,
    description: (
      <>
        <p>HITs 아이디 기반 로그인 필요</p>
        <p >GPT-4 모델 기반 답변 생성 가능</p>
        <p>구성원 질문,답변 데이터를 당사가 보유한 별도 DB에 축적</p>
        <p>축적된 데이터는 당사의 건설 특화 AI 모델을 만드는데 활용</p>
      </>
    ),
    target:'_self'
  },
  {
    title:(
      <a href= "../../../docs/GPT/DocsGPT/" target="_self" rel="noopener noreferrer">
      Docs GPT
      </a>       
    ),  
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    Img: docgpt,
    description: (
      <>
        lorem ipsum
      </>
    ),
  },
  {
    title:(
      <a href= "../../../docs/GPT/VoiceGPT/" target="_self" rel="noopener noreferrer">
      Voice GPT
      </a>       
    ),  
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    Img: voicegpt,
    description: (
      <>
        lorem ipsum
      </>
    ),
  },
  // {
  //   // title: (
  //   //   <a href="https://render.hanmigpt.com/" target="_blank" rel="noopener noreferrer">
  //   //     Render GPT
  //   //   </a>
  //   // ), 
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       lorem ipsum
  //     </>
  //   ),
  // },

 //아래 설명 참조//
    //target="_blank": 이 속성은 링크를 클릭했을 때 새 창이나 새 탭에서 링크의 대상 페이지를 열도록 합니다.
    //rel="noopener noreferrer":
    //noopener: 이 속성은 새로 연 페이지가 window.opener를 사용하여 원본 페이지를 참조할 수 없도록 합니다. 이는 성능 향상과 보안 이점을 제공합니다.
    //noreferrer: 이 속성은 브라우저가 HTTP Referer 헤더를 전송하지 않도록 합니다. 이는 개인 정보 보호와 보안에 도움이 됩니다.

  {
    title:(
      <a href= "../../../docs/GPT/Google/" target="_self" rel="noopener noreferrer">
      Google Search
      </a>       
    ),  
    Img: google,
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        lorem ipsum
      </>
    ),
  },
];

function Feature({Svg, Img, title, description, link, idx}) {
  return (
    <div className={clsx('col col--6', idx < 3 && styles.verticalSpacing)}>
      <div className={clsx("text--center", styles.imageContainer)} >
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Img && <img src={Img} className={styles.featureImg} alt={title} />}
        <div className={styles.titleBanner}>
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>{title}</a>
        </div>
      </div>
      {/* <div className={clsx("text--center padding-horiz--md")}>
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div> */}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* 행(row) 추가 */}
        <div className="row">
          <div className="col col--12">
            <h1 className={styles.mainTitle}>HanmiGPT 플러그인 소개</h1> {/* 큰 타이틀 추가 */}
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
