import React from 'react';
import ReactDOM from 'react-dom';
import { PihaPojat } from './PihaPojat';
import './index.css';

const KUVAT = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5ONSpwVY0QptCQ0xHcOZCdlB5Nb1y6GwP2DF61EbyWKi6IHft&usqp=CAU',
  'https://www.yrittajat.fi/sites/default/files/styles/main_image/public/news_main_image/sylvesterpihapojat.jpg?itok=j_CEQ1J1',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxKkDkLxWEBm3iIZ3pVe7UbEGqbnQquE2xBsTsIo8RRvSpjPGk&usqp=CAU',
  'https://i.ytimg.com/vi/WhvGXmRc-lk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCvNGO-LAyBiW3_MQRK5Ep4jxgSFA',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRImG8GPV3FfcWLyb91P-KK0WFLXzhkwipCZLv-uWes7i5ZUEyI&usqp=CAU',
  'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-1/s720x720/83889191_1599736970191188_4391339494469533696_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=FreNm_JuSEEAX8geeFb&_nc_ht=scontent-hel2-1.xx&_nc_tp=7&oh=01177e64aded17c92e495a35bcf36351&oe=5EEBEE70',
  'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/39861834_1172766746221548_2534986966223552512_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=YM3NUaU1B-8AX_hX9Ve&_nc_ht=scontent-hel2-1.xx&oh=bd1ebef1ecbc9a50e015f5cbdd53cc84&oe=5EEDBBF3',
  'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/39835021_1172767089554847_3708064589141770240_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=FRl-91JGtvYAX8TZn26&_nc_ht=scontent-hel2-1.xx&oh=64aceb5119e8f86c076fc15771a0ea8d&oe=5EEC2B67',
  'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/39862031_1172766929554863_7657901069288079360_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=CrrohnK9WyMAX_ym_K0&_nc_ht=scontent-hel2-1.xx&oh=a50e33b09c6ce9aa4226940702541037&oe=5EEB7E2D',
  'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/37277232_1131882423643314_6063992745297444864_n.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_ohc=fERq7GY02YUAX8axV8H&_nc_ht=scontent-hel2-1.xx&oh=373551ca54aca1f988552a673d5a55e5&oe=5EEB5330',
  'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/67904341_1418370851661135_2035385899222564864_n.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=0-uAPORFQVIAX_GkJQN&_nc_ht=scontent-hel2-1.xx&oh=df4e4e6ee1cdd60ea6d3e7b8cc5d6b94&oe=5EED1A9C'
];

class PihaPojatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % KUVAT.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const src = KUVAT[this.state.currentGP];
    return <PihaPojat src={src}/>;
  }
}

ReactDOM.render(
  <PihaPojatContainer />,
  document.getElementById('root')
);
