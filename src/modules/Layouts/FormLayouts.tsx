import styles from './styleFormLayouts.module.scss';
import backgr from './../../img/pixel-back.jpg'
import FormHeader from '../auth/HeaderForm';

type FormLayoutsType = {
   title: string,
   text: string,
   link: string,
   textLink: string,
   children: JSX.Element
}

const FormLoyauts = ({ children, ...props }: FormLayoutsType) => {
   return <section className={styles.page} style={{ backgroundImage: `url(${backgr})` }}>
      <div className={styles.page__wrapper}>
         <div className={styles.row}>
            <div className={styles.sectionForm}>
               <FormHeader
                  title={props.title}
                  text={props.text}
                  link={props.link}
                  textLink={props.textLink}
               />
               {children}
            </div>
         </div>
      </div>
   </section>
}
export default FormLoyauts;