import {Component} from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import RulesModal from '../RulesModel'
import './index.css'

class MemoryMatrix extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: [], // Store the grid cells
      highlightedCells: [], // Store the indices of highlighted cells
      isModelOpen: false, // Modal visibility state
      level: 1, // Current level
      gridSize: 3, // Initial grid size
      cellsToRemember: 3, // Number of cells to remember
      gameState: 'playing', // Game state: playing, won, lost
    }
    this.intervalId = null // Interval ID for timer
  }

  componentDidMount() {
    this.generateGrid()
    this.startGame()
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  // Generate a new grid with random numbers
  generateGrid = () => {
    const {gridSize} = this.state
    const grid = Array.from(
      {length: gridSize * gridSize},
      (_, index) => index + 1,
    )
    this.setState({grid})
  }

  // Start the game by highlighting cells
  startGame = () => {
    const {cellsToRemember} = this.state
    this.highlightCells(cellsToRemember)
    this.intervalId = setInterval(this.clearHighlights, 3000) // Clear highlights after 3 seconds
  }

  // Highlight random cells
  highlightCells = count => {
    const {grid} = this.state
    const highlightedCells = []
    while (highlightedCells.length < count) {
      const randomIndex = Math.floor(Math.random() * grid.length)
      if (!highlightedCells.includes(randomIndex)) {
        highlightedCells.push(randomIndex)
      }
    }
    this.setState({highlightedCells})
  }

  // Clear highlighted cells
  clearHighlights = () => {
    this.setState({highlightedCells: []})
    clearInterval(this.intervalId)
  }

  // Handle cell click
  handleClick = index => {
    const {gameState, highlightedCells} = this.state
    if (gameState === 'playing') {
      if (highlightedCells.includes(index)) {
        // Correct cell clicked
        this.checkLevelCompletion()
      } else {
        // Incorrect cell clicked
        this.setState({gameState: 'lost'})
      }
    }
  }

  // Check if the level is completed
  checkLevelCompletion = () => {
    const {level, gridSize, cellsToRemember, highlightedCells} = this.state

    if (level === gridSize && cellsToRemember === highlightedCells.length) {
      // All levels completed
      this.setState({gameState: 'won'})
    } else if (cellsToRemember === highlightedCells.length) {
      // Move to the next level
      this.setState(
        prevState => ({
          level: prevState.level + 1,
          gridSize: prevState.gridSize + 1,
          cellsToRemember: prevState.cellsToRemember + 1,
        }),
        () => {
          this.generateGrid()
          this.startGame()
        },
      )
    }
  }

  // Toggle modal visibility
  toggleModal = () => {
    this.setState(prevState => ({
      isModelOpen: !prevState.isModelOpen,
    }))
  }

  // Restart the game
  restartGame = () => {
    this.setState({
      level: 1,
      gridSize: 3,
      cellsToRemember: 3,
      gameState: 'playing',
    })
    this.generateGrid()
    this.startGame()
  }

  render() {
    const {grid, highlightedCells, isModelOpen, level, gameState} = this.state

    return (
      <div className="memory-matrix-container">
        <div className="game-rules-container">
          <Link to="/" className="back-button">
            <FaArrowLeft className="icon" />
            <p className="back">Back</p>
          </Link>
          <RulesModal isOpen={isModelOpen} onClose={this.toggleModal} />
          <button
            type="button"
            className="rules-button"
            onClick={this.toggleModal}
          >
            Rules
          </button>
        </div>
        <h1 className="game-heading">Memory Matrix</h1>
        <div className="level-container">
          <p className="level">Level: {level}</p>
        </div>
        <div className="game-container">
          {grid.map((cellValue, index) => (
            <button
              key={cellValue} // Using the grid cell value as key
              type="button"
              className={`button ${
                highlightedCells.includes(index) ? 'highlight' : ''
              }`}
              onClick={() => this.handleClick(index)}
              disabled={gameState !== 'playing'}
            >
              {cellValue}
            </button>
          ))}
        </div>
        {gameState === 'won' && (
          <div className="results-container">
            <h2>Congratulations! You have completed all levels.</h2>
            <button type="button" onClick={this.restartGame}>
              Play Again
            </button>
          </div>
        )}
        {gameState === 'lost' && (
          <div className="results-container">
            <h2>Game Over! You clicked the wrong cell.</h2>
            <button type="button" onClick={this.restartGame}>
              Try Again
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default MemoryMatrix
