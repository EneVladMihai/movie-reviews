
function App() {
  return <div>
    <Header/>

    <h4>Top paid</h4>
    <div>
      <div>
        <Tab name='Top free'/>
        <Tab name='Top grossing'/>
        <Tab name='Top paid'/>
      </div>
      <div>
        {
          topPaidGames.map(game => {
            return (
              <GameCard
                title={game.title}
                img={game.img}
                rating={game.rating}
                price={game.price}
              />
            )
          })
        }
      </div>
    </div>

    <h4>Top-rated games</h4>
    <div>
      {
        topRatedGames.map(game => {
          return (
            <div>
              <VideoPreview video={game.video}/>
              <GameCard
                title={game.title}
                img={game.img}
                rating={game.rating}
                price={game.price}
                />
            </div>
          )
        })
      }
    </div>
  </div>
}

export default App;