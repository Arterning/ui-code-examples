function getGraphData() {
  const query = `
  
  query Account($name: String, $city :String) {
    getAccount($name: String) {
        name
        age
        sex
        salary(city:$city)
    }
  }
  
  `;

  const variables = {
    name: "test",
    city: "BB",
  };

  fetch("/graphwl", {
    method: "POST",
    headers: {
      ContentType: "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    })
      .then((res) => res.json)
      .then((json) => {
        console.log(json);
      }),
  });
}
