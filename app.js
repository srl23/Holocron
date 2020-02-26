$(() => {
  $('#vehicle-btn').on('click', () => {

  });
  $('#characterForm').on('submit', (event) => {

    event.preventDefault();

    const usersInput = $('input[type="text"]').val();

    $.ajax({
      url:'https://swapi.co/api/people/?search=' + usersInput,
    }).then(
      (data) => {
        console.log(data);
        const $characterReturnData = data.results[0];
        console.log($characterReturnData);
        $('#name').text($characterReturnData.name);
        $('#hair_color').text($characterReturnData.hair_color);
        $('#eye_color').text($characterReturnData.eye_color);
        $('#birth_year').text($characterReturnData.birth_year);
        $('#height').text($characterReturnData.height);
        $('#weight').text($characterReturnData.mass);
      },
      (error) => {
        console.log('Not working, mate!');
      }
    )
  });
  $('#planetForm').on('submit', (event) => {
    event.preventDefault();

    const usersInput = $('input[type="text"]').val();

    $.ajax({
      url:'https://swapi.co/api/planets/?search=' + usersInput,
    }).then(
      (data) => {
        console.log(data);
        const $planetReturnData = data.results[0];
        console.log($planetReturnData);
        $('#name').text($planetReturnData.name);
        $('#climate').text($planetReturnData.climate);
        $('#diameter').text($planetReturnData.diameter);
        $('#population').text($planetReturnData.population);
        $('#gravity').text($planetReturnData.gravity);
        },
      (error) => {
        console.log('Not working, mate!');
      }
    )
  });
  $('#starshipForm').on('submit', (event) => {
    event.preventDefault();

    const usersInput = $('input[type="text"]').val();

    $.ajax({
      url:'https://swapi.co/api/starships/?search=' + usersInput,
    }).then(
      (data) => {
        console.log(data);
        const $starshipReturnData = data.results[0];
        console.log($starshipReturnData);
        $('#starshipName').text($starshipReturnData.name);
        $('#crew').text($starshipReturnData.crew);
        $('#length').text($starshipReturnData.length);
        $('#passengers').text($starshipReturnData.passengers);
        $('#cargocapacity').text($starshipReturnData.cargo_capacity);
        $('#cost').text($starshipReturnData.cost_in_credits);
        },
      (error) => {
        console.log('Not working, mate!');
      }
    )
  });
  $('#vehicles').on('submit', (event) => {
    event.preventDefault();

    const usersInput = $('input[type="text"]').val();

    $.ajax({
      url:'https://swapi.co/api/vehicles/?search=' + usersInput,
    }).then(
      (data) => {
        console.log(data);
        const $vehicleReturnData = data.results[0];
        $('#vehicle-name').text($vehicleReturnData.name);
        $('#vehicle-model').text($vehicleReturnData.model);
        $('#vehicle-manufacturer').text($vehicleReturnData.manufacturer);
        $('#vehicle-cost').text($vehicleReturnData.cost_in_credits);
        $('#vehicle-length').text($vehicleReturnData.length);
        $('#vehicle-crew').text($vehicleReturnData.crew);
        $('#vehicle-passengers').text($vehicleReturnData.passengers);
        $('#vehicle-cargo-capacity').text($vehicleReturnData.cargo_capacity);
        $('#vehicle-class').text($vehicleReturnData.vehicle_class);
      },
      (error) => {
        console.log('Not working, mate!');
      }
    )
  });
});
