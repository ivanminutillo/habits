import React from 'react'
import {Link} from 'react-router'

const Home = () => {
  return (
    <div>
    <div className='header'>
      <ul className='header_right'>
        <li className='right_item'><Link to='/about'>About the Project</Link></li>
        <li className='right_item'><Link to='/contact'>Contact me</Link></li>
      </ul>
    </div>
    <div className='home_intro row'>
      <div className='medium-4 columns'>
        <h1>Esiste solo un modo giusto <br /> di vivere la propria vita?</h1>
        <p>Le fasi della vita di una persona sono comunemente accettate e pochissime volte messe in discussione, nonostante l'enorme importanza che rivestono nella vita di ogni essere umano. <br />
        Cosa succederebbe se ognuno di noi si prendesse del tempo per ripensare le fasi della propria vita, basandosi sulla propria idea di come una vita andrebbe vissuta? <br /> Cosa succederebbe poi se quella persona cominciasse a seguire, con la stessa fedeltà con la quale aderisce oggi al vivere imposto dalla società, lo stile di vita da lui creato?</p>
        <div className='intro_actions'>
          <Link className='actions_single' to='/single'>Giocatore singolo</Link>
          <Link className='actions_multi' to='/multi'>Giocatore multiplo</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
