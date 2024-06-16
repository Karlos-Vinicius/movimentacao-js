const  player = new Player(0, 0, 60)
const game = new Game()

game.addElement(player)
game.update()

requestAnimationFrame(game.update)
