<script>
    export let data;
  </script>

  <table>
    <tr>
        <th>player</th>
        <th>game</th>
        <th>tries</th>
        <th>played?</th>
    </tr>
    {#each data.player_tries as player_try}
        <tr>
            <td>{player_try.player_id}</td>
            <td>{player_try.game_id}</td>
            <td>{player_try.tries}</td>
            <td>{player_try.appearance}</td>
        </tr>
        {console.log(data)}
    {/each}
    </table>

<style>
* {
  font-family: "Ubuntu Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}

tr:nth-child(even) {
  background-color: #D6EEEE;
}
tr {
    padding:1px;
    margin: 1px;
    border: 5px solid #000000;
}
</style>