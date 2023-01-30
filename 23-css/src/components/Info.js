import './Info.css'
import styles from './Info.module.css'
console.log(styles)

// {
//     "info": "Info_info__L46eD",
//     "myOtherButton": "Info_myOtherButton__E44iV"
// }

function Info (){
    return (
       <div className={styles.info}>
       <h1>Hello component</h1>
       <h2>Heiding in Info</h2>
       <button className={styles.myOtherButton}>My button CSS myOtherButton </button>
       <button className='my-button'>Click me Info component!!!</button>
       </div> 
    )
}

export default Info