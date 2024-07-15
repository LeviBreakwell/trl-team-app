<script >
  // export { load } from './+page.server'
  async function getSeasonGames() {
    const resSeason = await fetch('/api/season'); 
    if (!resSeason.ok) {
      throw new Error('Failed to fetch season games');
    } 
    let season = await resSeason.json();

    return season;
  }
  $: expandedGameId = null;

  function toggleTries(gameId) {
    
    if (expandedGameId === gameId) {
      expandedGameId = null;
    } else {
      expandedGameId = gameId;
    }
    console.log(expandedGameId)
    {console.log(expandedGameId == gameId)}
  }

</script>

<main>
  <h2>Games</h2>
  {#await getSeasonGames()}
    <p>Loading...</p>
  {:then season}
    <table>
      <thead>
        <tr>
          <th>kick off</th>
          <th>opposition</th>
          <th>field</th>
          <th>score</th>
          <th>result</th>
        </tr>
      </thead>
      <tbody>
        {#each season.data as game}
          <tr>
            <td>{game.id}</td>
            <td>{game.opposition}</td>
            <td>{game.field}</td>
            <td>{game.score}</td>
            <td>{game.result}</td>
            <td>
              
              <button on:click={() => toggleTries(game.id)}>
                {expandedGameId === game.id ? 'Hide Tries' : 'Show Tries'}
                
              </button>
            </td>
          </tr>
          {#if expandedGameId === game.id}
            <tr>
              <td colspan="3">
                <table>
                  <thead>
                    <tr>
                      <th>Player</th>
                      <th>Tries</th>
                      <th>Played?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#each game.player_tries as goal}
                      <tr>
                        <td>{goal.players.name}</td>
                        <td>{goal.tries}</td>
                        <td>{goal.appearance}</td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  {:catch error}
  <p>{error.message}</p>
  {/await}
</main>



  <!-- <table>
    <thead>
    <tr>
        <th>kick off</th>
        <th>opposition</th>
        <th>field</th>
        <th>score</th>
        <th>result</th>
    </tr>
    </thead>
    <tbody>
    {console.log(data.fixtures)}

    {#each data.fixtures as fixture}
        <tr on:click={handleGameClick(fixture.id)}>
            <td>{fixture.game_datetime}</td>
            <td>{fixture.opposition}</td>
            <td>{fixture.field}</td>
            <td>{fixture.score}</td>
            <td>{fixture.result}</td>

            <a href=''
              on:click={handleGameClick(fixture.id)}
            >Tries</a>
        </tr>
        {#if selectedGameId}
          <h2>Game Tries</h2>
          {#if gameTries.length === 0}
          {console.log(gameTries)}
            <p>Loading game tries...</p>
          {:else}
            <table>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Played?</th>
                  <th>Tries</th>
                </tr>
              </thead>
              <tbody>
                {#each gameTries as tri}
                  <tr>

                    <td>{tri.players.name}</td>
                    <td>{tri.appearance}</td>
                    <td>{tri.tries}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
        {/if}
        {/if}
    {/each}
  </tbody>
    </table> -->
    <!-- {#if $page.state.selected }
      <Modal showModal={showModal} on:close={() =>
       showModal =false
      }>

        <Tries data = {$page.state.selected}/>  
      </Modal>
    {/if} -->


<style>
* {
  font-family: "Ubuntu Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
    color: #FFFFFF;
}
table {
    width: 100%;
    border-collapse: collapse;
    /* margin-top: 20px; */
  }
th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
button {
    padding: 5px 10px;
    background-color: #383838
  }

button:hover {
  background-color: #ddd;
}

thead {
  background-color: #383838;
}

tbody {
  background-color: #242424;
}
.error {
    color: red;
  }

</style>