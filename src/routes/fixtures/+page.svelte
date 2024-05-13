<script>
    export let data ;
    // console.log(data.json())
  </script>

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
    
    {#each data.fixtures as fixture}
        <tr>
            <td>{fixture.game_datetime}</td>
            <td>{fixture.opposition}</td>
            <td>{fixture.field}</td>
            <td>{fixture.score}</td>
            <td>{fixture.result}</td>
        </tr>
        
    {/each}
    {console.log(data.fixtures)}
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
    color: #FFFFFF;
}


thead {
  background-color: #383838;
}

tbody {
  background-color: #242424;
}

</style>