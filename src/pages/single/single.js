import React, {Component} from 'react'
import { Steps, Step } from 'react-multistep-component'
import {Link} from 'react-router'

class Single extends Component {
  constructor () {
    super()
    this.state = {
      phases: {
        old: [],
        new: []
      }
    }
    this.addOldphase = this.addOldphase.bind(this)
    this.addNewphase = this.addNewphase.bind(this)

    this.updateOldPhase = this.updateOldPhase.bind(this)
    this.updateNewPhase = this.updateNewPhase.bind(this)

    this.deleteOldPhase = this.deleteOldPhase.bind(this)
    this.deleteNewPhase = this.deleteNewPhase.bind(this)
  }

  updateOldPhase (e) {
    e.persist()
    let phase = this.state.phases.old[e.target.id]
    phase.name = e.target.value
  }

  updateNewPhase (e) {
    e.persist()
    let phase = this.state.phases.new[e.target.id]
    phase.name = e.target.value
  }

  deleteOldPhase (i) {
    let phases = Object.assign({}, this.state.phases)
    let newPhases = [
      ...phases.old.slice(0, i),
      ...phases.old.slice(i + 1),
    ]
    phases.old = newPhases
    this.setState({
      phases: phases
    })
  }

  deleteNewPhase (i) {
    let phases = Object.assign({}, this.state.phases)
    let newPhases = [
      ...phases.new.slice(0, i),
      ...phases.new.slice(i + 1),
    ]
    phases.new = newPhases
    this.setState({
      phases: phases
    })
  }

  addOldphase () {
    let phases = Object.assign({}, this.state.phases)
    let newPhases = {
      name: '',
      index: phases.old.length
    }
    phases.old.push(newPhases)
    this.setState({
      phases: phases
    })
  }

  addNewphase () {
    let phases = Object.assign({}, this.state.phases)
    let newPhases = {
      name: '',
      index: phases.new.length
    }
    phases.new.push(newPhases)
    this.setState({
      phases: phases
    })
  }

  render () {
    console.log(this.state.phases)
    let _this = this
    let oldConfirmedPhases = this.state.phases.old.map(function (phase, i) {
      let top = (50 * (i + 1) + 50)
      return (
        <div key={i} data-index={i} style={{top: top + 'px'}} className={'phase ' + phase.name}>
          {phase.name}
        </div>
      )
    })
    let newConfirmedPhases = this.state.phases.new.map(function (phase, i) {
      console.log(phase.name)
      let top = (50 * (i + 1) + 50)
      return (
        <div key={i} data-index={i} style={{top: top + 'px'}} className={'phase ' + phase.name}>
          {phase.name}
        </div>
      )
    })
    let oldPhases = this.state.phases.old.map(function (phase, i) {
      let top = (50 * (i + 1) + 20)
      return (
        <div key={i} data-index={i} style={{top: top + 'px'}} className={'phase ' + phase.name}>
          <input onChange={_this.updateOldPhase} id={i} placeholder='Inserisci il nome...' />
          <span className='icon-trash' onClick={() => _this.deleteOldPhase(i)}></span>
        </div>
      )
    })
    let newPhases = this.state.phases.new.map(function (phase, i) {
      let top = (50 * (i + 1) + 20)
      return (
        <div key={i} data-index={i} style={{top: top + 'px'}} className={'phase ' + phase.name}>
          <input onChange={_this.updateNewPhase} id={i} placeholder='Inserisci il nome...'/>
          <span className='icon-trash' onClick={() => _this.deleteNewPhase(i)}></span>
        </div>
      )
    })
    return (
      <div className='habits_game'>
      <Link className='game_link' to='/'>Torna alla home</Link>
      <Steps
        prevButton='Torna indietro'
        nextButton='Finito? Prosegui!'
        mountOnlySiblings
      >
        <Step>
          <div className='medium-6 columns'>
            <div className='game_explanation'>
              <span className='explanation_step'>Step 0</span>
              <h1 className='explanation_title'>Definisci le fasi della vita così come te le hanno insegnate</h1>
              <p>Qualcuno dice: chi non ha un piano si troverà molto presto a seguire il piano di qualcun altro.
Come percepisci le diverse fasi della vita? Vorresti cambiare qualcosa? Ti senti parte di un piano deciso da altri?
In questo primo step aggiungi  nel diagramma di destra le fasi della vita che reputi siano quelle comunemente accettate dalle persone.</p>
            </div>
          </div>
          <div className='medium-6 columns'>
            <div className='game_play'>
              <button onClick={() => this.addOldphase()} className='play_add'>Aggiungi una fase</button>
              <div className='play_phase'>
                <div className='phase_line'></div>
                <div className='phase born'>Nasci</div>
                {oldPhases}
                <div className='phase die'>Muori</div>
              </div>
            </div>
          </div>
        </Step>
        <Step>
          <div className='medium-6 columns'>
            <div className='game_explanation'>
              <span className='explanation_step'>Step 1</span>
              <h1 className='explanation_title'>Ridefinisci le fasi della vita così come ti senti di voler vivere</h1>
              <p>Qual'è il tuo approccio alla vita? Come pensi andrebbe divisa la vita dalla nascita alla morte? Ci sono diversi momenti in cui diverse priorità vanno definite? Modifica il diagramma di destra in base alla tua personale visione di come una vita andrebbe vissuta.</p>
            </div>
            </div>
            <div className='medium-6 columns'>
              <div className='game_play'>
                <button onClick={() => this.addNewphase()} className='play_add'>Aggiungi una fase</button>
                <div className='play_phase'>
                  <div className='phase_line'></div>
                  <div className='phase born'>Nasci</div>
                  {newPhases}
                  <div className='phase die'>Muori</div>
                </div>
              </div>
            </div>
          </Step>
          <Step>
            <div className='medium-6 columns'>
              <div className='game_explanation'>
                <span className='explanation_step'>Step 2</span>
                <h1 className='explanation_title'>Confronta le due linee temporali</h1>
                <p>Ora viene il bello...<br />Confronta i due diagrammi, sono simili o diversi? Come ti senti? Da cosa dipendono, se ci sono, le differenze tra i due diagrammi? Quale diagramma ti da più sicurezza e perchè? <br /></p>
              </div>
              </div>
              <div className='medium-6 columns'>
                <div className='game_play'>
                  <div className='play_half left'>
                    <div className='phase_line'></div>
                    <h4>Le fasi della vita secondo la società</h4>
                    <div className='phase born'>Nasci</div>
                    {oldConfirmedPhases}
                    <div className='phase die'>Muori</div>
                  </div>
                  <div className='play_half right'>
                    <div className='phase_line'></div>
                    <h4>Le fasi della vita secondo te</h4>
                    <div className='phase born'>Nasci</div>
                    {newConfirmedPhases}
                    <div className='phase die'>Muori</div>
                  </div>
                </div>
              </div>
            </Step>
      </Steps>

      </div>
    )
  }
}
export default Single
