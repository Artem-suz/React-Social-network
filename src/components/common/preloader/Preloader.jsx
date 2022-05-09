import preloader from '../../../assets/images/Spinner.svg'
import s from './Preloader.module.css'

const Preloader= (props) => {

    return (
        <img src={preloader} className={s.preloader} alt='Loading'/>
    )
}

export default Preloader