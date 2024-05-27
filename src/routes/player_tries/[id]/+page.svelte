<script>
    export let data;
  </script>

  <table>
    <thead>
    <tr>
        <th>player</th>
        <th>game</th>
        <th>tries</th>
        <th>played?</th>
    </tr>
    </thead>
    <tbody>
    {#each data.player_tries as player_try}
        <tr>
            <td>{player_try.player_id}</td>
            <td>{player_try.game_id}</td>
            <td>{player_try.tries}</td>
            <td>{player_try.appearance}</td>
        </tr>
    {/each}
  </tbody>
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
thead {
  background-color: #383838;
}

tbody {
  background-color: #242424;
}
</style>