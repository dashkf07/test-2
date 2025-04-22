import { DoneIcon } from '../images/done-icon'
import { InProgressIcon } from '../images/in-progress-icon'
import { ProgressBar } from '../images/progress-bar'
import { StartIcon } from '../images/start-icon'
import { ClosedIcon } from '../images/closed-icon'
import styles from './course.module.css'

import { useState } from 'react';

export function Course({ course }) {
  const [isClicked, setIsClicked] = useState(false);
  const isClosed = course.status === 'closed';


  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  const handleTouchStart = () => {
    setIsClicked(true);
  };

  const handleTouchEnd = () => {
    setIsClicked(false);
  };

  return (
    <div 
      className={`${styles.card} ${isClicked ? styles.clicked : ''}`} 
      onMouseDown={handleMouseDown} 
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}  // Для мобильных устройств
      onTouchEnd={handleTouchEnd}
    >
      <div className={isClosed ? styles.imageClosed : styles.image} />
      
      <div className={styles.about}>
        {course.status === 'in progress' && <ProgressBar className={styles.progressBar}/>}
        <p className={isClosed ? styles.titleClosed : styles.title}>{course.name}</p>

        {course.status === 'not started' ? (
          <div className={styles.statusNotStarted}>
            <p>Время начинать</p>
            <a href='/'>
              <StartIcon/>
            </a>
          </div>
        ) : course.status === 'in progress' ? (
          <div className={styles.statusProgress}>
            <p>Прогресс {course.progress}</p>
            <a href='/'>
              <InProgressIcon/>
            </a>
          </div>
        ) : course.status === 'done' ? (
          <div className={styles.statusDone}>
            <p>Курс завершен</p>
            <a href='/'>
              <DoneIcon/>
            </a>
          </div>
        ) : course.status === 'closed' ? (
          <div className={styles.statusClosed}>
            <p>Закрыт</p>
            <a href='/'>
              <ClosedIcon/>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
