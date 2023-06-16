import { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import testimonio from '../assets/testimonios.png';
import phrases from '../utils/PhrasesData';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + phrases.length) % phrases.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
  };

  const currentPhrase = phrases[currentIndex];
  
  return (
    <div className="container text-black text-center mt-9">
      <p><img src={testimonio} alt="title" /></p>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary m-5" onClick={goToPrev}>
          <ArrowBackIosNewIcon/>
          </button>
        </div>
        <div className="col">
          <p className="bd-placeholder-img m-5 text-center bg-quote-background p-4 rounded-5">{currentPhrase.quote}</p>
          <p className="bd-placeholder-img m-5 text-center">- {currentPhrase.author}</p>
        </div>
        <div className="col">
          <button className="btn btn-primary m-5" onClick={goToNext}>
          <ArrowForwardIosIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonios








