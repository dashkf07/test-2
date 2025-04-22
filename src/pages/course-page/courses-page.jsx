import styles from './courses-page.module.css'
import { Course } from '../../components/course/course'


const courses = [
    {
        id: 1,
        name: 'Название курса',
        status: 'not started'
    },
    {
        id: 2,
        name: 'Название курса',
        status: 'in progress',
        progress: '57%',

    },
    {
        id: 3,
        name: 'Название курса',
        status: 'done',
    },
    {
        id: 4,
        name: 'Название курса',
        status: 'closed',
    }
]


export function CoursesPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.info}>
                    <p className={styles.name}>AYA Leader</p>
                    <p className={styles.title}>Курсы</p>
                </div>
                <img className={styles.avatar} alt='profile picture'/>
            </div>
            
            <p className={styles.course}>Выберите курс</p>
            
            <div className={styles.coursesList}>
                {courses.map((course) => (
                    <Course course={course} key={course.id} />
                )
                
                )}

            </div>
        
        </div>
    )
}