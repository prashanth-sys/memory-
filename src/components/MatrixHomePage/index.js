import {Link} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

import './index.css'

const MatrixHomePage = () => (
  <div className="matrix-home-page">
    <div className="back-icon">
      <Link to="/" className="link">
        <button type="button" className="back-button">
          <FaArrowLeft className="icon" />
          <p className="back">Back</p>
        </button>
      </Link>
    </div>
    <h1 className="game-heading">Memory Matrix</h1>
    <img
      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1708572317/memory_1_bvfmai.png"
      alt="memory matrix"
      className="image"
    />
    <p className="rules">Rules</p>
    <ul className="rules-list-container">
      <li>
        In each level of the Game, Users should be able to see the Grid with (N
        X N) size starting from 3 and the grid will highlight N cells in Blue,
        the N highlighted cells will be picked randomly.
      </li>
      <li>
        The highlighted cells will remain N seconds for the user to memorize the
        cells. At this point, the user should not be able to perform any action.
      </li>
      <li>After N seconds, the grid will clear the N highlighted cells.</li>
      <li>
        At N seconds, the user can click on any cell. Clicking on a cell that
        was highlighted before it will turn blue. Clicking on the other cells
        that were not highlighted before then will turn to red.
      </li>
      <li>
        The user should be promoted to the next level if they guess all N cells
        correctly in one attempt.
      </li>
      <li>
        The user should be taken to the results page if the user clicks on the
        wrong cell.
      </li>
      <li>
        If the user completed all the levels, then the user should be taken to
        the results page.
      </li>
    </ul>
    <Link to="/matrix/game" className="link">
      <button className="start-button" type="button">
        Start playing
      </button>
    </Link>
  </div>
)

export default MatrixHomePage
