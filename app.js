$(() => {
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
});
