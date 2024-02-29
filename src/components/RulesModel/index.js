// RulesModal.js

import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
import './index.css'

const RulesModal = ({isOpen, onClose}) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} className="model-container">
    <div className="model">
      <button type="button" onClick={onClose} className="close-button">
        <CgClose className="close-icon" />
      </button>
      <div className="rules-content">
        <h1 className="rules">Rules</h1>
        <ul className="rules-list-container">
          <li>
            In each level of the Game, Users should be able to see the Grid with
            (N X N) size starting from 3 and the grid will highlight N cells in
            Blue, the N highlighted cells will be picked randomly.
          </li>
          <li>
            The highlighted cells will remain N seconds for the user to memorize
            the cells. At this point, the user should not be able to perform any
            action.
          </li>
          <li>After N seconds, the grid will clear the N highlighted cells.</li>
          <li>
            At N seconds, the user can click on any cell. Clicking on a cell
            that was highlighted before it will turn blue. Clicking on the other
            cells that were not highlighted before then will turn to red.
          </li>
          <li>
            The user should be promoted to the next level if they guess all N
            cells correctly in one attempt.
          </li>
          <li>
            The user should be taken to the results page if the user clicks on
            the wrong cell.
          </li>
          <li>
            If the user completed all the levels, then the user should be taken
            to the results page.
          </li>
        </ul>
      </div>
    </div>
  </Modal>
)

export default RulesModal
