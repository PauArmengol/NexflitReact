import { data } from './Data.js';
import styles from './Footer.module.css';
import LanguageIcon from '@mui/icons-material/Language';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';



const Footer = () => {

    return (
        <div className={styles.container}>
          
          <div className={styles.footer_wrapper}>

            <div className={styles.footer} id="footer">

                <div className={styles.sociallinks}>
                  <a className={styles.sociallink} href='#' target='_blank' aria-label='facebook'>
                      <FacebookIcon className={styles.icon} />
                  </a>
                  <a className={styles.sociallink} href='#' target='_blank' aria-label='instagram'>
                      <InstagramIcon className={styles.icon} />
                  </a>
                  <a className={styles.sociallink} href='#' target='_blank' aria-label='twitter'>
                      <TwitterIcon className={styles.icon} />
                  </a>
                  <a className={styles.sociallink} href='#' target='_blank' aria-label='youtube'>
                      <YouTubeIcon className={styles.icon} />
                  </a>
                </div>
                
                <ul className={styles.links}>
                  {data.map((el, i) => (
                    <li className={styles.item} key={i}>
                      <a href='#footer'>{el}</a>
                    </li>
                  ))}
                </ul>
                
                <div className={styles.language}>
                  <LanguageIcon className={styles.LanguageIcon} />
                  <select name="language" id="language">
                    <option selected value="es">Español</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <p className={styles.footer_country}> 2023 Nexflit, Inc.</p>
            </div>

          </div>

        </div>
      )
    
}

export default Footer